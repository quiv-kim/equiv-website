/**
 * EQUIV Valuation Engine
 * Version 1.5
 */
(function () {
  "use strict";

  const ENGINE_VERSION = "1.5";
  const config = window.EQUIV_VALUATION_CONFIG;
  if (!config) throw new Error("EQUIV valuation config is required.");

  const MODEL_NAMES = {
    STABLE_PROFIT: "Stable Profit Model",
    TEMPORARY_LOSS: "Temporary Loss Model",
    TURNAROUND: "Turnaround Model",
    HIGH_GROWTH: "High-Growth Model",
    ASSET_BASED: "Asset-Based Model",
    ADDITIONAL_REVIEW: "Additional Review Model",
  };

  const n = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const round = (value) => Math.round((value + Number.EPSILON) * 10) / 10;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const hasValue = (value) => value !== "" && value !== null && value !== undefined;
  const cagr = (start, end, years) => (start > 0 && end >= 0 ? Math.pow(end / start, 1 / years) - 1 : 0);

  const validateInput = (input) => {
    const errors = [];
    const requiredRevenue = [input.yearMinus3Revenue, input.yearMinus2Revenue, input.latestRevenue];
    if (!config.industries[input.industry]) errors.push("업종을 선택해 주십시오.");
    if (requiredRevenue.some((value) => !hasValue(value) || n(value) <= 0)) errors.push("최근 3개년 매출은 0보다 커야 합니다.");
    [input.debt, input.cash].forEach((value) => {
      if (!hasValue(value) || n(value) < 0) errors.push("금융부채와 현금은 0 이상이어야 합니다.");
    });
    [input.operatingAssetValue, input.nonOperatingRealEstate, input.nonOperatingFinancialAssets, input.otherLiabilities, input.normalizableExpenses, input.oneOffIncome]
      .filter(hasValue)
      .forEach((value) => {
        if (n(value) < 0) errors.push("자산과 재무 조정항목은 0 이상이어야 합니다.");
      });
    if ((hasValue(input.forecastRevenue) || hasValue(input.forecastProfit)) && !input.forecastEvidence) {
      errors.push("예상 실적을 입력한 경우 근거 수준을 선택해야 합니다.");
    }
    if (n(input.normalizableExpenses) > n(input.latestRevenue) * config.validation.maxNormalizableExpenseToRevenue) {
      errors.push("정상화 가능 비용이 테스트 상한을 초과해 추가 검토가 필요합니다.");
    }
    return errors;
  };

  const weightedHistoricalProfit = (input) => {
    const w = config.historicalWeights;
    return n(input.yearMinus3Profit) * w.yearMinus3 + n(input.yearMinus2Profit) * w.yearMinus2 + n(input.latestProfit) * w.latest;
  };

  const normalizedLatestProfit = (input) => {
    const source = hasValue(input.latestEbitda)
      ? n(input.latestEbitda)
      : n(input.latestProfit) + (hasValue(input.depreciation) ? n(input.depreciation) : 0);
    return source + n(input.normalizableExpenses) - n(input.oneOffIncome);
  };

  const classifyCompany = (input) => {
    if (input.industry === "other") return "ADDITIONAL_REVIEW";
    if (input.industry === "asset") return "ASSET_BASED";

    const latestProfit = n(input.latestProfit);
    const profitYears = [input.yearMinus3Profit, input.yearMinus2Profit, input.latestProfit].filter((value) => n(value) > 0).length;
    const revenueCagr = cagr(n(input.yearMinus3Revenue), n(input.latestRevenue), 2);
    const latestMargin = n(input.latestRevenue) > 0 ? latestProfit / n(input.latestRevenue) : 0;
    const hasStrategicStrength = Array.isArray(input.strengths) && input.strengths.some((item) => item !== "none");

    if ((latestProfit <= 0 || latestMargin < config.classification.lowProfitMargin) && revenueCagr >= config.classification.highGrowthRevenueCagr && hasStrategicStrength) {
      return "HIGH_GROWTH";
    }
    if (latestProfit < 0 && n(input.forecastProfit) > 0 && input.forecastEvidence) return "TURNAROUND";
    if (latestProfit < 0 && n(input.yearMinus2Profit) > 0 && n(input.yearMinus3Profit) > 0) return "TEMPORARY_LOSS";
    if (normalizedLatestProfit(input) > 0 && profitYears >= 2) return "STABLE_PROFIT";
    return "ADDITIONAL_REVIEW";
  };

  const recognizedProfit = (input, model) => {
    const normalized = normalizedLatestProfit(input);
    if (model === "TEMPORARY_LOSS") {
      const highest = Math.max(n(input.yearMinus3Profit), n(input.yearMinus2Profit), n(input.latestProfit), 0);
      return Math.min(Math.max(weightedHistoricalProfit(input), normalized, 0), highest * config.temporaryLossProfitCap);
    }
    if (model === "TURNAROUND") {
      const recognition = config.forecastRecognition[input.forecastEvidence] || 0;
      const forecast = Math.max(n(input.forecastProfit), 0) * recognition;
      return Math.max(weightedHistoricalProfit(input), 0) * config.turnaroundWeights.historical + forecast * config.turnaroundWeights.forecast;
    }
    return normalized;
  };

  const calculateAdjustment = (input) => {
    const a = config.adjustments;
    const strengths = Array.isArray(input.strengths) ? input.strengths : [];
    return (a.growth[input.revenueStability] || 0)
      + (a.recurringRevenue[input.recurringRevenue] || 0)
      + (a.customerConcentration[input.customerConcentration] || 0)
      + (a.ownerDependency[input.ownerDependency] || 0)
      + (strengths.some((item) => item !== "none") ? a.competitiveStrength.present : a.competitiveStrength.absent)
      + (a.legalReadiness[input.legalReadiness] || 0)
      + (input.revenueStability === "volatile" ? a.earningsVolatility : 0);
  };

  const adjustMultiples = (multiples, adjustment) => ({
    low: Math.max(config.adjustments.minimumMultiple, multiples.low + adjustment),
    base: Math.max(config.adjustments.minimumMultiple, multiples.base + adjustment),
    high: Math.max(config.adjustments.minimumMultiple, multiples.high + adjustment),
  });

  const equityAdjustments = (input) => -n(input.debt) + n(input.cash) + n(input.nonOperatingRealEstate) + n(input.nonOperatingFinancialAssets) - n(input.otherLiabilities);
  const convertToEquity = (values, input) => {
    const adjustment = equityAdjustments(input);
    return { low: values.low + adjustment, base: values.base + adjustment, high: values.high + adjustment };
  };

  const earningsValue = (profit, multiples) => ({
    low: profit * multiples.low,
    base: profit * multiples.base,
    high: profit * multiples.high,
  });

  const revenueValue = (revenue, multiples) => ({
    low: revenue * multiples.low,
    base: revenue * multiples.base,
    high: revenue * multiples.high,
  });

  const weightedValues = (earningsValues, revenueValues, weights) => ({
    low: earningsValues.low * weights.earningsWeight + revenueValues.low * weights.revenueWeight,
    base: earningsValues.base * weights.earningsWeight + revenueValues.base * weights.revenueWeight,
    high: earningsValues.high * weights.earningsWeight + revenueValues.high * weights.revenueWeight,
  });

  const calculateDistributionValues = (input, model, profit, industry, adjustment) => {
    const contribution = config.distributionRevenueContribution;
    if (!contribution || !contribution.applicableIndustries.includes(input.industry)) return null;
    if (!contribution.applicableModels.includes(model)) return null;

    const baseEarningsValues = earningsValue(profit, industry.earningsMultiples);
    const baseRevenueValues = revenueValue(n(input.latestRevenue), industry.revenueMultiples);
    const contributedValues = weightedValues(baseEarningsValues, baseRevenueValues, contribution);

    const adjustedEarningsValues = earningsValue(profit, adjustMultiples(industry.earningsMultiples, adjustment));
    const adjustedRevenueValues = revenueValue(n(input.latestRevenue), adjustMultiples(industry.revenueMultiples, adjustment * 0.2));
    const adjustedContributedValues = weightedValues(adjustedEarningsValues, adjustedRevenueValues, contribution);

    return {
      low: contributedValues.low + (adjustedContributedValues.low - contributedValues.low),
      base: contributedValues.base + (adjustedContributedValues.base - contributedValues.base),
      high: contributedValues.high + (adjustedContributedValues.high - contributedValues.high),
    };
  };

  const calculateEnterpriseValues = (input, model, profit, earningsMultiples, revenueMultiples) => {
    if (model === "HIGH_GROWTH") {
      const weights = config.highGrowthWeights;
      const factors = config.strategicRevenueFactors;
      const revenue = n(input.latestRevenue);
      return {
        low: revenue * revenueMultiples.low * weights.revenue + Math.max(profit, 0) * earningsMultiples.low * weights.earnings + revenue * factors.low * weights.strategic,
        base: revenue * revenueMultiples.base * weights.revenue + Math.max(profit, 0) * earningsMultiples.base * weights.earnings + revenue * factors.base * weights.strategic,
        high: revenue * revenueMultiples.high * weights.revenue + Math.max(profit, 0) * earningsMultiples.high * weights.earnings + revenue * factors.high * weights.strategic,
      };
    }
    if (model === "ASSET_BASED") {
      const income = earningsValue(Math.max(profit, 0), earningsMultiples);
      const assetValue = n(input.operatingAssetValue) * (1 - config.assetDisposalDiscount);
      const weights = profit > 0 ? config.assetWeights.profitable : config.assetWeights.lowProfit;
      return {
        low: income.low * weights.income + assetValue * weights.asset,
        base: income.base * weights.income + assetValue * weights.asset,
        high: income.high * weights.income + assetValue * weights.asset,
      };
    }
    return earningsValue(profit, earningsMultiples);
  };

  const tierRate = (value, tiers) => {
    const matchedTier = (Array.isArray(tiers) ? tiers : []).find((tier) => value >= tier.minimum);
    return matchedTier ? matchedTier.rate : 0;
  };

  const calculateScalePremium = (input, model) => {
    const scalePremium = config.scalePremium;
    if (!scalePremium || !scalePremium.applicableModels.includes(model)) return 0;
    const operatingProfitRate = tierRate(Math.max(n(input.latestProfit), 0), scalePremium.operatingProfitTiers);
    const revenueRate = tierRate(Math.max(n(input.latestRevenue), 0), scalePremium.revenueTiers);
    return Math.min(operatingProfitRate + revenueRate, scalePremium.maximumRate);
  };

  const calculateTechnologyBusinessPremium = (input) => {
    const premium = config.technologyBusinessPremium;
    if (!premium || !premium.applicableIndustries.includes(input.industry)) return 0;

    const strengths = Array.isArray(input.strengths) ? input.strengths : [];
    if (!premium.requiredStrengths.every((strength) => strengths.includes(strength))) return 0;
    if (!premium.eligibleRecurringRevenue.includes(input.recurringRevenue)) return 0;

    const revenueCagr = cagr(n(input.yearMinus3Revenue), n(input.latestRevenue), 2);
    const hasGrowth = premium.growthRevenueStability.includes(input.revenueStability)
      || revenueCagr >= config.classification.highGrowthRevenueCagr;
    return hasGrowth ? premium.growthRate : premium.baseRate;
  };

  const calculateAssetValueAdjustment = (input, model) => {
    const adjustment = config.assetValueAdjustment;
    if (!adjustment || !adjustment.applicableIndustries.includes(input.industry)) return 0;
    if (!adjustment.applicableModels.includes(model)) return 0;
    return Math.max(n(input.operatingAssetValue), 0) * adjustment.operatingAssetRecognitionRate;
  };

  const applyValueAdjustment = (values, amount) => ({
    low: values.low + amount,
    base: values.base + amount,
    high: values.high + amount,
  });

  const applyScalePremium = (values, rate) => ({
    low: values.low * (1 + rate),
    base: values.base * (1 + rate),
    high: values.high * (1 + rate),
  });

  const controlRange = (values, model) => {
    const ratio = model === "HIGH_GROWTH" || model === "ASSET_BASED" ? config.rangeControl.exception : config.rangeControl.standard;
    const base = Math.max(values.base, 0);
    const low = clamp(values.low, base * ratio.lowToBase, base);
    const high = clamp(values.high, base, base * ratio.highToBase);
    return {
      low: round(low),
      base: round(base),
      high: round(high),
      centerLow: round(clamp(base * config.rangeControl.center.lowToBase, low, high)),
      centerHigh: round(clamp(base * config.rangeControl.center.highToBase, low, high)),
    };
  };

  const getFactors = (input) => {
    const positive = [];
    const review = [];
    if (input.revenueStability === "growing") positive.push("최근 3년 매출 성장 흐름");
    if (input.revenueStability === "declining" || input.revenueStability === "volatile") review.push("최근 실적 변동성과 매출 흐름");
    if (input.recurringRevenue === "over70" || input.recurringRevenue === "from40to70") positive.push("반복 매출 기반");
    if (input.recurringRevenue === "under20") review.push("낮은 반복 매출 비중");
    if (input.customerConcentration === "under20") positive.push("낮은 고객 집중도");
    if (input.customerConcentration === "from40to60" || input.customerConcentration === "over60") review.push("주요 거래처 매출 의존도");
    if (input.ownerDependency === "low") positive.push("낮은 대표자 의존도");
    if (input.ownerDependency === "high" || input.ownerDependency === "veryHigh") review.push("대표자 중심의 사업 구조");
    if (Array.isArray(input.strengths) && input.strengths.some((item) => item !== "none")) positive.push("기술·브랜드·계약 등 경쟁력 보유");
    if (input.legalReadiness === "partial" || input.legalReadiness === "material") review.push("재무·세무·법률자료 보완 필요");
    if (n(input.debt) > n(input.cash)) review.push("순차입금 조정 영향");
    if (n(input.nonOperatingRealEstate) + n(input.nonOperatingFinancialAssets) > 0) positive.push("비영업자산 조정 가능성");
    return {
      positive: positive.length ? positive : ["입력정보 기준 추가 확인 필요"],
      review: review.length ? review : ["실제 거래 목적과 산업 환경에 대한 추가 검토"],
    };
  };

  const additionalReviewResult = (input, errors) => ({
    configStatus: config.status,
    version: config.version,
    model: "ADDITIONAL_REVIEW",
    modelName: MODEL_NAMES.ADDITIONAL_REVIEW,
    range: null,
    basis: "현재 입력정보만으로는 일반적인 수익배수 방식의 신뢰도가 낮습니다.",
    positiveFactors: getFactors(input).positive,
    reviewFactors: errors.length ? errors : getFactors(input).review,
    strategicComment: "기업의 자산, 기술, 시장성, 사업계획과 거래 목적을 함께 검토해야 합니다.",
  });

  const calculatePreliminaryValue = (input) => {
    const errors = validateInput(input);
    if (errors.length) return additionalReviewResult(input, errors);

    const model = classifyCompany(input);
    if (model === "ADDITIONAL_REVIEW") return additionalReviewResult(input, ["일반적인 자동 분류 기준으로 신뢰도 있는 범위를 산출하기 어렵습니다."]);

    const industry = config.industries[input.industry];
    const adjustment = calculateAdjustment(input);
    const earningsMultiples = adjustMultiples(industry.earningsMultiples, adjustment);
    const revenueMultiples = industry.revenueMultiples ? adjustMultiples(industry.revenueMultiples, adjustment * 0.2) : null;
    const profit = recognizedProfit(input, model);

    if ((model !== "HIGH_GROWTH" && model !== "ASSET_BASED" && profit <= 0)
      || (model === "ASSET_BASED" && n(input.operatingAssetValue) <= 0)) {
      return additionalReviewResult(input, ["선택한 평가모드에 필요한 수익 또는 자산 정보가 부족합니다."]);
    }

    const distributionValues = calculateDistributionValues(input, model, profit, industry, adjustment);
    const preliminaryEnterpriseValues = distributionValues
      || calculateEnterpriseValues(input, model, profit, earningsMultiples, revenueMultiples);
    const assetValueAdjustment = calculateAssetValueAdjustment(input, model);
    const assetAdjustedEnterpriseValues = applyValueAdjustment(preliminaryEnterpriseValues, assetValueAdjustment);
    const scalePremiumRate = calculateScalePremium(input, model);
    const scaleAdjustedEnterpriseValues = applyScalePremium(assetAdjustedEnterpriseValues, scalePremiumRate);
    const technologyBusinessPremiumRate = calculateTechnologyBusinessPremium(input);
    const enterpriseValues = applyScalePremium(scaleAdjustedEnterpriseValues, technologyBusinessPremiumRate);
    if (n(input.debt) > enterpriseValues.high * config.classification.excessiveDebtToPreliminaryEv) {
      return additionalReviewResult(input, ["금융부채가 테스트 산출 영업가치를 크게 초과하여 별도 검토가 필요합니다."]);
    }

    const equityValues = convertToEquity(enterpriseValues, input);
    if (equityValues.high <= 0) return additionalReviewResult(input, ["순차입금과 조정항목 반영 후 양수의 지분가치 범위를 산출하기 어렵습니다."]);

    const range = controlRange(equityValues, model);
    const factors = getFactors(input);
    const basis = hasValue(input.latestEbitda)
      ? "사용자 입력 EBITDA와 정상화 조정 기준"
      : hasValue(input.depreciation)
        ? "영업이익과 감가상각비를 반영한 추정 EBITDA 기준"
        : "영업이익 기준의 예비 산정";

    return {
      configStatus: config.status,
      version: config.version,
      model,
      modelName: MODEL_NAMES[model],
      range,
      basis,
      positiveFactors: factors.positive,
      reviewFactors: factors.review,
      strategicComment: "입력정보 기준으로 수익성, 성장성, 사업 안정성과 거래 구조를 함께 검토한 내부 테스트 결과입니다.",
    };
  };

  window.EQUIVValuationEngine = {
    version: ENGINE_VERSION,
    classifyCompany,
    calculatePreliminaryValue,
    validateInput,
    modelNames: MODEL_NAMES,
  };
})();

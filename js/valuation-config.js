(function () {
  "use strict";

  // INTERNAL CALIBRATION: 아래 설정은 공개 화면에 노출하지 않고 EQUIV 내부 기준으로 관리합니다.
  window.EQUIV_VALUATION_CONFIG = {
    status: "PUBLIC_RELEASE",
    publicReleaseApproved: true,
    version: "1.0-public",
    unit: "억원",
    industries: {
      manufacturing: {
        label: "제조업",
        earningsMultiples: { low: 3.5, base: 4.5, high: 5.5 },
        revenueMultiples: { low: 0.45, base: 0.65, high: 0.85 },
      },
      consumer: {
        label: "식품",
        earningsMultiples: { low: 3.0, base: 4.0, high: 5.0 },
        revenueMultiples: { low: 0.4, base: 0.6, high: 0.8 },
      },
      distribution: {
        label: "유통",
        earningsMultiples: { low: 3.0, base: 4.0, high: 5.0 },
        revenueMultiples: { low: 0.35, base: 0.55, high: 0.75 },
      },
      service: {
        label: "서비스",
        earningsMultiples: { low: 3.0, base: 4.0, high: 5.0 },
        revenueMultiples: { low: 0.35, base: 0.55, high: 0.75 },
      },
      software: {
        label: "IT·소프트웨어",
        earningsMultiples: { low: 4.0, base: 5.5, high: 7.0 },
        revenueMultiples: { low: 0.8, base: 1.2, high: 1.6 },
      },
      asset: {
        label: "자산형 (임대업·호텔·골프장·물류창고 등)",
        earningsMultiples: { low: 2.5, base: 3.5, high: 4.5 },
        revenueMultiples: { low: 0.25, base: 0.4, high: 0.55 },
      },
      other: {
        label: "기타",
        // INTERNAL CALIBRATION: UI 계산 어댑터에서 서비스업 기준의 일반 평가모델로 전달합니다.
        earningsMultiples: { low: 3.0, base: 4.0, high: 5.0 },
        revenueMultiples: { low: 0.35, base: 0.55, high: 0.75 },
      },
    },
    industryModelReferences: {
      other: "service",
    },
    classification: {
      highGrowthRevenueCagr: 0.2,
      lowProfitMargin: 0.03,
      excessiveDebtToPreliminaryEv: 1.5,
    },
    historicalWeights: { yearMinus3: 0.2, yearMinus2: 0.3, latest: 0.5 },
    temporaryLossProfitCap: 1.0,
    forecastRecognition: { strong: 0.7, partial: 0.6, limited: 0.5 },
    turnaroundWeights: { historical: 0.4, forecast: 0.6 },
    highGrowthWeights: { revenue: 0.5, earnings: 0.2, strategic: 0.3 },
    strategicRevenueFactors: { low: 0.15, base: 0.25, high: 0.35 },
    assetWeights: {
      profitable: { income: 0.7, asset: 0.3 },
      lowProfit: { income: 0.3, asset: 0.7 },
    },
    assetDisposalDiscount: 0.1,
    // INTERNAL CALIBRATION: 자산형 기업의 기존 산출가치에 사업용 자산가치 일부를 추가 반영합니다.
    assetValueAdjustment: {
      applicableIndustries: ["asset"],
      applicableModels: ["ASSET_BASED"],
      operatingAssetRecognitionRate: 0.4,
    },
    // INTERNAL CALIBRATION: 기업 규모에 따른 시장 프리미엄 기준이며 업종별 배수와 분리해 관리합니다.
    scalePremium: {
      applicableModels: ["STABLE_PROFIT"],
      operatingProfitTiers: [
        { minimum: 50, rate: 0.25 },
        { minimum: 30, rate: 0.18 },
        { minimum: 20, rate: 0.12 },
        { minimum: 10, rate: 0.07 },
        { minimum: 5, rate: 0.03 },
      ],
      revenueTiers: [
        { minimum: 1000, rate: 0.15 },
        { minimum: 500, rate: 0.1 },
        { minimum: 300, rate: 0.05 },
      ],
      maximumRate: 0.35,
    },
    // INTERNAL CALIBRATION: 유통업의 영업이익 가치와 매출 가치를 혼합하며 화면에 공개하지 않습니다.
    distributionRevenueContribution: {
      applicableIndustries: ["distribution"],
      applicableModels: ["STABLE_PROFIT", "TEMPORARY_LOSS", "TURNAROUND"],
      earningsWeight: 0.9,
      revenueWeight: 0.1,
      calibrationCandidates: [
        { earningsWeight: 0.85, revenueWeight: 0.15 },
        { earningsWeight: 0.8, revenueWeight: 0.2 },
      ],
    },
    // INTERNAL CALIBRATION: IT·소프트웨어 기업의 기술 기반 무형가치 Premium이며 화면에 적용률을 공개하지 않습니다.
    technologyBusinessPremium: {
      applicableIndustries: ["software"],
      requiredStrengths: ["technology", "contract"],
      // 현행 공통 UI의 40~70% 구간은 50% 이상 후보 구간으로 운영상 해석하며 다른 필수조건을 모두 충족해야 적용합니다.
      eligibleRecurringRevenue: ["from40to70", "over70"],
      baseRate: 0.1,
      growthRate: 0.15,
      growthRevenueStability: ["growing"],
    },
    adjustments: {
      growth: { growing: 0.45, stable: 0, volatile: -0.25, declining: -0.45 },
      recurringRevenue: { over70: 0.3, from40to70: 0.15, from20to40: 0, under20: -0.2 },
      customerConcentration: { under20: 0.1, from20to40: 0, from40to60: -0.3, over60: -0.6 },
      ownerDependency: { low: 0.1, medium: 0, high: -0.3, veryHigh: -0.5 },
      competitiveStrength: { present: 0.35, absent: -0.1 },
      legalReadiness: { ready: 0, partial: -0.1, material: -0.3 },
      earningsVolatility: -0.15,
      minimumMultiple: 0.5,
    },
    rangeControl: {
      standard: { lowToBase: 0.8, highToBase: 1.25 },
      exception: { lowToBase: 0.7, highToBase: 1.35 },
      center: { lowToBase: 0.95, highToBase: 1.05 },
      maxHighToLowRatio: 2.0,
    },
    validation: {
      maxNormalizableExpenseToRevenue: 0.15,
    },
  };
})();

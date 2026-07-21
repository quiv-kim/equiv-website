(function () {
  "use strict";

  const modal = document.querySelector("[data-valuation-modal]");
  const openButton = document.querySelector("[data-valuation-open]");
  const closeButtons = document.querySelectorAll("[data-valuation-close]");
  const stage = document.querySelector("[data-valuation-stage]");
  const engine = window.EQUIVValuationEngine;
  const config = window.EQUIV_VALUATION_CONFIG;
  if (!modal || !openButton || !stage || !engine || !config) return;

  const initialState = () => ({ strengths: [] });
  let values = initialState();
  let stepIndex = 0;
  let lastFocused = null;
  let resultLoadingTimer = null;

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const fieldValue = (name) => escapeHtml(values[name] ?? "");
  const selected = (name, value) => values[name] === value ? " selected" : "";
  const checked = (name, value) => Array.isArray(values[name]) && values[name].includes(value) ? " checked" : "";
  const latestFiscalYear = new Date().getFullYear() - 1;
  const totalExperienceSteps = 3;

  const numberField = (name, label, required = false, allowNegative = false, helper = "") => `
    <label class="valuation-field">
      <span>${label}${required ? " *" : ""}</span>
      ${helper ? `<small>${helper}</small>` : ""}
      <input type="number" name="${name}" value="${fieldValue(name)}" step="0.1" ${allowNegative ? "" : 'min="0"'} ${required ? "required" : ""} inputmode="decimal">
    </label>`;

  const selectField = (name, label, options, required = true) => `
    <label class="valuation-field">
      <span>${label}${required ? " *" : ""}</span>
      <select name="${name}" ${required ? "required" : ""}>
        <option value="">선택해 주십시오</option>
        ${options.map(([value, text]) => `<option value="${value}"${selected(name, value)}>${text}</option>`).join("")}
      </select>
    </label>`;

  const steps = [
    {
      title: "회사 기본정보와 최근 실적",
      body: () => `
        <section class="valuation-input-section">
          <h4>회사 기본정보</h4>
          <div class="valuation-fields valuation-fields--single">
            ${selectField("industry", "업종", Object.entries(config.industries).map(([key, item]) => [key, item.label]))}
          </div>
          <p class="valuation-field-note" data-valuation-industry-note="asset"${values.industry === "asset" ? "" : " hidden"}>자산형 · 임대업·호텔·골프장·물류창고 등 사업용 자산가치가 중요한 기업</p>
          <p class="valuation-field-note" data-valuation-industry-note="other"${values.industry === "other" ? "" : " hidden"}>기타 업종은 일반적인 예비 평가모델을 적용합니다. 건설업을 포함한 특수 업종은 사업모델, 면허, 인허가, 자산구조와 거래관행 등에 따라 실제 기업가치가 달라질 수 있습니다. 보다 정확한 기업가치는 EQUIV 전문 상담을 통해 확인하시기 바랍니다.</p>
        </section>
        <section class="valuation-input-section">
          <h4>최근 실적</h4>
          <p class="valuation-section-note">재무제표를 기준으로 금액을 억원 단위로 입력해 주십시오.</p>
          <div class="valuation-year-group"><h5>${latestFiscalYear} · 최근 사업연도 (필수)</h5><div class="valuation-fields">${numberField("latestRevenue", "매출 (억원)", true)}${numberField("latestProfit", "영업이익 (억원)", true, true)}${numberField("latestEbitda", "EBITDA (억원, 선택)", false, true)}${numberField("depreciation", "감가상각비 (억원, 선택)")}</div></div>
          <div class="valuation-year-group"><h5>${latestFiscalYear - 1} · 직전 사업연도 (권장)</h5><div class="valuation-fields">${numberField("yearMinus2Revenue", "매출 (억원)")}${numberField("yearMinus2Profit", "영업이익 (억원)", false, true)}</div></div>
          <div class="valuation-year-group"><h5>${latestFiscalYear - 2} · 2개년 전 (선택)</h5><div class="valuation-fields">${numberField("yearMinus3Revenue", "매출 (억원)")}${numberField("yearMinus3Profit", "영업이익 (억원)", false, true)}</div><p class="valuation-year-note">2개년 전 자료는 선택 입력입니다. 입력하지 않아도 예비 기업가치 산출은 가능하며, 입력자료가 충분할수록 결과 신뢰도는 높아질 수 있습니다.</p></div>
          <div class="valuation-year-group"><h5>${latestFiscalYear + 1} 예상 실적 (선택)</h5><div class="valuation-fields">${numberField("forecastRevenue", "예상 매출 (억원)")}${numberField("forecastProfit", "예상 영업이익 (억원)", false, true)}${selectField("forecastEvidence", "예상 실적 근거", [["strong","객관적 근거 강함"],["partial","일부 근거 있음"],["limited","근거가 제한적"]], false)}</div></div>
        </section>`,
    },
    {
      title: "재무조정과 사업 특성",
      body: () => `
        <section class="valuation-input-section">
          <h4>재무조정</h4>
          <div class="valuation-fields">
            ${numberField("debt", "금융부채 (억원)", true)}${numberField("cash", "현금 및 현금성 자산 (억원)", true)}
            ${numberField("operatingAssetValue", "사업용 자산 가치 (억원)", false, false, "선택 입력 · 공장, 설비 등의 시가")}${numberField("nonOperatingRealEstate", "비영업용 부동산 시가 (억원, 선택)")}
            ${numberField("nonOperatingFinancialAssets", "비영업 금융자산 (억원, 선택)")}${numberField("otherLiabilities", "우발채무 등 별도 조정 부채 (억원, 선택)")}
            ${numberField("normalizableExpenses", "정상화 가능한 비용 (억원)", false, false, "선택 입력 · 대표자 급여, 접대비, 일회성 비용 등 조정 가능한 비용")}${numberField("oneOffIncome", "일회성 이익 (억원, 선택)")}
          </div>
          <p class="valuation-field-note">자산 중심 기업은 공장, 설비 등 사업에 사용되는 자산의 현재 가치를 입력해야 범위를 계산할 수 있습니다.</p>
        </section>
        <section class="valuation-input-section">
          <h4>사업 특성</h4>
          <div class="valuation-fields">
            ${selectField("revenueStability", "최근 3년 매출 흐름", [["growing","지속 성장"],["stable","대체로 안정"],["volatile","변동성이 큼"],["declining","지속 감소"]])}
            ${selectField("recurringRevenue", "반복 매출 비중", [["over70","70% 이상"],["from40to70","40~70%"],["from20to40","20~40%"],["under20","20% 미만"]])}
            ${selectField("customerConcentration", "최대 거래처 매출 비중", [["under20","20% 미만"],["from20to40","20~40%"],["from40to60","40~60%"],["over60","60% 이상"]])}
            ${selectField("ownerDependency", "대표자 의존도", [["low","낮음"],["medium","보통"],["high","높음"],["veryHigh","매우 높음"]])}
            ${selectField("legalReadiness", "재무·세무·법률자료 준비", [["ready","충분히 정리"],["partial","일부 보완 필요"],["material","상당한 보완 필요"]])}
          </div>
        </section>
        <section class="valuation-input-section">
          <h4>보유 경쟁력</h4>
          <fieldset class="valuation-checkbox-group">
            <legend><span>복수 선택 가능</span><small>업종에 따라 기술, 특허, 독자 노하우, AI·소프트웨어, 제조공정, 브랜드, 인허가, 장기계약, 유통망·판매채널 등 해당 기업의 핵심 경쟁력을 선택해 주십시오.</small></legend>
            ${[["technology","기술·특허·노하우"],["brand","브랜드"],["license","인허가 또는 진입장벽"],["contract","장기계약"],["distribution","유통망·판매채널"],["none","특별한 경쟁력 없음"]].map(([value,text]) => `<label><input type="checkbox" name="strengths" value="${value}"${checked("strengths", value)}> <span>${text}</span></label>`).join("")}
          </fieldset>
        </section>
        <label class="valuation-confirm"><input type="checkbox" name="disclaimerConfirmed" value="yes" ${values.disclaimerConfirmed === "yes" ? "checked" : ""} required> <span>본 결과가 전문 상담 이전의 참고용 예비진단이며, 정식 기업가치평가 또는 실제 거래가격이 아님을 확인합니다.</span></label>`,
    },
  ];

  const renderStep = (errorMessage = "") => {
    const step = steps[stepIndex];
    stage.innerHTML = `
      <form class="valuation-form" data-valuation-form novalidate>
        <div class="valuation-progress" aria-label="진행 단계">
          <p>STEP ${stepIndex + 1} / ${totalExperienceSteps}</p>
          <div><span style="width:${((stepIndex + 1) / totalExperienceSteps) * 100}%"></span></div>
        </div>
        <div class="valuation-step"><h3>${step.title}</h3>${step.body()}</div>
        <p class="valuation-error" role="alert">${escapeHtml(errorMessage)}</p>
        <div class="valuation-form-actions">
          ${stepIndex > 0 ? '<button class="btn btn-secondary" type="button" data-valuation-prev>이전</button>' : ""}
          <button class="btn btn-primary" type="submit">${stepIndex === steps.length - 1 ? "예비 기업가치 확인하기" : "다음"}</button>
        </div>
      </form>`;
    const first = stage.querySelector("input, select, button");
    if (first) first.focus();
  };

  const scrollToModalStart = () => {
    const modalTitle = modal.querySelector("#valuation-modal-title");
    if (!modalTitle) return;
    requestAnimationFrame(() => {
      modalTitle.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const renderResultLoading = () => {
    stage.setAttribute("aria-busy", "true");
    stage.innerHTML = `
      <div class="valuation-loading" role="status" aria-live="polite">
        <div class="valuation-loading__inner">
          <p class="valuation-loading__brand">EQUIV Business Valuation</p>
          <span class="valuation-loading__spinner" aria-hidden="true"></span>
          <h3>예비 기업가치를 분석하고 있습니다.</h3>
          <p>입력하신 정보를 바탕으로 결과를 준비하고 있습니다.</p>
          <small>잠시만 기다려 주세요.</small>
        </div>
      </div>`;
    scrollToModalStart();
    resultLoadingTimer = window.setTimeout(() => {
      resultLoadingTimer = null;
      renderResult();
    }, 850);
  };

  const collect = (form) => {
    const data = new FormData(form);
    form.querySelectorAll("input[name], select[name]").forEach((field) => {
      if (field.name === "strengths") return;
      if (field.type === "checkbox") values[field.name] = field.checked ? field.value : "";
      else values[field.name] = field.value;
    });
    if (form.querySelector('[name="strengths"]')) values.strengths = data.getAll("strengths");
  };

  const validateStep = (form) => {
    if (!form.checkValidity()) return "필수 입력항목을 확인해 주십시오.";
    if (stepIndex === 0) {
      const isFilled = (value) => value !== "" && value !== null && value !== undefined;
      if (Number(values.latestRevenue) <= 0) return "최근 사업연도 매출은 0보다 커야 합니다.";
      const optionalYears = [
        [values.yearMinus2Revenue, values.yearMinus2Profit, "직전 사업연도"],
        [values.yearMinus3Revenue, values.yearMinus3Profit, "2개년 전"],
      ];
      for (const [revenue, profit, label] of optionalYears) {
        if (isFilled(revenue) !== isFilled(profit)) return `${label} 매출과 영업이익을 함께 입력해 주십시오.`;
        if (isFilled(revenue) && Number(revenue) <= 0) return `${label} 매출은 0보다 커야 합니다.`;
      }
      const hasForecast = [values.forecastRevenue, values.forecastProfit]
        .some((value) => value !== "" && value !== null && value !== undefined && Number(value) !== 0);
      if (hasForecast && !values.forecastEvidence) return "예상 실적을 입력한 경우 근거 수준을 선택해 주십시오.";
    }
    if (stepIndex === 1 && (Number(values.debt) < 0 || Number(values.cash) < 0)) return "금융부채와 현금은 0 이상이어야 합니다.";
    if (stepIndex === 1 && (!values.strengths.length || (values.strengths.includes("none") && values.strengths.length > 1))) {
      return "경쟁력을 선택해 주십시오. ‘특별한 경쟁력 없음’은 다른 항목과 함께 선택할 수 없습니다.";
    }
    return "";
  };

  const factorList = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const money = (value) => {
    const amount = Number(value);
    if (!Number.isFinite(amount)) return "—";
    const formatted = Math.abs(amount) < 10
      ? amount.toLocaleString("ko-KR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : Math.round(amount).toLocaleString("ko-KR");
    return `${formatted}억원`;
  };
  const hasInputValue = (value) => value !== "" && value !== null && value !== undefined;
  const numericValue = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
  const modelDescriptions = {
    STABLE_PROFIT: "안정적 수익기업 평가모델",
    TEMPORARY_LOSS: "일시적 손실기업 평가모델",
    TURNAROUND: "실적 회복기업 평가모델",
    HIGH_GROWTH: "고성장기업 평가모델",
    ASSET_BASED: "자산 중심기업 평가모델",
    ADDITIONAL_REVIEW: "추가 검토가 필요한 기업",
  };
  const optionalZeroAmountFields = [
    "operatingAssetValue",
    "nonOperatingRealEstate",
    "nonOperatingFinancialAssets",
    "otherLiabilities",
    "normalizableExpenses",
    "oneOffIncome",
  ];
  const optionalPresenceSensitiveFields = ["latestEbitda", "depreciation", "forecastRevenue", "forecastProfit"];

  const normalizeOptionalNumericValues = (input) => {
    const normalized = { ...input };
    optionalZeroAmountFields.forEach((field) => {
      if (!hasInputValue(normalized[field])) normalized[field] = "0";
    });
    optionalPresenceSensitiveFields.forEach((field) => {
      if (!hasInputValue(normalized[field]) || Number(normalized[field]) === 0) normalized[field] = "";
    });
    return normalized;
  };

  const prepareCalculationValues = () => {
    const prepared = normalizeOptionalNumericValues(values);
    const hasPreviousYear = hasInputValue(values.yearMinus2Revenue) && hasInputValue(values.yearMinus2Profit);
    const hasTwoYearsAgo = hasInputValue(values.yearMinus3Revenue) && hasInputValue(values.yearMinus3Profit);
    const reviewFactors = [];

    if (!hasPreviousYear) {
      prepared.yearMinus2Revenue = values.latestRevenue;
      prepared.yearMinus2Profit = values.latestProfit;
    }
    if (!hasTwoYearsAgo) {
      prepared.yearMinus3Revenue = hasPreviousYear ? values.yearMinus2Revenue : values.latestRevenue;
      prepared.yearMinus3Profit = hasPreviousYear ? values.yearMinus2Profit : values.latestProfit;
    }

    const industryModelReference = config.industryModelReferences
      ? config.industryModelReferences[prepared.industry]
      : "";
    if (industryModelReference) prepared.industry = industryModelReference;

    if (!hasPreviousYear && !hasTwoYearsAgo) {
      reviewFactors.push("최근 사업연도 기준으로 예비 기업가치를 산출했습니다. 과거 재무자료를 추가하면 참고 신뢰도를 높일 수 있습니다.");
    } else if (!hasPreviousYear) {
      reviewFactors.push("최근 및 2개년 전 실적을 기준으로 산출했습니다. 직전 사업연도 자료를 추가하면 보다 안정적인 분석이 가능합니다.");
    } else if (!hasTwoYearsAgo) {
      reviewFactors.push("최근 2개 사업연도 실적을 기준으로 산출했습니다. 과거 재무자료를 추가하면 참고 신뢰도를 높일 수 있습니다.");
    }

    return { prepared, reviewFactors };
  };

  const calculateResultConfidence = (result, businessValueResult) => {
    const referenceResult = result.range && result.model !== "ADDITIONAL_REVIEW" ? result : businessValueResult;
    if (!referenceResult.range || referenceResult.model === "ADDITIONAL_REVIEW") {
      return {
        stars: 1,
        label: "참고용 결과",
        description: "입력자료가 제한되어 참고용 결과로 산출했습니다. 보다 정확한 기업가치는 추가 자료 검토와 상담을 통해 확인하실 수 있습니다.",
      };
    }

    const hasPreviousHistoricalYear = hasInputValue(values.yearMinus2Revenue) && hasInputValue(values.yearMinus2Profit);
    const hasTwoYearsAgo = hasInputValue(values.yearMinus3Revenue) && hasInputValue(values.yearMinus3Profit);
    const completedHistoricalYears = 1 + Number(hasPreviousHistoricalYear) + Number(hasTwoYearsAgo);
    const historicalPerformance = completedHistoricalYears / 3;
    const completedRevenueYears = [values.latestRevenue, values.yearMinus2Revenue, values.yearMinus3Revenue].filter(hasInputValue).length;
    const revenueHistory = completedRevenueYears / 3;
    const latestPerformance = [values.latestRevenue, values.latestProfit].every(hasInputValue) ? 1 : 0;
    const profitBasis = hasInputValue(values.latestEbitda) || hasInputValue(values.latestProfit) ? 1 : 0;
    const debtInformation = hasInputValue(values.debt) ? 1 : 0;
    const cashInformation = hasInputValue(values.cash) ? 1 : 0;
    const netDebtInformation = debtInformation && cashInformation ? 1 : 0;
    const assetInformation = hasInputValue(values.operatingAssetValue) && Number(values.operatingAssetValue) > 0 ? 1 : 0;
    const competitiveStrength = values.strengths.some((item) => item !== "none") ? 1 : 0;
    const forecastInformation = hasInputValue(values.forecastRevenue) && hasInputValue(values.forecastProfit)
      ? 1
      : hasInputValue(values.forecastRevenue) || hasInputValue(values.forecastProfit) ? 0.5 : 0;
    const forecastEvidence = values.forecastEvidence === "strong" ? 1 : values.forecastEvidence === "partial" ? 0.6 : values.forecastEvidence === "limited" ? 0.3 : 0;
    const documentReadiness = values.legalReadiness === "ready" ? 1 : values.legalReadiness === "partial" ? 0.5 : 0;
    const criteriaByModel = {
      STABLE_PROFIT: [historicalPerformance, profitBasis, debtInformation, cashInformation, documentReadiness],
      TEMPORARY_LOSS: [historicalPerformance, profitBasis, debtInformation, cashInformation, documentReadiness],
      TURNAROUND: [historicalPerformance, forecastInformation, forecastEvidence, documentReadiness, netDebtInformation],
      HIGH_GROWTH: [revenueHistory, competitiveStrength, forecastInformation, forecastEvidence, netDebtInformation],
      ASSET_BASED: [assetInformation, debtInformation, cashInformation, latestPerformance, documentReadiness],
    };
    const criteria = criteriaByModel[referenceResult.model] || [historicalPerformance, netDebtInformation, documentReadiness];
    const fulfillment = criteria.reduce((total, criterion) => total + criterion, 0) / criteria.length;
    const baseStars = fulfillment >= 0.95 ? 5 : fulfillment >= 0.75 ? 4 : fulfillment >= 0.55 ? 3 : fulfillment >= 0.35 ? 2 : 1;
    const historyCap = hasPreviousHistoricalYear && hasTwoYearsAgo ? 5 : hasPreviousHistoricalYear ? 4 : 3;
    const calculatedStars = Math.min(baseStars, historyCap);
    const needsEquityReview = !result.range && Boolean(businessValueResult.range);
    const stars = needsEquityReview ? Math.min(calculatedStars, 3) : calculatedStars;
    if (needsEquityReview) {
      const equityReviewLabels = {
        3: "참고 신뢰도 양호",
        2: "참고 신뢰도 제한적",
        1: "참고용 결과",
      };
      const inputGuidance = stars < 3
        ? " 입력자료가 제한되어 있어 추가 자료와 함께 검토하는 것이 적절합니다."
        : "";
      return {
        stars,
        label: equityReviewLabels[stars],
        description: `예비 기업가치는 현재 입력자료를 기준으로 정상적으로 산출되었습니다. 예상 지분가치는 현재 금융부채 규모의 영향으로 전문가 검토가 권장됩니다.${inputGuidance}`,
      };
    }
    if (stars === 5) {
      return {
        stars,
        label: "참고 신뢰도 매우 높음",
        description: "현재 입력자료를 기준으로 예비 기업가치를 산출했습니다. 입력자료가 충분하여 결과의 참고 신뢰도가 높은 편입니다. 보다 정확한 기업가치는 추가 자료 검토와 상담을 통해 확인하실 수 있습니다.",
      };
    }
    if (stars === 4) {
      return {
        stars,
        label: "참고 신뢰도 높음",
        description: "현재 입력자료를 기준으로 예비 기업가치를 산출했습니다. 입력자료가 비교적 충분하여 참고 신뢰도가 높은 편입니다.",
      };
    }
    if (stars === 3) {
      return {
        stars,
        label: "참고 신뢰도 양호",
        description: "현재 입력자료를 기준으로 예비 기업가치를 산출했습니다. 핵심 자료가 충족되어 참고 신뢰도는 양호한 수준입니다.",
      };
    }
    if (stars === 2) {
      return {
        stars,
        label: "참고 신뢰도 제한적",
        description: "현재 입력자료를 기준으로 예비 기업가치를 산출했습니다. 핵심 자료가 제한되어 있어 추가 자료와 함께 검토할 것을 권합니다.",
      };
    }
    return {
      stars,
      label: "참고용 결과",
      description: "입력자료가 제한되어 참고용 결과로 산출했습니다. 보다 정확한 기업가치는 추가 자료 검토와 상담을 통해 확인하실 수 있습니다.",
    };
  };

  const buildInsight = (result, options = {}) => {
    if (!result.range) {
      return "현재 입력정보만으로는 예비 기업가치 범위를 단정하기 어렵습니다. 재무자료와 자산의 성격, 사업 경쟁력과 거래 목적을 함께 검토하면 가치에 영향을 주는 요소를 더 명확히 확인할 수 있습니다.";
    }

    const comments = [];
    const strengthLabels = {
      technology: "기술·특허·노하우",
      brand: "브랜드",
      license: "인허가·진입장벽",
      contract: "장기계약",
      distribution: "유통망·판매채널",
    };
    const selectedStrengths = values.strengths
      .filter((item) => item !== "none" && strengthLabels[item])
      .map((item) => strengthLabels[item]);

    if (values.revenueStability === "growing") {
      comments.push("지속적인 매출 성장세는 기업가치에 긍정적인 영향을 줄 수 있습니다.");
    } else if (values.revenueStability === "declining") {
      comments.push("최근 매출 감소 추세는 기업가치에 일부 영향을 줄 수 있으나, 수익성과 사업 경쟁력 등 다양한 요소가 실제 거래에서 함께 평가됩니다.");
    } else if (values.revenueStability === "volatile") {
      comments.push("최근 매출 변동성은 원인과 지속 가능성을 함께 살펴보는 것이 중요합니다.");
    } else {
      comments.push("안정적인 매출 흐름은 예비 기업가치를 설명하는 긍정적인 기반이 될 수 있습니다.");
    }

    if (options.isHighDebt) {
      comments.push("사업 자체의 예비 기업가치는 현재 재무구조와 구분해 이해할 필요가 있습니다.");
      comments.push("금융부채의 영향은 거래구조, 채무조정과 인수조건을 함께 검토하는 것이 중요합니다.");
      return comments.slice(0, 3).join(" ");
    }

    if (selectedStrengths.length) {
      comments.push(`${selectedStrengths.join("·")}은 재무제표에 모두 반영되지 않는 기업가치 요소가 될 수 있습니다.`);
    } else if (["over70", "from40to70"].includes(values.recurringRevenue)) {
      comments.push("안정적인 반복 매출 기반은 수익의 지속 가능성을 설명하는 중요한 요소입니다.");
    } else if (Number(values.latestProfit) > 0) {
      comments.push("현재의 영업이익은 사업의 수익성을 설명하는 중요한 기준입니다.");
    }

    if (["high", "veryHigh"].includes(values.ownerDependency)) {
      comments.push("대표자 의존도를 낮추고 조직 운영의 독립성을 높이면 기업가치의 설득력을 강화할 수 있습니다.");
    } else if (["from40to60", "over60"].includes(values.customerConcentration)) {
      comments.push("거래처 집중도를 완화하고 매출 기반을 다변화하면 사업 안정성을 높이는 데 도움이 됩니다.");
    } else if (["partial", "material"].includes(values.legalReadiness)) {
      comments.push("재무·세무·법률자료를 보완하면 보다 구체적인 가치 검토가 가능합니다.");
    } else if (values.revenueStability === "growing" && Number(values.latestProfit) > 0) {
      comments.push("성장성과 수익성이 함께 유지된다면 전략적 인수자의 관심을 설명하는 근거가 될 수 있습니다.");
    }

    if (comments.length < 2) {
      comments.push("산업환경과 거래 목적을 함께 검토하면 예비 기업가치의 의미를 보다 구체적으로 이해할 수 있습니다.");
    }

    return comments.slice(0, 3).join(" ");
  };

  const renderResult = () => {
    stage.setAttribute("aria-busy", "false");
    const calculationPreparation = prepareCalculationValues();
    const calculationValues = calculationPreparation.prepared;
    const isOtherIndustry = values.industry === "other";
    const result = engine.calculatePreliminaryValue(calculationValues);
    const businessValueResult = engine.calculatePreliminaryValue({
      ...calculationValues,
      debt: "0",
      cash: "0",
      nonOperatingRealEstate: "0",
      nonOperatingFinancialAssets: "0",
      otherLiabilities: "0",
    });
    const confidence = calculateResultConfidence(result, businessValueResult);
    const financialAdjustment = numericValue(calculationValues.cash)
      + numericValue(calculationValues.nonOperatingRealEstate)
      + numericValue(calculationValues.nonOperatingFinancialAssets)
      - numericValue(calculationValues.debt)
      - numericValue(calculationValues.otherLiabilities);
    const hasNonOperatingAssets = numericValue(calculationValues.nonOperatingRealEstate) + numericValue(calculationValues.nonOperatingFinancialAssets) > 0;
    const valueBridgeLabel = hasNonOperatingAssets
      ? "금융부채·보유 현금·비영업자산 반영"
      : "금융부채 및 보유 현금 반영";
    const valueBridgeDetail = financialAdjustment > 0
      ? hasNonOperatingAssets
        ? "보유 현금과 비영업자산이 부채 및 조정부채를 초과하면 예상 지분가치가 더 높아질 수 있습니다."
        : "보유 현금이 금융부채 및 조정부채를 초과하면 예상 지분가치가 더 높아질 수 있습니다."
      : financialAdjustment < 0
        ? "금융부채와 조정부채를 차감하고 보유 현금과 비영업자산을 반영한 결과입니다."
        : "현재 입력된 재무구조 조정항목의 순효과가 크지 않습니다.";
    const resultIntro = businessValueResult.range
      ? "사업의 수익성과 성장성을 기준으로 산출한 예비 기업가치입니다."
      : "입력한 정보를 바탕으로 기업가치에 영향을 주는 요소를 우선 검토했습니다.";
    const needsEquityReview = !result.range && Boolean(businessValueResult.range);
    const isHighDebtEquityReview = needsEquityReview
      && numericValue(calculationValues.debt) > numericValue(businessValueResult.range.high);
    const insight = buildInsight(businessValueResult, { isHighDebt: isHighDebtEquityReview });
    const equityTooltipMarkup = isHighDebtEquityReview
      ? `<strong>왜 전문가 검토가 필요한가요?</strong>
          <span>사업 자체에는 예비 기업가치가 존재하지만, 현재 금융부채 규모가 커 단순 계산만으로는 예상 지분가치를 산출하기 어렵습니다.</span>
          <span>실제 거래에서는 거래구조, 채무조정, 부채 승계와 인수조건 등에 따라 최종 거래조건이 달라질 수 있습니다.</span>`
      : `<strong>지분가치란?</strong>
          <span>기업가치에서 금융부채를 차감하고 보유 현금과 비영업자산 등 현재 재무구조를 반영한 주주의 예비 가치입니다.</span>
          <span>실제 거래에서는 실사 결과, 운전자금, 우발채무, 거래조건 등에 따라 달라질 수 있습니다.</span>`;
    const businessValueMarkup = businessValueResult.range
      ? `<div class="valuation-range"><p>예비 기업가치 범위</p><strong>${money(businessValueResult.range.low)} ~ ${money(businessValueResult.range.high)}</strong><div class="valuation-range__model"><small>적용 평가모델</small><b>${escapeHtml(businessValueResult.modelName)}</b><span class="valuation-range__model-description">${escapeHtml(modelDescriptions[businessValueResult.model] || "기업 특성 기반 평가모델")}</span><em>${escapeHtml(businessValueResult.basis)}</em></div></div>`
      : `<div class="valuation-range valuation-range--review"><p>예비 기업가치 검토</p><strong>추가 검토가 필요합니다.</strong><span>현재 입력정보를 보완하면 사업가치에 영향을 주는 요소를 더 구체적으로 검토할 수 있습니다.</span></div>`;
    const businessValueNotice = businessValueResult.range
      ? `<p class="valuation-result-note">※ 본 예비 기업가치는 현재 입력자료를 기준으로 산출한 참고 범위입니다. 실제 거래가치는 거래구조, 성장성, 기술력, 고객구성과 실사 결과 등에 따라 달라질 수 있습니다.</p>`
      : "";
    const technologyIndustryResultNotice = calculationValues.industry === "software" && businessValueResult.range
      ? `<p class="valuation-result-note">※ IT·소프트웨어 기업은 기술력, 성장성, 반복매출과 고객 기반 등 정량화하기 어려운 요소가 기업가치에 큰 영향을 미칩니다. 본 결과는 일반적인 예비 평가모델을 적용한 참고 범위이며, 실제 거래가치는 사업모델과 기술 경쟁력에 따라 달라질 수 있습니다. 보다 정확한 기업가치와 거래 전략은 EQUIV 전문 상담을 통해 확인하시기 바랍니다.</p>`
      : "";
    const assetIndustryResultNotice = calculationValues.industry === "asset" && businessValueResult.range
      ? `<p class="valuation-result-note">※ 자산형 기업은 사업용 자산가치가 기업가치에 큰 영향을 미칩니다. 본 결과는 영업성과와 사업용 자산을 함께 고려한 예비 평가 결과입니다. 실제 거래가치는 부동산, 시설, 입지와 운영현황 등에 따라 달라질 수 있으며, 보다 정확한 기업가치는 EQUIV 전문 상담을 통해 확인하시기 바랍니다.</p>`
      : "";
    const equityDescription = "현재 재무구조를 반영한 예비 지분가치입니다.";
    const equityValueMarkup = result.range
      ? `<strong class="valuation-equity-card__value">${money(result.range.low)} ~ ${money(result.range.high)}</strong><p>${equityDescription}</p>`
      : isHighDebtEquityReview
        ? `<strong class="valuation-equity-card__review">거래구조 검토가 필요합니다.</strong><p>현재 금융부채 규모가 예비 기업가치를 초과하여 단순 계산만으로는 양수의 예상 지분가치를 산출하기 어렵습니다. 실제 M&amp;A에서는 거래구조, 채무조정, 부채 승계와 인수조건 등에 따라 최종 거래조건이 달라질 수 있습니다.</p>`
        : `<strong class="valuation-equity-card__review">추가 검토 필요</strong><p>${businessValueResult.range ? "현재 재무구조의 영향으로 예상 지분가치 산정에는 추가 검토가 필요합니다." : "현재 입력정보만으로는 예상 지분가치 산정에 추가 검토가 필요합니다."}</p>`;
    const reviewFactors = [...result.reviewFactors, ...calculationPreparation.reviewFactors];
    const otherIndustryResultNotice = isOtherIndustry
      ? `<p class="valuation-result-note">※ 본 결과는 기타 업종에 적용되는 일반 평가모델을 기반으로 산출되었습니다. 건설업을 포함한 특수 업종은 업종별 특성과 거래관행에 따라 실제 기업가치가 달라질 수 있습니다. 업종 특성을 반영한 상세 기업가치와 거래 전략은 EQUIV 전문 상담을 통해 확인하시기 바랍니다.</p>`
      : "";
    const consultationIntro = isOtherIndustry
      ? "기타 업종은 일반 평가모델을 기준으로 예비 범위를 산출했습니다. 실제 거래에서는 사업모델, 면허, 인허가, 자산구조와 거래관행에 대한 개별 해석이 중요합니다."
      : "예비 기업가치는 현재 입력정보를 바탕으로 산출됩니다. 실제 거래가치는 산업환경, 거래구조, 인수자의 전략, 실사 결과 등에 따라 달라질 수 있습니다.";
    const consultationLead = isOtherIndustry
      ? "EQUIV와 함께 업종별 특성을 반영한 상세 기업가치와 거래 전략을 검토해 보십시오."
      : "보다 정확한 기업가치와 거래 전략이 필요하시다면 EQUIV와 함께 검토해 보십시오.";

    stage.innerHTML = `
      <div class="valuation-result">
        <div class="valuation-progress valuation-progress--result" aria-label="진행 단계">
          <p>STEP 3 / ${totalExperienceSteps}</p>
          <div><span style="width:100%"></span></div>
        </div>
        <div class="valuation-result-brand">
          <p>EQUIV Preliminary Valuation Model</p>
          <span>EQUIV Business Valuation</span>
        </div>
        <h3>내 회사의 예비 기업가치</h3>
        <p class="valuation-result-intro">${resultIntro}</p>
        ${businessValueMarkup}
        ${businessValueNotice}
        ${technologyIndustryResultNotice}
        ${assetIndustryResultNotice}
        <div class="valuation-value-bridge" aria-label="기업가치에 금융부채, 보유 현금과 비영업자산 등 재무구조를 반영하여 지분가치를 산출합니다">
          <span aria-hidden="true"></span>
          <p>${valueBridgeLabel}</p>
          <span aria-hidden="true"></span>
          <b aria-hidden="true">↓</b>
          <small>${valueBridgeDetail}</small>
        </div>
        <section class="valuation-equity-card" aria-labelledby="valuation-equity-title">
          <div class="valuation-equity-card__header">
            <h4 id="valuation-equity-title">예상 지분가치</h4>
            <span class="valuation-tooltip">
              <button class="valuation-tooltip__trigger" type="button" aria-label="예상 지분가치 설명 보기" aria-expanded="false" aria-controls="valuation-equity-tooltip" data-valuation-tooltip>?</button>
              <span class="valuation-tooltip__content" id="valuation-equity-tooltip" role="tooltip">
                ${equityTooltipMarkup}
              </span>
            </span>
          </div>
          ${equityValueMarkup}
        </section>
        <section class="valuation-confidence" aria-labelledby="valuation-confidence-title">
          <div class="valuation-confidence__header">
            <h4 id="valuation-confidence-title">결과 신뢰도</h4>
            <span class="valuation-tooltip">
              <button class="valuation-tooltip__trigger" type="button" aria-label="결과 신뢰도 설명 보기" aria-expanded="false" aria-controls="valuation-confidence-tooltip" data-valuation-tooltip>?</button>
              <span class="valuation-tooltip__content" id="valuation-confidence-tooltip" role="tooltip">
                <strong>결과 신뢰도란?</strong>
                <span>이번 예비 기업가치와 예상 지분가치 결과를 어느 정도 참고할 수 있는지를 나타내는 지표입니다.</span>
                <span>기업의 우수성이나 기업 경쟁력을 평가하는 점수가 아닙니다. 입력된 자료가 충분할수록 결과 신뢰도는 높아집니다.</span>
              </span>
            </span>
          </div>
          <div class="valuation-confidence__summary">
            <span class="valuation-confidence__stars" role="img" aria-label="결과 참고 신뢰도: 별 다섯 개 중 ${confidence.stars}개">${"★".repeat(confidence.stars)}${"☆".repeat(5 - confidence.stars)}</span>
            <strong>${confidence.label}</strong>
          </div>
          <p>${confidence.description}</p>
          <small>※ 결과 신뢰도는 이번 예비 기업가치와 예상 지분가치의 참고 수준을 나타냅니다. 기업의 우수성이나 경쟁력을 평가하는 점수가 아니며, 입력자료가 충분할수록 높아집니다.</small>
        </section>
        <div class="valuation-factor-grid">
          <section><h4>기업가치의 강점</h4><ul>${factorList(result.positiveFactors)}</ul></section>
          <section><h4>기업가치 검토 포인트</h4><ul>${factorList(reviewFactors)}</ul></section>
        </div>
        <div class="valuation-insight"><span>EQUIV Insight</span><h4>EQUIV Advisory</h4><p>${escapeHtml(insight)}</p></div>
        ${otherIndustryResultNotice}
        <div class="valuation-public-notice">
          <strong>예비진단 안내</strong>
          <p>본 결과는 현재 입력정보를 바탕으로 산출한 참고용 예비 기업가치 범위입니다.</p>
          <p>정식 기업가치평가 또는 실제 거래가격을 의미하지 않으며, 산업환경, 거래구조, 실사 결과와 인수자의 전략에 따라 달라질 수 있습니다.</p>
        </div>
        <div class="valuation-consultation">
          <h4>거래 전략 상담하기</h4>
          <p>${escapeHtml(consultationIntro)}</p>
          <p>${escapeHtml(consultationLead)}</p>
          <div class="valuation-result-actions">
            <button class="btn btn-secondary" type="button" data-valuation-reset>초기화 및 다시 계산하기</button>
            <a class="btn btn-primary" href="index.html#contact" data-consultation-open data-consultation-type="기업가치 검토">EQUIV와 거래전략 상담하기</a>
          </div>
        </div>
      </div>`;
    const modalTitle = modal.querySelector("#valuation-modal-title");
    if (modalTitle) {
      modalTitle.setAttribute("tabindex", "-1");
      modalTitle.focus({ preventScroll: true });
    }
    scrollToModalStart();
  };

  const getFocusable = () => Array.from(modal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'));
  const open = () => {
    if (resultLoadingTimer !== null) {
      window.clearTimeout(resultLoadingTimer);
      resultLoadingTimer = null;
    }
    lastFocused = document.activeElement;
    values = initialState();
    stepIndex = 0;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    renderStep();
  };
  const close = () => {
    if (resultLoadingTimer !== null) {
      window.clearTimeout(resultLoadingTimer);
      resultLoadingTimer = null;
    }
    stage.setAttribute("aria-busy", "false");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus();
  };

  openButton.addEventListener("click", open);
  closeButtons.forEach((button) => button.addEventListener("click", close));
  stage.addEventListener("change", (event) => {
    const industrySelect = event.target.closest('select[name="industry"]');
    if (industrySelect) {
      stage.querySelectorAll("[data-valuation-industry-note]").forEach((industryNote) => {
        industryNote.hidden = industrySelect.value !== industryNote.dataset.valuationIndustryNote;
      });
      return;
    }
    const changedStrength = event.target.closest('input[name="strengths"]');
    if (!changedStrength || !changedStrength.checked) return;
    const form = changedStrength.closest("form");
    if (!form) return;
    const strengthInputs = form.querySelectorAll('input[name="strengths"]');
    if (changedStrength.value === "none") {
      strengthInputs.forEach((input) => {
        if (input.value !== "none") input.checked = false;
      });
      return;
    }
    const noneInput = form.querySelector('input[name="strengths"][value="none"]');
    if (noneInput) noneInput.checked = false;
  });
  stage.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target.closest("[data-valuation-form]");
    if (!form) return;
    collect(form);
    const error = validateStep(form);
    if (error) return renderStep(error);
    if (stepIndex === steps.length - 1) return renderResultLoading();
    stepIndex += 1;
    renderStep();
  });
  stage.addEventListener("click", (event) => {
    if (event.target.closest("[data-consultation-open]")) {
      close();
      return;
    }
    const tooltipTrigger = event.target.closest("[data-valuation-tooltip]");
    if (tooltipTrigger) {
      const tooltip = tooltipTrigger.closest(".valuation-tooltip");
      const isOpen = tooltip.classList.toggle("is-open");
      tooltipTrigger.setAttribute("aria-expanded", String(isOpen));
      return;
    }
    stage.querySelectorAll(".valuation-tooltip.is-open").forEach((tooltip) => {
      tooltip.classList.remove("is-open");
      const trigger = tooltip.querySelector("[data-valuation-tooltip]");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
    if (event.target.closest("[data-valuation-prev]")) {
      const form = event.target.closest("form");
      if (form) collect(form);
      stepIndex = Math.max(0, stepIndex - 1);
      renderStep();
    }
    if (event.target.closest("[data-valuation-reset]")) {
      values = initialState();
      stepIndex = 0;
      renderStep();
    }
  });
  modal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") return close();
    if (event.key !== "Tab") return;
    const items = getFocusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const dropdownItems = nav ? Array.from(nav.querySelectorAll("[data-dropdown]")) : [];
const revealItems = document.querySelectorAll("[data-reveal]");
const backToTop = document.querySelector("[data-back-to-top]");
const readinessOpen = document.querySelector("[data-readiness-open]");
const readinessModal = document.querySelector("[data-readiness-modal]");
const readinessSteps = document.querySelector("[data-readiness-steps]");
const readinessCloseItems = document.querySelectorAll("[data-readiness-close]");
let lastFocusedElement = null;
let readinessIndex = 0;
let readinessScore = 0;

const setDropdownState = (item, isOpen) => {
  if (!item) return;
  const toggle = item.querySelector("[data-dropdown-toggle]");
  item.classList.toggle("is-dropdown-open", isOpen);
  if (!toggle) return;
  toggle.setAttribute("aria-expanded", String(isOpen));
  const label = toggle.dataset.dropdownLabel || "하위 메뉴";
  toggle.setAttribute("aria-label", `${label} ${isOpen ? "닫기" : "열기"}`);
};

const closeDropdowns = (exceptItem = null) => {
  dropdownItems.forEach((item) => {
    if (item !== exceptItem) setDropdownState(item, false);
  });
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeNavigation = () => {
  if (!nav || !navToggle || !header) return;
  closeDropdowns();
  nav.classList.remove("is-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const setBackToTopState = () => {
  if (!backToTop) return;
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
};

setBackToTopState();
window.addEventListener("scroll", setBackToTopState, { passive: true });

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

const readinessQuestions = [
  {
    question: "최근 3년간 매출이 안정적으로 유지되거나 성장하고 있습니까?",
    options: [
      { label: "그렇습니다", value: 1 },
      { label: "일부 변동이 있습니다", value: 0.5 },
      { label: "아직 안정적이라고 보기 어렵습니다", value: 0 },
    ],
  },
  {
    question: "대표 또는 주요 주주가 거래 의사결정을 직접 할 수 있습니까?",
    options: [
      { label: "의사결정 구조가 명확합니다", value: 1 },
      { label: "일부 협의가 필요합니다", value: 0.5 },
      { label: "아직 정리되지 않았습니다", value: 0 },
    ],
  },
  {
    question: "최근 재무제표와 주요 경영 자료가 정리되어 있습니까?",
    options: [
      { label: "정리되어 있습니다", value: 1 },
      { label: "일부 보완이 필요합니다", value: 0.5 },
      { label: "아직 준비가 필요합니다", value: 0 },
    ],
  },
  {
    question: "핵심 고객 또는 특정 거래처에 대한 의존도가 관리 가능한 수준입니까?",
    options: [
      { label: "관리 가능한 수준입니다", value: 1 },
      { label: "일부 집중도가 있습니다", value: 0.5 },
      { label: "의존도가 높은 편입니다", value: 0 },
    ],
  },
  {
    question: "주요 계약, 인허가, 법률 이슈가 정리되어 있습니까?",
    options: [
      { label: "대체로 정리되어 있습니다", value: 1 },
      { label: "확인이 필요한 부분이 있습니다", value: 0.5 },
      { label: "아직 정리가 필요합니다", value: 0 },
    ],
  },
  {
    question: "사업의 지속 가능성과 성장 논리를 설명할 수 있습니까?",
    options: [
      { label: "명확하게 설명할 수 있습니다", value: 1 },
      { label: "일부 정리가 필요합니다", value: 0.5 },
      { label: "아직 설명 구조가 부족합니다", value: 0 },
    ],
  },
  {
    question: "현재 기업 매각 또는 투자유치를 검토하는 목적이 명확하게 정리되어 있습니까?",
    options: [
      { label: "매우 명확합니다", value: 1 },
      { label: "어느 정도 정리되어 있습니다", value: 0.5 },
      { label: "아직 검토 중입니다", value: 0 },
    ],
  },
];

const readinessResults = {
  ready: {
    stars: "★★★★★",
    status: "READY",
    title: "현재 M&A를 추진할 수 있는 기반이 잘 갖추어져 있습니다.",
    body: "기업의 상황과 거래 목적을 함께 검토하면 보다 효과적인 거래 전략을 설계할 수 있습니다.",
    next: ["거래 전략 검토", "기업가치 검토", "매각 준비 자문"],
  },
  nearlyReady: {
    stars: "★★★★☆",
    status: "NEARLY READY",
    title: "거래를 추진할 수 있는 기반은 마련되어 있습니다.",
    body: "몇 가지 전략적 검토와 준비를 더하면 보다 안정적인 거래 진행이 가능합니다.",
    next: ["거래 준비 항목 점검", "기업 분석", "거래 구조 검토"],
  },
  preparing: {
    stars: "★★★☆☆",
    status: "PREPARING",
    title: "거래를 위한 기본 기반은 갖추고 있습니다.",
    body: "사전 준비를 함께 진행하면 더 효과적인 M&A 전략을 설계할 수 있습니다.",
    next: ["거래 준비도 점검", "경영 자료 정리", "M&A 사전 준비 자문"],
  },
};

const getFocusableItems = () => {
  if (!readinessModal) return [];
  return Array.from(
    readinessModal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
};

const focusFirstReadinessItem = () => {
  if (!readinessModal) return;
  const primaryItem = readinessModal.querySelector("[data-readiness-answer], .readiness-modal-cta .btn");
  if (primaryItem) {
    primaryItem.focus();
    return;
  }
  const focusableItems = getFocusableItems();
  if (focusableItems.length) focusableItems[0].focus();
};

const getReadinessLevel = () => {
  if (readinessScore >= 5.5) return "ready";
  if (readinessScore >= 4) return "nearlyReady";
  return "preparing";
};

const renderReadinessQuestion = () => {
  if (!readinessSteps) return;
  const currentQuestion = readinessQuestions[readinessIndex];
  const options = currentQuestion.options
    .map(
      (option) =>
        `<button class="readiness-option" type="button" data-readiness-answer="${option.value}">${option.label}</button>`
    )
    .join("");

  readinessSteps.innerHTML = `
    <div class="readiness-question">
      <p class="readiness-progress">${readinessIndex + 1} / ${readinessQuestions.length}</p>
      <h3>${currentQuestion.question}</h3>
      <div class="readiness-options">${options}</div>
    </div>
  `;
};

const renderReadinessResult = () => {
  if (!readinessSteps) return;
  const readinessLevel = getReadinessLevel();
  const result = readinessResults[readinessLevel];
  const nextItems = result.next.map((item) => `<li>✓ ${item}</li>`).join("");

  readinessSteps.innerHTML = `
    <div class="readiness-result">
      <p class="readiness-result__eyebrow">Deal Readiness</p>
      <p class="readiness-result__stars" aria-hidden="true">${result.stars}</p>
      <p class="readiness-result__status">${result.status}</p>
      <h3>${result.title}</h3>
      <p>${result.body}</p>
      <p class="readiness-result__brand">입력 결과는<br>현재 준비 상태를 파악하기 위한 참고자료입니다.<br><br>거래 목적과 재무·사업 자료를 검토하면<br>다음 준비 과제를 구체화할 수 있습니다.</p>
      <div class="readiness-next">
        <h4>Recommended Next Step</h4>
        <ul>${nextItems}</ul>
      </div>
      <div class="readiness-modal-cta">
        <h4>보다 정확한 검토가 필요하십니까?</h4>
        <p class="readiness-modal-guide">다음 단계는<br>기업의 현재 상황과 거래 목적을<br>함께 이해하는 것입니다.</p>
        <p class="readiness-disclaimer">본 결과는 기업의 거래 준비 상태를 간단히 확인하기 위한 초기 진단입니다. 실제 거래 전략은 기업의 사업 구조, 재무 상태, 거래 목적, 인수자의 관점 등을 함께 검토한 후 설계됩니다. 본 결과는 기업가치나 거래 금액을 의미하지 않습니다.</p>
        <a class="btn btn-primary" href="#contact" data-readiness-contact data-consultation-open>거래 전략 상담하기</a>
      </div>
    </div>
  `;
};

const openReadinessModal = () => {
  if (!readinessModal || !readinessSteps) return;
  lastFocusedElement = document.activeElement;
  readinessIndex = 0;
  readinessScore = 0;
  renderReadinessQuestion();
  readinessModal.classList.add("is-open");
  readinessModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  focusFirstReadinessItem();
};

const closeReadinessModal = (restoreFocus = true) => {
  if (!readinessModal) return;
  readinessModal.classList.remove("is-open");
  readinessModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (restoreFocus && lastFocusedElement) lastFocusedElement.focus();
};

if (readinessOpen && readinessModal && readinessSteps) {
  readinessOpen.addEventListener("click", openReadinessModal);

  readinessCloseItems.forEach((item) => {
    item.addEventListener("click", closeReadinessModal);
  });

  readinessSteps.addEventListener("click", (event) => {
    const contactLink = event.target.closest("[data-readiness-contact]");
    if (contactLink) {
      closeReadinessModal(false);
      return;
    }

    const answer = event.target.closest("[data-readiness-answer]");
    if (!answer) return;
    readinessScore += Number(answer.dataset.readinessAnswer);
    readinessIndex += 1;
    if (readinessIndex >= readinessQuestions.length) {
      renderReadinessResult();
    } else {
      renderReadinessQuestion();
    }
    focusFirstReadinessItem();
  });

  readinessModal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeReadinessModal();
      return;
    }

    if (event.key !== "Tab") return;
    const focusableItems = getFocusableItems();
    if (!focusableItems.length) return;
    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    }
  });
}

if (nav && navToggle && header) {
  dropdownItems.forEach((item) => {
    const toggle = item.querySelector("[data-dropdown-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      closeDropdowns(item);
      setDropdownState(item, !isOpen);
    });

    item.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 760) return;
      closeDropdowns(item);
      setDropdownState(item, true);
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth <= 760 || item.contains(document.activeElement)) return;
      setDropdownState(item, false);
    });

    item.addEventListener("focusin", () => {
      if (window.innerWidth <= 760) return;
      closeDropdowns(item);
      setDropdownState(item, true);
    });

    item.addEventListener("focusout", (event) => {
      if (item.contains(event.relatedTarget)) return;
      setDropdownState(item, false);
    });
  });

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    header.classList.toggle("is-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeDropdowns();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeDropdowns();
    closeNavigation();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNavigation();
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

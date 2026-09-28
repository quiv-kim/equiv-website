(() => {
  const parseMotionTime = (value, fallback) => {
    const normalized = String(value || "").trim();
    if (!normalized) return fallback;
    if (normalized.endsWith("ms")) return Number.parseFloat(normalized);
    if (normalized.endsWith("s")) return Number.parseFloat(normalized) * 1000;
    return fallback;
  };

  window.EQUIVMotion = Object.freeze({
    prefersReduced: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    duration: (token, fallback) =>
      parseMotionTime(getComputedStyle(document.documentElement).getPropertyValue(token), fallback),
  });

  const applyBrandIdentity = () => {
    const brandName = "EQUIV M&A";

    document.querySelectorAll(".equiv-logo-wordmark, .brand-label").forEach((element) => {
      element.textContent = brandName;
    });

    document.querySelectorAll("a.brand").forEach((element) => {
      const currentLabel = element.getAttribute("aria-label") || "";
      if (/EQUIV/i.test(currentLabel)) {
        element.setAttribute("aria-label", currentLabel.replace(/EQUIV(?: M&A)?/gi, brandName));
      }
    });

    document.querySelectorAll(".site-nav a[href$='about.html'], .footer-sitemap a[href$='about.html']").forEach((element) => {
      if (/EQUIV/.test(element.textContent)) element.textContent = `${brandName} 소개`;
    });

    document.querySelectorAll(".footer-copyright").forEach((element) => {
      element.innerHTML = element.innerHTML.replace(/© 2026 EQUIV(?: M&amp;A| M&A)?\./, `© 2026 ${brandName}.`);
    });

    if (document.title.includes("EQUIV") && !document.title.includes(brandName)) {
      document.title = document.title.replace(/EQUIV(?! M&A)/g, brandName);
    }

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        description.getAttribute("content").replace(/EQUIV(?! M&A)/g, brandName)
      );
    }
  };

  const insightCatalog = Object.freeze({
    "ma-practice.html": {
      category: "M&A 실무",
      title: "기업 매각은 언제 준비해야 할까요?",
      description: "매각 검토 시점과 준비 방향을 살펴봅니다.",
      related: ["sell-side-preparation-checklist.html", "nda-ma-confidentiality.html", "ebitda-business-valuation.html"],
    },
    "sell-side-preparation-checklist.html": {
      category: "M&A 실무",
      title: "기업 매각 전 준비해야 할 자료 10가지",
      description: "재무·계약·주주·인허가 등 핵심 준비자료를 정리합니다.",
      related: ["ma-practice.html", "nda-ma-confidentiality.html", "net-debt-equity-value.html"],
    },
    "nda-ma-confidentiality.html": {
      category: "M&A 실무",
      title: "M&A 비밀유지와 NDA 체결 시점",
      description: "단계별 정보공개와 비밀유지 원칙을 설명합니다.",
      related: ["sell-side-preparation-checklist.html", "acquisition-due-diligence-checklist.html", "deal-stories.html"],
    },
    "acquisition-due-diligence-checklist.html": {
      category: "기업 인수",
      title: "기업 인수 전 핵심 체크리스트",
      description: "인수 검토 단계에서 확인해야 할 핵심 항목을 살펴봅니다.",
      related: ["ebitda-business-valuation.html", "net-debt-equity-value.html", "auto-electronics-ma.html"],
    },
    "ebitda-business-valuation.html": {
      category: "기업가치",
      title: "EBITDA 방식 기업가치 계산",
      description: "EBITDA와 거래배수를 이용한 가치평가의 기본 구조를 설명합니다.",
      related: ["net-debt-equity-value.html", "acquisition-due-diligence-checklist.html", "deal-stories.html"],
    },
    "net-debt-equity-value.html": {
      category: "기업가치",
      title: "기업가치와 주식가치는 왜 다른가",
      description: "순차입금이 최종 지분가치에 미치는 영향을 살펴봅니다.",
      related: ["ebitda-business-valuation.html", "sell-side-preparation-checklist.html", "acquisition-due-diligence-checklist.html"],
    },
    "auto-electronics-ma.html": {
      category: "업종별 M&A",
      title: "자동차 전장기업 M&A 체크포인트",
      description: "고객구조·인증·기술인력·수익성 등 업종 특성을 살펴봅니다.",
      related: ["acquisition-due-diligence-checklist.html", "ebitda-business-valuation.html", "market-insights.html"],
    },
    "food-hmr-ma.html": {
      category: "업종별 M&A",
      title: "식품·HMR 기업 M&A 체크포인트",
      description: "생산시설·HACCP·제품개발·유통채널 등 핵심 요소를 살펴봅니다.",
      related: ["acquisition-due-diligence-checklist.html", "ebitda-business-valuation.html", "market-insights.html"],
    },
    "market-insights.html": {
      category: "시장분석",
      title: "최근 국내 M&A 시장은 어떻게 변화하고 있을까요?",
      description: "거래환경 변화와 인수자의 주요 판단 기준을 살펴봅니다.",
      related: ["auto-electronics-ma.html", "food-hmr-ma.html", "deal-stories.html"],
    },
    "deal-stories.html": {
      category: "거래사례",
      title: "가격보다 구조가 중요했던 거래 사례",
      description: "가격 차이를 거래조건과 구조로 조정한 과정을 살펴봅니다.",
      related: ["ebitda-business-valuation.html", "nda-ma-confidentiality.html", "market-insights.html"],
    },
  });

  const buildInsightCard = (slug) => {
    const item = insightCatalog[slug];
    if (!item) return "";
    return `
      <a class="insight-card insight-related-card" href="${slug}">
        <span>${item.category}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <em>관련 글 보기</em>
      </a>`;
  };

  const enhanceArticleInternalLinks = () => {
    const slug = window.location.pathname.split("/").pop() || "index.html";
    const article = insightCatalog[slug];
    if (!article) return;

    const articleBody = document.querySelector(".insight-article-body");
    if (articleBody && !articleBody.querySelector(".insight-back-link")) {
      const backLink = document.createElement("a");
      backLink.className = "insight-back-link";
      backLink.href = "insights.html";
      backLink.textContent = "← 전체 인사이트";
      articleBody.prepend(backLink);
    }

    const relatedMarkup = article.related.map(buildInsightCard).join("");
    let relatedSection = document.querySelector(".insight-related");

    if (!relatedSection) {
      relatedSection = document.createElement("section");
      relatedSection.className = "insight-related";
      relatedSection.setAttribute("aria-labelledby", "related-insights-title");
      const cta = document.querySelector(".sub-cta");
      const articleElement = document.querySelector(".insight-article");
      if (cta) cta.before(relatedSection);
      else if (articleElement) articleElement.after(relatedSection);
    }

    relatedSection.innerHTML = `
      <div class="container insight-related__inner">
        <div class="insight-related__heading">
          <p class="section-kicker">RELATED INSIGHTS</p>
          <h2 id="related-insights-title">함께 살펴볼 인사이트</h2>
        </div>
        <div class="insight-related__grid">${relatedMarkup}</div>
        <a class="insight-back-link" href="insights.html" style="margin-top:24px;margin-bottom:0;">전체 인사이트 보기 →</a>
      </div>`;
  };

  const enhanceInsights = () => {
    document.querySelectorAll("#insights-dropdown ul").forEach((list) => {
      if (list.querySelector('a[href="insights.html"]')) return;
      const item = document.createElement("li");
      item.innerHTML = '<a href="insights.html">전체 인사이트</a>';
      list.prepend(item);
    });

    const homeInsights = document.querySelector(".insights-preview .container");
    if (homeInsights && document.body.id === "top" && !homeInsights.querySelector(".insights-all-action")) {
      const action = document.createElement("div");
      action.className = "insights-all-action";
      action.style.marginTop = "32px";
      action.innerHTML = '<a class="btn btn-ghost" href="insights.html">인사이트 전체보기</a>';
      homeInsights.appendChild(action);
    }

    document.querySelectorAll('.footer-sitemap a[href="index.html#insights"], .footer-sitemap a[href="#insights"]').forEach((link) => {
      link.href = "insights.html";
    });

    enhanceArticleInternalLinks();
  };

  applyBrandIdentity();
  enhanceInsights();

  const revealItems = document.querySelectorAll("[data-reveal]");
  const revealGroups = document.querySelectorAll(
    ".principle-grid, .service-grid, .insight-grid, .expertise-card-grid, .about-flow, .process-timeline, .faq-list"
  );

  revealGroups.forEach((group) => {
    let order = 0;
    Array.from(group.children).forEach((item) => {
      if (!item.matches("[data-reveal]")) return;
      item.style.setProperty("--motion-order", String(Math.min(order, 3)));
      order += 1;
    });
  });

  if (window.EQUIVMotion.prefersReduced()) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
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
  }

  if (!document.querySelector('script[data-consultation-submit]')) {
    const script = document.createElement("script");
    script.src = "js/consultation-submit.js?v=20260925-1";
    script.defer = true;
    script.dataset.consultationSubmit = "true";
    document.head.appendChild(script);
  }
})();

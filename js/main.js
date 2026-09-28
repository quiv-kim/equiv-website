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

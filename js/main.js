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
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

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
})();

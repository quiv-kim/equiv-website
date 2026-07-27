(() => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const dropdownItems = nav ? Array.from(nav.querySelectorAll("[data-dropdown]")) : [];
  const backToTop = document.querySelector("[data-back-to-top]");
  const responsiveStyles = getComputedStyle(document.documentElement);
  const desktopNavigationMin =
    Number.parseInt(responsiveStyles.getPropertyValue("--breakpoint-desktop"), 10) || 1200;
  const usesCollapsedNavigation = () => window.innerWidth < desktopNavigationMin;

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

  const setNavigationState = (isOpen) => {
    if (!nav || !navToggle || !header) return;
    nav.classList.toggle("is-open", isOpen);
    header.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "메인 메뉴 닫기" : "메인 메뉴 열기");
  };

  const closeNavigation = () => {
    if (!nav || !navToggle || !header) return;
    closeDropdowns();
    setNavigationState(false);
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
        behavior: window.EQUIVMotion?.prefersReduced() ? "auto" : "smooth",
      });
    });
  }

  if (!nav || !navToggle || !header) return;

  setNavigationState(false);

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
      if (usesCollapsedNavigation()) return;
      closeDropdowns(item);
      setDropdownState(item, true);
    });

    item.addEventListener("mouseleave", () => {
      if (usesCollapsedNavigation() || item.contains(document.activeElement)) return;
      setDropdownState(item, false);
    });

    item.addEventListener("focusin", () => {
      if (usesCollapsedNavigation()) return;
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
    setNavigationState(!isOpen);
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
    if (!usesCollapsedNavigation()) closeNavigation();
  });
})();

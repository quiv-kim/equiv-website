(() => {
  const modalMarkup = `
    <div class="consultation-modal" data-consultation-modal data-state="consultation" aria-hidden="true">
      <div class="consultation-modal__overlay" data-consultation-close></div>
      <section class="consultation-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="consultation-modal-title" aria-describedby="consultation-modal-description">
        <button class="consultation-modal__close" type="button" aria-label="상담 Modal 닫기" data-consultation-close><span aria-hidden="true">×</span></button>
        <header class="consultation-modal__header" data-consultation-header>
          <div class="equiv-logo consultation-modal__brand" role="img" aria-label="The EQUIV Mark, EQUIV">
            <img class="equiv-logo-mark" src="images/the-equiv-mark.svg" alt="">
            <span class="equiv-logo-divider"></span>
            <span class="equiv-logo-wordmark">EQUIV</span>
          </div>
          <p class="section-kicker">CONSULTATION</p>
          <h2 id="consultation-modal-title">M&amp;A 상담 신청</h2>
          <p id="consultation-modal-description"><strong>기업 매각·인수 및 투자유치에 관한<br>내용을 남겨주시면</strong><span>담당자가 검토 후 연락드리겠습니다.</span></p>
        </header>

        <header class="consultation-modal__header consultation-modal__header--success" data-success-header hidden>
          <div class="equiv-logo consultation-modal__brand" role="img" aria-label="The EQUIV Mark, EQUIV">
            <img class="equiv-logo-mark" src="images/the-equiv-mark.svg" alt="">
            <span class="equiv-logo-divider"></span>
            <span class="equiv-logo-wordmark">EQUIV</span>
          </div>
          <p class="section-kicker">SUCCESS</p>
          <h2 id="consultation-success-title">상담 신청 완료</h2>
          <p id="consultation-success-description"><strong>상담 신청이 정상적으로 접수되었습니다.</strong><span class="consultation-modal__header-trust"><b>CONFIDENTIAL</b>상담 내용은 비밀유지 원칙에 따라<br>안전하게 관리됩니다.<br>필요한 경우 비밀유지계약(NDA)을<br>체결하여 상담을 진행합니다.</span></p>
        </header>

        <div class="consultation-modal__body" data-consultation-content>
          <aside class="consultation-modal__guide" aria-label="M&A 상담 안내">
            <div class="consultation-modal__guide-block">
              <h3>M&amp;A 상담 안내</h3>
              <h4>상담 대상</h4>
              <ul>
                <li>기업 매각</li>
                <li>기업 인수</li>
                <li>투자유치</li>
                <li>기업가치 검토</li>
              </ul>
            </div>
            <div class="consultation-modal__guide-block">
              <h4>상담 절차</h4>
              <ol>
                <li><span>01</span>상담 신청</li>
                <li><span>02</span>담당자 연락</li>
                <li><span>03</span>비밀유지계약(NDA)</li>
                <li><span>04</span>자료 검토</li>
                <li><span>05</span>미팅 및 자문</li>
              </ol>
            </div>
            <div class="consultation-modal__confidential">
              <p>제출하신 정보와 상담 내용은<br>비밀유지 원칙에 따라 관리됩니다.</p>
              <p>필요한 경우 상담 진행 전에<br>비밀유지계약(NDA)을 체결합니다.</p>
            </div>
          </aside>

          <form class="consultation-modal__form" data-consultation-form novalidate>
            <div class="consultation-modal__field-grid">
              <div class="consultation-modal__field">
                <label for="modal-company-name">회사명 <span aria-hidden="true">*</span></label>
                <input id="modal-company-name" name="company_name" type="text" autocomplete="organization" required>
              </div>
              <div class="consultation-modal__field">
                <label for="modal-contact-name">담당자명 <span aria-hidden="true">*</span></label>
                <input id="modal-contact-name" name="contact_name" type="text" autocomplete="name" required>
              </div>
              <div class="consultation-modal__field">
                <label for="modal-contact-phone">연락처 <span aria-hidden="true">*</span></label>
                <input id="modal-contact-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required>
              </div>
              <div class="consultation-modal__field">
                <label for="modal-contact-email">이메일 <span aria-hidden="true">*</span></label>
                <input id="modal-contact-email" name="email" type="email" autocomplete="email" required>
              </div>
            </div>

            <fieldset class="consultation-modal__types">
              <legend>상담 유형 <span aria-hidden="true">*</span></legend>
              <div>
                <label><input type="radio" name="consultation_type" value="기업 매각" required><span>기업 매각</span></label>
                <label><input type="radio" name="consultation_type" value="기업 인수"><span>기업 인수</span></label>
                <label><input type="radio" name="consultation_type" value="투자유치"><span>투자유치</span></label>
                <label><input type="radio" name="consultation_type" value="기업가치 검토"><span>기업가치 검토</span></label>
                <label><input type="radio" name="consultation_type" value="기타"><span>기타</span></label>
              </div>
            </fieldset>

            <div class="consultation-modal__field">
              <label for="modal-consultation-message">문의 내용</label>
              <textarea id="modal-consultation-message" name="message" rows="4" placeholder="간단한 상담 내용을 작성해 주세요."></textarea>
            </div>

            <div class="consultation-modal__privacy">
              <div class="consultation-modal__privacy-row">
                <label>
                  <input type="checkbox" name="privacy_consent" required>
                  <span><b>(필수)</b> 개인정보 수집 및 이용에 동의합니다.</span>
                </label>
                <button type="button" aria-expanded="false" aria-controls="consultation-privacy-details" data-consultation-privacy-toggle>자세히 보기</button>
              </div>
              <div class="consultation-modal__privacy-details" id="consultation-privacy-details" data-consultation-privacy-details hidden>
                <h3>개인정보 수집 및 이용 안내</h3>
                <dl>
                  <div><dt>수집항목</dt><dd>회사명, 담당자명, 연락처, 이메일, 문의내용</dd></div>
                  <div><dt>수집목적</dt><dd>상담 신청 접수, 상담 진행, 문의 회신</dd></div>
                  <div><dt>보유기간</dt><dd>상담 종료 후 1년</dd></div>
                </dl>
                <p>법령에 따라 별도 보관이 필요한 경우에는 관계 법령을 따릅니다.</p>
                <p>동의를 거부할 권리가 있으며, 동의하지 않을 경우 상담 신청이 제한될 수 있습니다.</p>
              </div>
            </div>

            <button class="btn btn-primary consultation-modal__submit" type="submit">상담 신청</button>
            <p class="consultation-modal__static-notice" data-development-notice>현재는 UX 확인용 정적 양식이며, 입력 내용은 전송되거나 저장되지 않습니다.</p>
          </form>
        </div>

        <div class="consultation-modal__success" tabindex="-1" aria-live="polite" data-consultation-success hidden>
          <div class="consultation-modal__success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><path d="m7.5 12.4 3 3 6.5-7"></path></svg>
          </div>
          <p class="section-kicker">SUCCESS</p>
          <h2>상담 신청이 완료되었습니다.</h2>
          <p>상담 신청이 정상적으로 접수되었습니다.</p>
          <p>담당자가 내용을 확인한 후<br>영업일 기준 1~2일 이내 연락드리겠습니다.</p>
          <p>필요한 자료는 상담 과정에서 별도로 안내드리며,<br>상담 내용은 비밀유지 원칙에 따라 안전하게 관리됩니다.</p>
          <p class="consultation-modal__static-notice" data-development-notice>현재 정적 버전에서는 입력 내용이 실제로 전송되거나 저장되지 않습니다.</p>
          <button class="btn btn-primary" type="button" data-consultation-confirm>확인</button>
        </div>
      </section>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", modalMarkup);

  const modal = document.querySelector("[data-consultation-modal]");
  const dialog = modal?.querySelector(".consultation-modal__dialog");
  const content = modal?.querySelector("[data-consultation-content]");
  const form = modal?.querySelector("[data-consultation-form]");
  const success = modal?.querySelector("[data-consultation-success]");
  const consultationHeader = modal?.querySelector("[data-consultation-header]");
  const successHeader = modal?.querySelector("[data-success-header]");
  const privacyToggle = modal?.querySelector("[data-consultation-privacy-toggle]");
  const privacyDetails = modal?.querySelector("[data-consultation-privacy-details]");
  const developmentNotices = modal?.querySelectorAll("[data-development-notice]") || [];
  let lastFocused = null;
  let stateTransitionTimer = null;

  if (!modal || !dialog || !content || !form || !success || !consultationHeader || !successHeader || !privacyToggle || !privacyDetails) return;

  const isDevelopmentEnvironment =
    window.location.protocol === "file:" ||
    ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname) ||
    window.location.hostname.endsWith(".local");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  developmentNotices.forEach((notice) => {
    notice.hidden = !isDevelopmentEnvironment;
  });

  const getFocusable = () => Array.from(
    dialog.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
  ).filter((item) => !item.hidden && item.getAttribute("aria-hidden") !== "true" && item.offsetParent !== null);

  const setModalState = (state) => {
    const isSuccess = state === "success";
    modal.dataset.state = state;
    consultationHeader.hidden = isSuccess;
    successHeader.hidden = !isSuccess;
    content.hidden = isSuccess;
    success.hidden = !isSuccess;
    dialog.setAttribute("aria-labelledby", isSuccess ? "consultation-success-title" : "consultation-modal-title");
    dialog.setAttribute("aria-describedby", isSuccess ? "consultation-success-description" : "consultation-modal-description");
  };

  const resetView = () => {
    if (stateTransitionTimer !== null) {
      window.clearTimeout(stateTransitionTimer);
      stateTransitionTimer = null;
    }
    dialog.classList.remove("is-state-switching", "is-state-transitioning");
    form.reset();
    form.hidden = false;
    setModalState("consultation");
    privacyDetails.hidden = true;
    privacyToggle.setAttribute("aria-expanded", "false");
    privacyToggle.textContent = "자세히 보기";
  };

  const selectConsultationType = (type) => {
    if (!type) return;
    const option = form.querySelector(`input[name="consultation_type"][value="${CSS.escape(type)}"]`);
    if (option) option.checked = true;
  };

  const openModal = (trigger) => {
    if (trigger?.closest("[data-readiness-modal]")) {
      lastFocused = document.querySelector("[data-readiness-open]");
    } else if (trigger?.closest("[data-valuation-modal]")) {
      lastFocused = document.querySelector("[data-valuation-open]");
    } else {
      lastFocused = trigger || document.activeElement;
    }
    resetView();
    selectConsultationType(trigger?.dataset.consultationType);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    window.requestAnimationFrame(() => {
      const firstField = form.querySelector("input");
      if (firstField) firstField.focus({ preventScroll: true });
    });
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    resetView();
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus({ preventScroll: true });
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-consultation-open]");
    if (!trigger) return;
    event.preventDefault();
    openModal(trigger);
  });

  modal.querySelectorAll("[data-consultation-close], [data-consultation-confirm]").forEach((item) => {
    item.addEventListener("click", closeModal);
  });

  privacyToggle.addEventListener("click", () => {
    const isExpanded = privacyToggle.getAttribute("aria-expanded") === "true";
    privacyToggle.setAttribute("aria-expanded", String(!isExpanded));
    privacyToggle.textContent = isExpanded ? "자세히 보기" : "접기";
    privacyDetails.hidden = isExpanded;
  });

  const transitionToSuccess = () => {
    form.reset();
    if (prefersReducedMotion) {
      setModalState("success");
      dialog.scrollTop = 0;
      success.focus({ preventScroll: true });
      return;
    }
    dialog.classList.add("is-state-switching", "is-state-transitioning");
    stateTransitionTimer = window.setTimeout(() => {
      setModalState("success");
      dialog.scrollTop = 0;
      window.requestAnimationFrame(() => {
        dialog.classList.remove("is-state-transitioning");
        stateTransitionTimer = window.setTimeout(() => {
          dialog.classList.remove("is-state-switching");
          success.focus({ preventScroll: true });
          stateTransitionTimer = null;
        }, 140);
      });
    }, 140);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (stateTransitionTimer !== null) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    transitionToSuccess();
  });

  modal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key === "Enter" && !success.hidden) {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();

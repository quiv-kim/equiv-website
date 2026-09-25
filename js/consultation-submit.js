(() => {
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyprNAAiMNULk7DZxjuBlz4js8VuJ3bjuXsUJxoPBwOCd80H7X3dvx0jQ49OJ6OwgmOOA/exec";
  let submitted = false;

  document.addEventListener("click", (event) => {
    if (event.target.closest?.("[data-consultation-open]")) submitted = false;
  }, true);

  document.addEventListener("submit", (event) => {
    const form = event.target.closest?.("[data-consultation-form]");
    if (!form || !form.checkValidity()) return;
    if (submitted) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    submitted = true;

    const data = new URLSearchParams(new FormData(form));
    data.set("privacy_consent", form.elements.privacy_consent?.checked ? "동의" : "미동의");
    data.set("source_url", window.location.href);
    data.set("submitted_at", new Date().toISOString());

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: data,
    }).catch((error) => {
      console.error("EQUIV consultation submission failed", error);
    });
  }, true);
})();

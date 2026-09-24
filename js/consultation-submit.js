(() => {
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyprNAAiMNULk7DZxjuBlz4js8VuJ3bjuXsUJxoPBwOCd80H7X3dvx0jQ49OJ6OwgmOOA/exec";

  document.addEventListener("submit", (event) => {
    const form = event.target.closest?.("[data-consultation-form]");
    if (!form || !form.checkValidity()) return;

    const data = new FormData(form);
    data.set("privacy_consent", form.elements.privacy_consent?.checked ? "동의" : "미동의");
    data.set("source_url", window.location.href);
    data.set("submitted_at", new Date().toISOString());

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).catch((error) => {
      console.error("EQUIV consultation submission failed", error);
    });
  }, true);
})();

(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "メニューを開く");
      });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024 && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "メニューを開く");
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var type = form.querySelector("[name=type]").value;
      var name = form.querySelector("[name=name]").value.trim();
      var email = form.querySelector("[name=email]").value.trim();
      var body = form.querySelector("[name=message]").value.trim();
      var status = document.getElementById("contactStatus");
      if (!name || !email || !body || !type) {
        status.textContent = "必須項目をご入力ください。";
        return;
      }
      var subject = encodeURIComponent("【葡萄のふくおか】" + type + " / " + name);
      var mailBody = encodeURIComponent(
        "お名前: " + name + "\nメール: " + email + "\n種別: " + type + "\n\n" + body
      );
      window.location.href = "mailto:info@budounofukuoka.com?subject=" + subject + "&body=" + mailBody;
      status.textContent = "メールアプリが開きます。送信できない場合は info@budounofukuoka.com へ直接お送りください。";
    });
  }
})();

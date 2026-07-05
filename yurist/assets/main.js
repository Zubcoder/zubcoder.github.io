/*
 * AI Юрист — общий скрипт сайта.
 * Здесь в одном месте настраиваются партнёрские ссылки и ссылка на приложение.
 * Замените значения PARTNERS[].url на реальные партнёрские (Admitad и т.п.) ссылки.
 */
(function () {
  "use strict";

  // Ссылка на приложение в RuStore
  window.APP_RUSTORE_URL = "https://apps.rustore.ru/app/com.zubcoder.ai_yurist";

  // Партнёрские предложения (лид-ген / CPA). url — заменить на реальные партнёрские ссылки.
  window.PARTNERS = [
    { ico: "💳", name: "Т-Банк — карта", desc: "Дебетовая карта с кэшбэком", url: "#" },
    { ico: "🏦", name: "Альфа-Банк", desc: "Карта без платы за обслуживание", url: "#" },
    { ico: "🛡️", name: "Страхование", desc: "Полис за 5 минут онлайн", url: "#" },
    { ico: "⚖️", name: "Онлайн-юрист", desc: "Консультация юриста 24/7", url: "#" }
  ];

  function renderPartners() {
    document.querySelectorAll("[data-partners]").forEach(function (box) {
      var items = window.PARTNERS.map(function (p) {
        return (
          '<div class="partner-item">' +
          '<span class="p-ico">' + p.ico + "</span>" +
          '<div><div class="p-name">' + p.name + "</div>" +
          '<div class="p-desc">' + p.desc + "</div></div>" +
          '<a class="p-cta" href="' + p.url + '" rel="nofollow sponsored" target="_blank">Открыть</a>' +
          "</div>"
        );
      }).join("");
      box.insertAdjacentHTML("beforeend", items);
    });
    document.querySelectorAll("[data-app-link]").forEach(function (a) {
      a.setAttribute("href", window.APP_RUSTORE_URL);
    });
  }

  function initBurger() {
    var burger = document.querySelector(".nav-burger");
    var links = document.querySelector(".nav-links");
    if (burger && links) {
      burger.addEventListener("click", function () { links.classList.toggle("open"); });
    }
  }

  function initCopy() {
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sel = btn.getAttribute("data-copy");
        var el = document.querySelector(sel);
        if (!el) return;
        var text = el.innerText;
        navigator.clipboard.writeText(text).then(function () {
          var old = btn.textContent;
          btn.textContent = "✓ Скопировано";
          setTimeout(function () { btn.textContent = old; }, 1800);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderPartners();
    initBurger();
    initCopy();
  });
})();

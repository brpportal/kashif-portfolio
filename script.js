// ============================================================
//  WHATSAPP NUMBER — sirf YAHAN change karna hai.
//  Format: country code + number, baghair "+" ya spaces ke.
//  Misal: Pakistan ka 0300-1234567  ->  "923001234567"
// ============================================================
const WHATSAPP_NUMBER = "923288862114";

// Pehle se likha hua message jo WhatsApp me khud bhar jayega
const WHATSAPP_MESSAGE = "Assalam o Alaikum! Main Kashif Noor ki website se aya hun. Mujhe apne business ke liye website banwani hai — tafseel bata dein.";

// Saare .wa-link walay buttons par WhatsApp ka link lagao
(function setWhatsAppLinks() {
  var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  document.querySelectorAll(".wa-link").forEach(function (a) { a.setAttribute("href", url); });
})();

// Scroll par sections ko naram si animation ke sath zahir karo
(function scrollReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();

// Scroll progress bar, frosted header, aur badal (cloud) parallax
(function scrollFx() {
  var bar = document.getElementById("progress");
  var header = document.getElementById("siteHeader");
  var clouds = document.querySelectorAll(".cloud");
  var ticking = false;
  function update() {
    var y = window.scrollY || 0;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
    header.classList.toggle("scrolled", y > 12);
    if (y < 900) clouds.forEach(function (c, i) { c.style.marginTop = (y * (0.08 + i * 0.05)) + "px"; });
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

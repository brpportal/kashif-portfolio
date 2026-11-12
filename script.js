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
  var links = document.querySelectorAll(".wa-link");
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute("href", url);
  }
})();

// Scroll par sections ko naram si animation ke sath zahir karo
(function scrollReveal() {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add("visible");
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { observer.observe(el); });
})();

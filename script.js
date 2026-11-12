// WhatsApp: number aur message yahan se change hota hai
const WA = "https://wa.me/923288862114?text=" + encodeURIComponent("Assalam o Alaikum! Mujhe apne business ke liye website banwani hai.");
document.querySelectorAll(".wa").forEach(function (a) { a.href = WA; a.target = "_blank"; a.rel = "noopener"; });

// Scroll reveal
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("on"); }); return; }
  var io = new IntersectionObserver(function (list) {
    list.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("on"); io.unobserve(x.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
  els.forEach(function (e) { io.observe(e); });
})();

// Progress bar + frosted header
(function () {
  var bar = document.getElementById("progress"), head = document.getElementById("bar"), t = false;
  function f() {
    var y = window.scrollY, m = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (m > 0 ? Math.min(y / m, 1) : 0) + ")";
    head.classList.toggle("on", y > 10); t = false;
  }
  addEventListener("scroll", function () { if (!t) { t = true; requestAnimationFrame(f); } }, { passive: true });
  f();
})();

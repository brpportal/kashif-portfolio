// WhatsApp: har button ka apna pre-filled message HTML me hai (package/demo ke naam ke sath).
// Yahan sirf naye tab me kholna set hota hai — hrefs ko override NAHI karna.
document.querySelectorAll(".wa").forEach(function (a) { a.target = "_blank"; a.rel = "noopener"; });

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

/* PKT local time (footer) */
(function(){var el=document.getElementById('pkt');if(!el)return;function tick(){try{el.textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Karachi',hour:'2-digit',minute:'2-digit'});}catch(e){el.textContent='';}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){tick();setInterval(tick,30000);});}else{tick();setInterval(tick,30000);}})();

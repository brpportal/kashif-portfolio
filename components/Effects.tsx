"use client";
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    document.querySelectorAll(".wa").forEach((a) => {
      (a as HTMLAnchorElement).target = "_blank";
      (a as HTMLAnchorElement).rel = "noopener";
    });
    const els = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (list) => {
          list.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add("on");
              if (io) io.unobserve(x.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
      );
      els.forEach((e) => io && io.observe(e));
    } else {
      els.forEach((e) => e.classList.add("on"));
    }
    const bar = document.getElementById("progress");
    const head = document.getElementById("bar");
    let t = false;
    const f = () => {
      const y = window.scrollY;
      const m = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = "scaleX(" + (m > 0 ? Math.min(y / m, 1) : 0) + ")";
      if (head) head.classList.toggle("on", y > 10);
      t = false;
    };
    const onScroll = () => {
      if (!t) {
        t = true;
        requestAnimationFrame(f);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    f();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (io) io.disconnect();
    };
  }, []);
  return null;
}

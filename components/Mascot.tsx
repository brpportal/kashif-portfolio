"use client";
import { useEffect, useRef, useState } from "react";

export default function Mascot() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let anim: { destroy: () => void; addEventListener: (n: string, cb: () => void) => void } | null = null;
    let alive = true;
    (async () => {
      try {
        const lottie = (await import("lottie-web")).default;
        if (!alive || !ref.current) return;
        anim = lottie.loadAnimation({
          container: ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/mascot.json",
        }) as typeof anim;
        if (anim) anim.addEventListener("data_failed", () => setFailed(true));
      } catch (e) {
        setFailed(true);
      }
    })();
    const t = setTimeout(() => {
      if (ref.current && !ref.current.querySelector("svg")) setFailed(true);
    }, 3500);
    return () => {
      alive = false;
      clearTimeout(t);
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <div className="mascot-box" aria-hidden="true">
      {failed ? <img src="/spark-3d.jpg" alt="" /> : <div ref={ref} className="mascot-lottie" />}
    </div>
  );
}

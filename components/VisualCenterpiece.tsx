"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VisualCenterpiece() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="h-[70vh] flex items-center justify-center relative section-fade">
      {/* Soft aura */}
      <div
        ref={ref}
        className="relative w-95 h-95 rounded-full
bg-linear-to-br from-emerald-300 via-green-200 to-violet-300
        blur-3xl opacity-100"
      />

      {/* Subtle ring */}
      <div className="absolute w-56 h-56 rounded-full
                border border-violet-400/50
                ring-1 ring-emerald-400/50
                shadow-[0_0_30px_rgba(184,165,227,0.25)]
                animate-pulse" />

      {/* Profile image */}
      <img
        src="/dakezo.jpeg"
        alt="Debankita"
        className="absolute w-70 h-70 rounded-full object-cover shadow-xl"
      />

      {/* Caption */}
      <p className="absolute bottom-8 text-xl text-stone-600 italic">
        A soft pause between quests 🌿
      </p>
    </section>
  );
}

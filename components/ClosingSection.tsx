"use client";

import { useRef } from "react";
import confetti from "canvas-confetti";

export default function ClosingSection() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleWish = () => {
    const ref = btnRef.current!;
    const rect = ref.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // First burst
    confetti({
      origin: { x, y },
      particleCount: 90,
      spread: 70,
      colors: ["#6FAF8E", "#9FD6B2", "#B8A5E3", "#EDE9FE"],
      disableForReducedMotion: true,
      scalar: 0.85,
      drift: 0.4,
    });

    // Secondary burst
    setTimeout(() => {
      confetti({
        origin: { x, y },
        particleCount: 45,
        angle: 60,
        spread: 55,
        colors: ["#9FD6B2", "#B8A5E3"],
        disableForReducedMotion: true,
      });
      confetti({
        origin: { x, y },
        particleCount: 45,
        angle: 120,
        spread: 55,
        colors: ["#9FD6B2", "#B8A5E3"],
        disableForReducedMotion: true,
      });
    }, 250);
  };

  return (
    <section className="py-12 md:py-20 text-center px-6">
      <p className="italic text-lg text-stone-700 mb-8">
        “May today feel calm, fun, and a little magical.” 🌿
      </p>

      <button
        ref={btnRef}
        onClick={handleWish}
        className="px-8 py-3 rounded-full
                   bg-emerald-700 text-white text-sm
                   hover:bg-emerald-800 hover:scale-105
                   transition"
      >
        🌱 Make a wish
      </button>

      <p className="mt-6 text-xs text-stone-400 italic">
        Take your time — wishes know when to bloom ✨
      </p>

      <p className="mt-16 text-xs text-stone-400">
        Crafted like a cozy save point.
      </p>
    </section>
  );
}

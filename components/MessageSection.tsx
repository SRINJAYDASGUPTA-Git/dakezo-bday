"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MessageSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ref.current?.children || [], {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      stagger: 0.35,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-12 md:py-20 px-6 text-center max-w-3xl mx-auto section-fade">
      <div ref={ref} className="space-y-6">
        <p className="max-w-xl mx-auto responsive-text leading-relaxed">
          I hope this year gives you calm days, fun games,
          stories that pull you in, and little wins that feel
          bigger than they seem 🌿
          <br />
          <br />
          You have a way of bringing warmth into spaces —
          even when you’re just being yourself.
        </p>

        <p className="mt-6 text-sm italic text-emerald-600">
          ちゃんと進んでるよ 🌸
        </p>

        <h2 className="mt-12 text-2xl font-serif">
          Another level unlocked ✨
        </h2>

        <p className="mt-4 text-stone-500 max-w-lg mx-auto">
          May this chapter be filled with comfort,
          curiosity, and moments that feel like a safe save point.
        </p>
      </div>
    </section>
  );
}

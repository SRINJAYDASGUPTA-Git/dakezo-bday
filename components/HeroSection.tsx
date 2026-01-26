"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.3,
      ease: "power3.out",
    })
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-fade"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 16
        const y = (e.clientY / window.innerHeight - 0.5) * 16
        setPos({ x, y })
      }}
    >
      {/* Anchoring blobs (slightly darker, more saturated) */}
      <div className="absolute w-150 h-150 bg-emerald-300/35 rounded-full blur-3xl -top-40 -left-40" />
      <div className="absolute w-125 h-125 bg-violet-500/30 rounded-full blur-3xl -bottom-50 -right-50" />

      {/* Floating vibe cards */}
      <div
        className="absolute top-32 left-24 backdrop-blur-xl bg-white/70 rounded-xl px-4 py-2 text-sm shadow-md"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        🎮 Player One
      </div>

      <div
        className="absolute bottom-40 right-28 backdrop-blur-xl bg-white/70 rounded-xl px-4 py-2 text-sm shadow-md"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        🌿 Main Character Energy
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-[36px] md:text-7xl font-serif tracking-tight
                     text-stone-800
                     drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
        >
          Happy Birthday, Debankita!
        </h1>

        <p className="mt-6 text-emerald-800 text-xl">
          Player one — today&apos;s your level up ✨
        </p>

        <p className="mt-2 text-lg italic text-stone-600">
          A day made just for you 🌱
        </p>
      </div>
    </section>
  )
}

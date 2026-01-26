import HeroSection from "@/components/HeroSection"
import VisualCenterpiece from "@/components/VisualCenterpiece"
import MessageSection from "@/components/MessageSection"
import ClosingSection from "@/components/ClosingSection"
import MusicToggle from "@/components/MusicToggle"

export default function Page() {
  return (
    <main className="relative z-10">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="ambient-dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      <HeroSection />
      <VisualCenterpiece />
      <MessageSection />
      <ClosingSection />
      <MusicToggle />
    </main>
  )
}

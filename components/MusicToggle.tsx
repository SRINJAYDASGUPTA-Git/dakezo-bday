"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const ensureAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio("/hbd.mp3");
      audio.loop = true;
      audio.volume = 0.1;
      audioRef.current = audio;
    }
  };

  const startFromUserGesture = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    ensureAudio();
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => {
        // silently fail – user can still press button
      });

    removeListeners();
  };

  const removeListeners = () => {
    window.removeEventListener("click", startFromUserGesture);
    window.removeEventListener("pointerdown", startFromUserGesture);
    window.removeEventListener("touchstart", startFromUserGesture);
  };

  const toggleMusic = () => {
    ensureAudio();

    if (!playing) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }

    setPlaying(!playing);
    startedRef.current = true;
    removeListeners();
  };

  useEffect(() => {
    window.addEventListener("click", startFromUserGesture, { once: true });
    window.addEventListener("pointerdown", startFromUserGesture, { once: true });
    window.addEventListener("touchstart", startFromUserGesture, { once: true });

    return removeListeners;
  }, []);

  return (
    <button
      onClick={toggleMusic}
      aria-label="Toggle background music"
      className="fixed bottom-5 right-5 z-50
                 w-11 h-11 rounded-full
                 backdrop-blur-md bg-white/70
                 shadow-lg flex items-center justify-center
                 text-lg transition hover:scale-105"
    >
      {playing ? "🎵" : "🔈"}
    </button>
  );
}

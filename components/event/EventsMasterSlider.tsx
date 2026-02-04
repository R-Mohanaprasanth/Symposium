"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventSection from "../EventsPage/EventSlidesSection";

type EventsMasterSliderProps = {
  events: any[];
  sectionId?: string;
};

export default function EventsMasterSlider({
  events,
  sectionId = "events",
}: EventsMasterSliderProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused, events.length]);

  if (!events || events.length === 0) return null;

  return (
    <section
      id={sectionId}
      className="
        relative overflow-hidden
        flex flex-col items-center justify-center
        py-6
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={events[index].slug}
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -500, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full flex justify-center"
        >
          <EventSection {...events[index]} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-[190px] sm:bottom-[123px] flex items-center gap-3 z-50">
  {events.map((_, i) => {
    const isActive = index === i;

    const shouldShow =
      i === 0 ||
      i === events.length - 1 ||
      Math.abs(index - i) <= 1;

    if (!shouldShow) {
      if (i === index - 2 || i === index + 2) {
        return (
          <span
            key={i}
            className="px-2 text-[#7ffdfd]/70 text-xl select-none"
          >
            …
          </span>
        );
      }
      return null;
    }

    return (
      <motion.button
        key={i}
        onClick={() => setIndex(i)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className={`

          w-10 h-10
          rounded-full
          flex items-center justify-center
          font-semibold
          text-sm
          transition-all
          ${
            isActive
              ? `
                bg-[#01ffff]
                text-black
                shadow-[0_0_0px_rgba(1,255,255,0.7)]
                scale-110
              `
              : `
                bg-white/10
                text-white/80
                border border-white/20
                backdrop-blur-md
                hover:bg-[#01ffff]/20
              `
          }
        `}
      >
        {i + 1}
      </motion.button>
    );
  })}
</div>


    </section>
  );
}

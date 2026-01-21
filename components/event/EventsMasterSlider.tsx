"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";
import EventSection from "../EventsPage/EventSlidesSection";

export default function EventsMasterSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // auto slide
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="technical-events"
      className="
        relative
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        py-3
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
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full flex justify-center"
        >
          <EventSection {...events[index]} />
        </motion.div>
      </AnimatePresence>

      {/* SLIDE POINTERS */}
      <div className="absolute bottom-1 flex gap-3 z-20">
        {/* First 3 */}
        {events.slice(0, 3).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-10 h-10 rounded-full
              flex items-center justify-center
              text-sm font-semibold
              transition-all
              ${
                index === i
                  ? "bg-[#0B1C2D] text-white"
                  : "bg-white/70 text-[#0B1C2D]"
              }
            `}
          >
            {i + 1}
          </button>
        ))}

        {/* Dots */}
        {events.length > 4 && (
          <span className="px-2 text-white text-xl">...</span>
        )}

        {/* Last */}
        {events.length > 3 && (
          <button
            onClick={() => setIndex(events.length - 1)}
            className={`
              w-10 h-10 rounded-full
              flex items-center justify-center
              text-sm font-semibold
              transition-all
              ${
                index === events.length - 1
                  ? "bg-[#0B1C2D] text-white"
                  : "bg-white/70 text-[#0B1C2D]"
              }
            `}
          >
            {events.length}
          </button>
        )}
      </div>
    </section>
  );
}

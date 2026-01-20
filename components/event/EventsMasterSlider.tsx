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
    className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    onTouchStart={() => setIsPaused(true)}
    onTouchEnd={() => setIsPaused(false)}
  >
    {/* ✅ EVENT TITLE */}
    {/* <AnimatePresence mode="wait">
  <motion.h2
    key={events[index].sectionTitle}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="text-3xl md:text-4xl font-semibold mb-12 text-left w-full max-w-6xl px-6"
  >
    {events[index].sectionTitle}
  </motion.h2>
</AnimatePresence> */}


    {/* ✅ SLIDER */}
    <AnimatePresence mode="wait">
      <motion.div
        key={events[index].slug}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -500, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full flex justify-center"
      >
       {/* <div className="w-full max-w-6xl px-6 mb-10">
  <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display text-foreground">
    {events[index].sectionTitle}{" "}
    <span className="gradient-text">Neuronex 2K26</span>
  </h2>
</div> */}


        <EventSection {...events[index]} />
      </motion.div>
    </AnimatePresence>
  </section>
);
}

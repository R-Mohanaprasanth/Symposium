"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InteractiveText from "@/components/InteractiveText";
import EventCountdown from "@/components/EventCountdown";

// import space from "@/app/layout";


const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-zinc-200">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg-v.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* GRID OVERLAY */}
      {/* <div className="absolute inset-0 grid-pattern opacity-30 z-10" /> */}

      {/* ANIMATED LINES */}
      {/* <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ opacity: 0.12 }}
      >
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="#01ffff"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="#01ffff"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </svg> */}

      {/* CONTENT */}
      {/* <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center"> */}

        {/* BADGE */}
        {/* <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 -mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-[#01ffff]" />
          <span className="text-sm font-medium text-zinc-200">
            Showcase your Skills
          </span>
        </motion.div> */}

        {/* HEADING */}
        {/* <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-none">
            <span className="block text-3xl md:text-5xl uppercase tracking-widest text-zinc-300 mb-2">
              Symposium
            </span>

            <InteractiveText
              text="NEURONEX"
              className="text-5xl md:text-7xl lg:text-8xl gradient-text"
            />
          </h1>
        </motion.div> */}

        {/* COUNTDOWN */}
        {/* <EventCountdown /> */}

        {/* CTA BUTTONS */}
        {/* <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/events#technical-events">
            <Button
              size="lg"
              className="bg-gradient-to-r from-zinc-200 via-white to-zinc-300 text-black px-8 py-6 text-lg font-semibold group hover:brightness-110"
            >
              Technical Event
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="border border-white/40 text-zinc-200 bg-white/5 backdrop-blur-md px-8 py-6 text-lg hover:bg-white/10"
          >
            <Play className="w-5 h-5 mr-2" />
            Non-Technical Event
          </Button>
        </motion.div> */}

        {/* STATS */}
        {/* <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { value: "150+", label: "Events Conducted" },
            { value: "98%", label: "Student Satisfaction" },
            { value: "10+", label: "Years Experience" },
            { value: "1000+", label: "Prize Pool" },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -6 }}>
              <div className="text-3xl md:text-4xl font-bold text-[#01ffff]">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div> */}

      {/* SCROLL INDICATOR */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div> */}

  <motion.h1
  className="
    absolute
    top-20
    left-1/2
    -translate-x-1/2
    w-full
    text-center
    text-[4rem] md:text-[6.5rem] lg:text-[8rem]
    font-extrabold
    tracking-[0.06em]
    text-white
    z-20
    select-none
    granule-text
  "
  initial={{
    scale: 1.6,
    opacity: 0,
    filter: "blur(14px)",
  }}
  animate={{
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 3.8,
    ease: "easeOut",
  }}
>
  NEURONEX
</motion.h1>







    </section>
  );
};

export default HeroSection;

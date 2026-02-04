"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

const EventsCTASection = () => {
  return (
    <section className="relative px-7 sm:px-0 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
  className="
    relative
    rounded-3xl
    border border-[#01ffff]
    bg-transparent
    p-6 sm:p-8 md:p-14
    flex flex-col md:flex-row
    items-center justify-between
    gap-6 sm:gap-8 md:gap-10
    overflow-hidden
  "
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>


{/* base mild border */}
<div
  className="absolute inset-0 rounded-3xl pointer-events-none"
  style={{
    padding: "1px",
    background: "rgba(1,255,255,0.25)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  }}
/>

{/* rotating glow */}
<motion.div
  className="absolute inset-0 rounded-3xl pointer-events-none"
  style={{
    padding: "3px",
    background: `
      conic-gradient(
        from 0deg,
        rgba(1,255,255,0.15) 0deg,
        rgba(1,255,255,0.15) 40deg,
        rgb(1,255,255) 60deg,
        rgba(12,113,113,0.4) 80deg,
        rgba(1,255,255,0.15) 100deg,
        rgba(1,255,255,0.15) 360deg
      )
    `,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  }}
  animate={{
    backgroundImage: [
      `
      conic-gradient(
        from 0deg,
        rgba(1,255,255,0.15) 0deg,
        rgba(1,255,255,0.15) 40deg,
        rgba(1,255,255,1) 60deg,
        rgba(1,255,255,0.4) 80deg,
        rgba(1,255,255,0.15) 100deg,
        rgba(1,255,255,0.15) 360deg
      )
      `,
      `
      conic-gradient(
        from 360deg,
        rgba(1,255,255,0.15) 0deg,
        rgba(1,255,255,0.15) 40deg,
        rgba(1,255,255,1) 60deg,
        rgba(1,255,255,0.4) 80deg,
        rgba(1,255,255,0.15) 100deg,
        rgba(1,255,255,0.15) 360deg
      )
      `,
    ],
  }}
  transition={{
    duration: 3.8,
    ease: "linear",
    repeat: Infinity,
  }}
/>




          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">

            {/* TAG */}
            <div className="flex items-center gap-2 text-[#01ffff] mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest font-medium">
                Don’t Miss Out
              </span>
            </div>

            {/* HEADING */}
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">

              <span className="text-white">
                Discover Exciting Events at{" "}
              </span>
              <span className="bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white bg-clip-text text-transparent">
                NEURONEX 2K26
              </span>
            </h3>

            {/* DESCRIPTION */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">

              From coding challenges and workshops to tech talks and competitions —
              explore events crafted to challenge, inspire, and elevate you.
            </p>
          </div>

          {/* RIGHT CTA BUTTON */}
          <Link href="/events">
            <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="
    relative z-10
    flex items-center gap-2 sm:gap-3
    px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
    rounded-full
    bg-gradient-to-r
    from-[#01ffff]
    via-white
    to-[#01ffff]
    text-black
    font-semibold
    text-sm sm:text-base md:text-lg
    shadow-md
    hover:brightness-110
    transition
    cursor-pointer
  "
>

              <CalendarDays className="w-5 h-5" />
              View All Events
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default EventsCTASection;

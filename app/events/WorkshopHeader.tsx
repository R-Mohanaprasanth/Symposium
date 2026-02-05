"use client";

import EventsMarquee from "@/components/EventsMarquee";
import { motion } from "framer-motion";

const EventsHeaderNon = () => {
  return (
    <section
      className="
        relative
        px-12 sm:px-6
        pt-24 sm:pt-32 md:pt-36
        pb-16 sm:pb-20 md:pb-24
        overflow-hidden
        text-center
        -mt-40 sm:-mt-20
      "
    >
      {/* SOFT CYAN ACCENT */}
      <div
        className="
          absolute
          -top-32 sm:-top-36 md:-top-40
          left-1/2
          -translate-x-1/2
          w-[420px] sm:w-[550px] md:w-[700px]
          h-[420px] sm:h-[550px] md:h-[700px]
          bg-[#01ffff]/10
          blur-[120px] sm:blur-[140px] md:blur-[160px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-5xl
          mx-auto
          px-4 sm:px-6
          space-y-4 sm:space-y-6
        "
      >
        {/* BADGE */}
        <motion.div className="relative inline-block overflow-hidden rounded-md">
          {/* base mild border */}
          <div
            className="absolute inset-0 rounded-md pointer-events-none"
            style={{
              padding: "1.5px",
              background: "rgba(34, 172, 172, 0.65)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* rotating glow */}
          <motion.div
            className="absolute inset-0 rounded-md pointer-events-none"
            style={{
              padding: "3px",
              background: `
                conic-gradient(
                  from 0deg,
                  #1edddd 0deg,
                  #15dedee4 40deg,
                  #01ffff 60deg,
                  #25a3a3 80deg,
                  #22bdbde3 100deg,
                  #22ebeb9a 360deg
                )
              `,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            animate={{
              backgroundImage: [
                `conic-gradient(
                  from 0deg,
                  rgba(1,255,255,0.15) 0deg,
                  rgba(1,255,255,1) 60deg,
                  rgba(1,255,255,0.15) 360deg
                )`,
                `conic-gradient(
                  from 360deg,
                  rgba(1,255,255,0.15) 0deg,
                  rgba(1,255,255,1) 60deg,
                  rgba(1,255,255,0.15) 360deg
                )`,
              ],
            }}
            transition={{
              duration: 3.8,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          {/* CONTENT */}
          <span
            className="
              relative z-10
              inline-block
              px-4 sm:px-6
              py-1.5 sm:py-2
              text-xs sm:text-sm
              font-semibold
              tracking-widest
              text-white
              bg-[#01ffff]/10
              rounded-md
            "
          >
            EVENTS
          </span>
        </motion.div>

        {/* HEADING */}
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            font-display
            leading-tight
            text-white
          "
        >
          Upcoming{" "}
          <span
            className="
              bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white
              bg-clip-text
              text-transparent
            "
          >
            Workshops
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm sm:text-base md:text-lg
            text-zinc-300
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Participate, learn, and grow through hands-on training, expert guidance, practical demonstrations, and immersive learning experiences designed to build real-world technical skills.
        </p>

        {/* MARQUEE */}
        <div className="pt-4 sm:pt-6">
          <EventsMarquee
            events={[
              "N8N-AI AUTOMATION",
              "EMERGENT.AI",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsHeaderNon;

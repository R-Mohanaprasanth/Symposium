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

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative
          max-w-5xl
          mx-auto
          px-4 sm:px-6
          space-y-4 sm:space-y-6
        "
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative inline-block overflow-hidden rounded-md"
        >
          {/* base border */}
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
            leading-tight
            text-white
          "
        >
          Upcoming{" "}
          <motion.span
            className="
              inline-block
              bg-gradient-to-r
              from-[#01ffff]
              via-[#7ffdfd]
              to-white
              bg-[length:200%_100%]
              bg-clip-text
              text-transparent
            "
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Non-Tech Events
          </motion.span>
        </h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="
            text-sm sm:text-base md:text-lg
            text-zinc-300
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Engage, collaborate, and enjoy interactive sessions, cultural
          activities, fun challenges, and memorable experiences beyond
          technology.
        </motion.p>

        {/* MARQUEE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="pt-4 sm:pt-6"
        >
          <EventsMarquee
            events={[
              "Infinity Guantlet",
              "Itanoru Sekai",
              "Music Mania",
              "Final Destination",
              "Hawkins Mystery",
              "Alice In Borderland",
              "Miniout Circle",
            ]}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventsHeaderNon;

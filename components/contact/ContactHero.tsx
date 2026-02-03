"use client";
import FadeIn from "@/components/common/FadeIn";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <FadeIn>
      <section
        className="
          relative
          py-20 sm:py-24 md:py-32
          text-center
          px-12 sm:px-6
          overflow-hidden
        "
      >
        {/* CYAN LIGHT ACCENT */}
        <div
          className="
            absolute
            -top-32 sm:-top-40
            left-1/2
            -translate-x-1/2
            w-[420px] sm:w-[520px] md:w-[650px]
            h-[420px] sm:h-[520px] md:h-[650px]
            bg-[#01ffff]/12
            blur-[120px] sm:blur-[150px] md:blur-[170px]
            rounded-full
            pointer-events-none
          "
        />

        {/* CONTENT */}
        <div className="relative mt-5 sm:mt-0 max-w-3xl mx-auto">

          {/* BADGE */}
          <motion.div className="relative inline-block mb-4 sm:mb-6 rounded-md">
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
              CONTACT
            </span>
          </motion.div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
            Contact{" "}
            <span
              className="
                bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white
                bg-clip-text
                text-transparent
              "
            >
              Us
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4 sm:mt-6
              text-sm sm:text-base md:text-lg
              text-zinc-300
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Have questions about Neuronex Symposium events, registrations, or
            participation? We’re here to guide you every step of the way.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}

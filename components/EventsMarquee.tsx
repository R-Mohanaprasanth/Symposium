"use client";

import { motion } from "framer-motion";

interface EventsMarqueeProps {
  events: string[];
}

const EventsMarquee = ({ events }: EventsMarqueeProps) => {
  return (
    <section
      className="
        relative
        py-6 sm:py-8 md:py-10
        overflow-hidden
      "
    >
      {/* TOP & BOTTOM FADE LINES */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#01ffff]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#01ffff]/20 to-transparent" />

      <div className="relative">

        {/* MARQUEE */}
        <motion.div
          className="
            flex items-center
            gap-6 sm:gap-10 md:gap-14
            whitespace-nowrap
          "
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 18, // slightly slower → better on mobile
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...events, ...events].map((event, index) => (
            <div
              key={index}
              className="
                flex items-center
                gap-6 sm:gap-10 md:gap-14
              "
            >
              {/* EVENT TEXT */}
              <span
                className="
                  text-sm sm:text-lg md:text-xl lg:text-2xl
                  font-display font-semibold
                  uppercase tracking-widest
                  text-zinc-300
                  hover:text-[#01ffff]
                  transition-colors
                "
              >
                {event}
              </span>

              {/* SEPARATOR */}
              <span
                className="
                  text-[#01ffff]/50
                  text-sm sm:text-lg md:text-xl
                  select-none
                "
              >
                ◆
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsMarquee;

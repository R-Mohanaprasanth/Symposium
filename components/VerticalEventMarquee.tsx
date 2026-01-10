"use client";

import { motion } from "framer-motion";

const TEXT = "NEURONEX 2K26";

export default function VerticalEventMarquee() {
  return (
    <>
      {/* LEFT MARQUEE */}
      <div className="fixed left-[max(1.5rem,calc((100vw-1280px)/2-2.5rem))] top-0 h-screen z-30 pointer-events-none">
        <motion.div
          className="flex flex-col items-center justify-center gap-16 h-[200%]"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.4, 0.65, 0.4] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="vertical-text text-xl md:text-2xl font-medium tracking-[0.4em] text-muted-foreground/60"
            >
              {TEXT}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* RIGHT MARQUEE */}
      <div className="fixed right-[max(1.5rem,calc((100vw-1280px)/2-2.5rem))] top-0 h-screen z-30 pointer-events-none">
        <motion.div
          className="flex flex-col items-center justify-center gap-16 h-[200%]"
          animate={{ y: ["-50%", "0%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.4, 0.65, 0.4] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="vertical-text text-xl md:text-2xl font-medium tracking-[0.4em] text-muted-foreground/60"
            >
              {TEXT}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </>
  );
}

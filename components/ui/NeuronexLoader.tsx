"use client";

import { motion } from "framer-motion";

export default function NeuronexLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050b14]">
      {/* Glow Background */}
      <div
        className="
          absolute
          w-[320px] h-[320px]
          sm:w-[460px] sm:h-[460px]
          rounded-full
          blur-[90px] sm:blur-[120px]
          bg-gradient-to-r
          from-[#00bebe]/30
          via-[#01ffff]/45
          to-[#00bebe]/30
        "
      />

      {/* Outer Pulse Ring */}
      <motion.div
        className="
          absolute
          w-[260px] h-[260px]
          sm:w-[380px] sm:h-[380px]
          rounded-full
          border
          border-[#01ffff]/20
        "
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Middle Pulse Ring */}
      <motion.div
        className="
          absolute
          w-[220px] h-[220px]
          sm:w-[320px] sm:h-[320px]
          rounded-full
          border
          border-[#00bebe]/35
        "
        animate={{ scale: [1, 1.28], opacity: [0.75, 0] }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.45,
        }}
      />

      {/* Core */}
      <motion.div
        className="
          relative
          w-[140px] h-[140px]
          sm:w-[190px] sm:h-[190px]
          rounded-full
          bg-gradient-to-r
          from-[#00bebe]
          via-[#01ffff]
          to-[#00bebe]
          shadow-[0_0_50px_#01ffff]
          sm:shadow-[0_0_70px_#01ffff]
          flex items-center justify-center
        "
        animate={{ scale: [1, 1.06, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner Image */}
{/* Inner Image */}
<div
  className="
    absolute
    inset-3
    rounded-full
    bg-[#050b14]
    flex items-center justify-center
    overflow-hidden  
  "
>
  <img
    src="/images/logo-3.png"
    alt="Neuronex"
    className="
      w-full h-full
      object-contain
      scale-[1.6] sm:scale-[1.6]
      -translate-y-[-15px] sm:-translate-y-[-20px]
    "
  />
</div>



        {/* Rotating Neural Spark */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#01ffff]/35"
          animate={{ rotate: 360 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Brand Text */}
      <motion.div
        className="
          absolute top-1/2 mt-30 sm:top-auto sm:mt-0 sm:bottom-20

          text-center
        "
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <h1
          className="
            text-3xl sm:text-6xl md:text-7xl
            font-black
            tracking-[0.22em] sm:tracking-[0.28em]
            uppercase
            bg-gradient-to-r
            from-[#01ffff]
            via-[#00eaea]
            to-[#01ffff]
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_14px_rgba(1,255,255,0.35)]
          "
        >
          NEURONEX
        </h1>

        <p
          className="
            mt-2 sm:mt-5
            text-[10px] sm:text-base
            tracking-[0.3em] sm:tracking-[0.4em]
            uppercase
            text-white
          "
        >
          INITIALIZING&nbsp;INTELLIGENCE
        </p>
      </motion.div>
    </div>
  );
}

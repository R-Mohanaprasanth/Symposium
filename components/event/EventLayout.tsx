"use client";

import { motion } from "framer-motion";

export default function EventLayout({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="
          fixed inset-0
          bg-[url('/images/bg-1.png')]
          bg-cover
          bg-center
          bg-no-repeat
          -z-20
        "
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/65 -z-10" />

      {/* SOFT TECH GLOW */}
      <div className="fixed top-[35%] left-[50%] -translate-x-1/2
        w-[700px] h-[700px] bg-[#01ffff]/10 blur-[220px]
        rounded-full -z-10"
      />

      {/* CONTENT */}
      <section className="relative z-10 pt-32 pb-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">

          {/* POSTER */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              overflow-hidden
              border border-[#01ffff]/30
              backdrop-blur-sm
              bg-[#01ffff]/5
            "
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <h1
              className="
                text-4xl md:text-5xl font-bold
                bg-gradient-to-r
                from-[#00bebe]
                via-[#01ffff]
                to-[#00bebe]
                bg-clip-text
                text-transparent
              "
            >
              {title}
            </h1>

            {children}
          </motion.div>

        </div>
      </section>
    </main>
  );
}

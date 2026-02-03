"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Users,
  TrendingUp,
  Handshake,
  ArrowRight,
} from "lucide-react";
import TechFrame from "@/components/common/TechFrame";

const benefits = [
  {
    icon: Users,
    title: "Student Reach",
    text: "Connect with thousands of talented engineering students across institutions.",
  },
  {
    icon: TrendingUp,
    title: "Brand Visibility",
    text: "Get your brand showcased across events, banners, and digital promotions.",
  },
  {
    icon: Building2,
    title: "Industry Presence",
    text: "Position your organization as a technology leader among future professionals.",
  },
  {
    icon: Handshake,
    title: "Meaningful Collaboration",
    text: "Partner with innovation-driven events that encourage real engagement.",
  },
];

const SponsorsSection = () => {
  return (
    <section
      className="
        relative
        px-8 sm:px-0
        py-20 sm:py-24 md:py-32
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="relative inline-block">
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
                  `conic-gradient(from 0deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
                  `conic-gradient(from 360deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
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
                font-semibold tracking-widest
                text-white
                border border-[#01ffff]
                rounded-md
              "
            >
              Sponsors & Collaborations
            </span>
          </motion.div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Partner With </span>
            <span className="bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white bg-clip-text text-transparent">
              NEURONEX 2K26
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed text-left">
  Join us in shaping the future by supporting innovation, creativity,
  and technical excellence. Collaborate with Neuronex to amplify your
  brand and connect with the next generation of tech leaders.
</p>

        </motion.div>

        {/* VALUE FLOW */}
        <div className="relative max-w-4xl mx-auto mb-16 sm:mb-24 md:mb-28">
          <div className="relative max-w-4xl mx-auto">

            {/* VERTICAL LINE (hidden on very small screens) */}
            <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-px bg-[#01ffff]/50" />

            <div className="space-y-12 sm:space-y-20 md:space-y-24">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-5 sm:gap-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className="
                        relative z-10
                        w-10 h-10 sm:w-12 sm:h-12
                        rounded-full
                        border border-[#01ffff]
                        bg-[#020b14]
                        flex items-center justify-center
                      "
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#01ffff]" />
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA PANEL */}
        <motion.div
          className="
            relative
            rounded-3xl
            bg-transparent
            backdrop-blur-md
            p-6 sm:p-10 md:p-16
            flex flex-col md:flex-row
            items-center justify-between
            gap-6 sm:gap-8 md:gap-10
            overflow-hidden
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* base mild border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
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
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "3.5px",
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
                `conic-gradient(from 0deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
                `conic-gradient(from 360deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
              ],
            }}
            transition={{
              duration: 3.8,
              ease: "linear",
              repeat: Infinity,
            }}
          />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Let’s Build Something Impactful Together
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Whether you’re a startup, enterprise, or technology brand —
              Neuronex offers a platform to engage, inspire, and recruit future
              innovators.
            </p>
          </div>

          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="
                relative z-10
                flex items-center gap-2 sm:gap-3
                px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6
                rounded-full
                bg-gradient-to-r
                from-[#01ffff]
                via-white
                to-[#01ffff]
                text-black
                font-semibold
                text-sm sm:text-base md:text-lg
                cursor-pointer
                transition
              "
            >
              Become a Sponsor
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SponsorsSection;

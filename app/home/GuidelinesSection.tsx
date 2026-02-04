"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  UserCheck,
  AlertTriangle,
  BadgeInfo,
  Laptop,
} from "lucide-react";
import TechFrame from "@/components/common/TechFrame";

const guidelines = [
  {
    icon: UserCheck,
    title: "Eligibility",
    text: "Open to all Engineering students from recognized institutions.",
  },
  {
    icon: Clock,
    title: "Reporting Time",
    text: "Participants must report at least 10 minutes before their scheduled event time.",
  },
  {
    icon: Laptop,
    title: "Bring Your ID",
    text: "College ID card is mandatory for entry and participation in all events.",
  },
  {
    icon: BadgeInfo,
    title: "Registration",
    text: "Prior online registration is required. On-spot registrations are also availability.",
  },
  {
    icon: AlertTriangle,
    title: "Code of Conduct",
    text: "Participants must maintain discipline and follow the instructions of coordinators.",
  },
  {
    icon: CheckCircle,
    title: "Certificates",
    text: "Participation certificates will be provided to all Tech-Event registered attendees.",
  },
];

const GuidelinesSection = () => {
  return (
    <section
      className="
        relative
        px-9 sm:px-6
        py-20 sm:py-24 md:py-28
        overflow-hidden
        -mt-10 sm:-mt-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
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
                padding: "1px",
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
                border border-[#01ffff]
                rounded-md
              "
            >
              Important Information
            </span>
          </motion.div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Event </span>
            <span className="bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white bg-clip-text text-transparent">
              Guidelines
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            Please read the following guidelines carefully to ensure a smooth,
            fair, and enjoyable experience during Neuronex 2K26.
          </p>
        </motion.div>

        {/* GUIDELINES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {guidelines.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
              >
                <TechFrame className="h-full !p-3 sm:!p-4">
                  <div className="p-3 sm:p-4 md:p-5">

                    {/* ICON */}
                    <div
                      className="
                        w-10 h-10 sm:w-12 sm:h-12
                        mb-4 sm:mb-6
                        rounded-xl
                        border border-[#01ffff]
                        flex items-center justify-center
                      "
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#01ffff]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>

                    {/* TEXT */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {item.text}
                    </p>

                  </div>
                </TechFrame>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;

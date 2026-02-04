"use client";
import EventHero from "./EventHero";
import EventDetails from "./EventDetails";
import EventContacts from "./EventContacts";
import EventRules from "./EventRules";
import EventDescription from "./EventDescription";
import { motion } from "framer-motion";

export default function EventLayout({ event }: any) {
  return (
    <section className="relative min-h-screen px-6 py-32 flex justify-center overflow-hidden">
      {/* BACKGROUND RECTANGLE */}
      <div
        className="
          absolute
          top-24
          w-full max-w-md
          aspect-[4/5]
          bg-[url('/images/bg-1.png')]
          bg-cover bg-center bg-no-repeat
          rounded-2xl
          -z-20
        "
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/65 -z-10" />

      {/* CYAN GLOW */}
      <div
        className="
          fixed top-[35%] left-1/2 -translate-x-1/2
          w-[700px] h-[700px]
          bg-[#01ffff]/10 blur-[220px]
          rounded-full -z-10
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative max-w-6xl w-full
          rounded-3xl p-10
          border-2 border-[#01ffff]/40
          bg-[#061824]/70
          backdrop-blur-xl
          shadow-[0_0_18px_rgba(1,255,255,0.25)]
        "
      >
        {/* IMAGE ROW */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          {/* HERO IMAGE */}

          <div className="w-full md:w-1/2 max-w-md rounded-3xl p-3 border border-[#01ffff]/25 bg-[#061824]/65 backdrop-blur">
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

            <EventHero image={event.heroImage} />
          </div>

          {/* RULES IMAGE */}
          <div className="w-full md:w-1/2 max-w-md rounded-3xl p-3 border border-[#01ffff]/25 bg-[#061824]/65 backdrop-blur">
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

            <EventHero image={event.rulesImage} />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* ABOUT EVENT */}
          <div className="md:col-span-2">
            <EventDescription description={event.description} />
          </div>

          {/* EVENT DETAILS */}
          <div
            className="
              h-full rounded-2xl 
              border border-[#01ffff]/25
              bg-[#061824]/70
              backdrop-blur
              ml-0 sm:ml-21.5
            "
          >
            <EventDetails event={event} />
          </div>

          {/* COORDINATOR */}
          <div
            className="
              h-full rounded-2xl 
             mr-0 sm:mr-21.5
            "
          >
            <EventContacts coordinators={event.coordinators} />

          </div>
        </div>
      </div>
    </section>
  );
}

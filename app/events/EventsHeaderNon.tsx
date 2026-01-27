"use client";

import EventsMarquee from "@/components/EventsMarquee";

const EventsHeaderNon = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden text-center">

      {/* SOFT CYAN ACCENT */}
      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#01ffff]/10
          blur-[160px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative max-w-5xl mx-auto px-6 space-y-6">

        {/* BADGE */}
        <span
          className="
            inline-block
            px-6 py-2
            text-sm font-semibold tracking-widest
            text-white
            border border-[#01ffff]
            bg-[#01ffff]/10
            rounded-md
          "
        >
          NON-TECH EVENTS
        </span>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight text-white">
          Upcoming{" "}
          <span
            className="
              bg-gradient-to-r
              from-[#00bebe]
              via-[#01ffff]
              to-[#00bebe]
              bg-clip-text
              text-transparent
            "
          >
            Non-Tech Events
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Engage, collaborate, and enjoy interactive sessions, cultural
          activities, fun challenges, and memorable experiences beyond
          technology.
        </p>

        {/* MARQUEE */}
        <div className="pt-6">
          <EventsMarquee
            events={[
              "Fun Games",
              "Cultural Fest",
              "Open Mic",
              "Team Challenges",
              "Creative Workshops",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsHeaderNon;

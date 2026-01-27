

"use client";

import EventsMarquee from "@/components/EventsMarquee";

const EventsHeader = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">

      {/* BACKGROUND ACCENT */}
     <div
  className="
    absolute
    top-[-320px]
    right-[-220px]
    w-[700px]
    h-[700px]
    bg-[#01ffff]/12
    blur-[160px]
    rounded-full
    pointer-events-none
  "
/>

<div
  className="
    absolute
    top-[-320px]
    left-[-220px]
    w-[700px]
    h-[700px]
    bg-[#01ffff]/12
    blur-[160px]
    rounded-full
    pointer-events-none
  "
/>

      <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6">

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
          EVENTS
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
            Tech Events
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Discover and register for the most exciting conferences,
          hackathons, workshops, and innovation summits happening this season.
        </p>

        {/* MARQUEE */}
        <div className="pt-6">
          <EventsMarquee
            events={[
              "Community Meetup",
              "AI Hackathon",
              "Web3 Summit",
              "Dev Conference",
              "Startup Pitch Day",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsHeader;

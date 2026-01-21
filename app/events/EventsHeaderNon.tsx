"use client";

import EventsMarquee from "@/components/EventsMarquee";

const EventsHeaderNon = () => {
  return (
    <section className="pt-32 pb-20 text-center">
      <div className="max-w-5xl mx-auto px-6 space-y-4">

        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Upcoming Non-Tech Events
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and register for the most exciting tech conferences,
          hackathons, and summits happening around the world.
        </p>

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
    </section>
  );
};

export default EventsHeaderNon;

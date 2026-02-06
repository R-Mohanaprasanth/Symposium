"use client";

import EventsHeader from "./EventsHeader";
import EventsHeaderNon from "./EventsHeaderNon";
import EventsMasterSlider from "@/components/event/EventsMasterSlider";
import Footer from "@/components/Footer";
import { technicalEvents } from "@/data/events";
import { nonTechnicalEvents } from "@/data/nonTechnicalEvents";
import WorkshopHeader from "./WorkshopHeader";
import { Workshop } from "@/data/workshop";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-visible">

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
      <div className="absolute inset-0 bg-black/65 z-10" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TECH EVENTS */}
        <EventsHeader />
<EventsMasterSlider
  events={technicalEvents}
  sectionId="technical-events"
/>

{/* NON-TECH EVENTS */}
<EventsHeaderNon />
<EventsMasterSlider
  events={nonTechnicalEvents}
  sectionId="non-technical-events"
/>

{/* Workshops */}
<WorkshopHeader />
<EventsMasterSlider
  events={Workshop}
  sectionId="workshop"
/>
        <Footer />
      </div>
    </main>
  );
}

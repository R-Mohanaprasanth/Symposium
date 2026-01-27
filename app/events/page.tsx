"use client";

import EventsHeader from "./EventsHeader";
import EventsHeaderNon from "./EventsHeaderNon";
import EventsMasterSlider from "@/components/event/EventsMasterSlider";
import Footer from "@/components/Footer";

export default function EventsPage() {
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
      {/* <div className="fixed inset-0 bg-black/65 -z-10" /> */}

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TECH EVENTS */}
        <EventsHeader />
        <EventsMasterSlider />

        {/* NON-TECH EVENTS */}
        <EventsHeaderNon />
        <EventsMasterSlider />

        <Footer />
      </div>
    </main>
  );
}

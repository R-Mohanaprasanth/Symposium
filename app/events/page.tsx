"use client";

import BlogCursor from "@/components/BlogCursor";
import EventsHeader from "./EventsHeader";
import EventsHeaderNon from "./EventsHeaderNon";
import EventsSlider from "@/components/EventsSlider";
// import EventsSliderNon from "@/components/EventsSliderNon";
import Footer from "@/components/Footer";
import EventSlidesSection from "@/components/EventsPage/EventSlidesSection";
import { events } from "@/data/events";

import EventSlideSection from "@/components/EventsPage/EventSlidesSection";
import EventsMasterSlider from "@/components/event/EventsMasterSlider";

export default function EventsPage() {
  return (
    <>
      <BlogCursor />

      {/* TECH EVENTS */}
      {/* <section>
        <EventsHeader />
        <EventsSlider />
      </section>

      {/* NON-TECH EVENTS */}
      {/* <section>
        <EventsHeaderNon />
        <EventsSliderNon />
      </section> */} 
      <EventsHeader />
      

      <EventsMasterSlider />

      <EventsHeaderNon />
      <EventsMasterSlider />

      <Footer />
    </>
  );
}

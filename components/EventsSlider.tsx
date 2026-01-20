"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function EventsSlider() {
  const event = events[0];
  const slides = event.slides;

  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* BIG CONTAINER */}
      <div className="relative w-[900px] h-[650px]">

        {slides.map((slide, index) => {
          const diff =
            (index - active + slides.length) % slides.length;

          let transform = "";
          let z = "z-10";
          let opacity = "opacity-40";
          let scale = "scale-90";

          // CENTER
          if (diff === 0) {
            transform = "translate-x-0";
            z = "z-30";
            opacity = "opacity-100";
            scale = "scale-100";
          }

          // RIGHT
          else if (diff === 1) {
            transform = "translate-x-[280px]";
            z = "z-20";
          }

          // LEFT
          else if (diff === slides.length - 1) {
            transform = "-translate-x-[280px]";
            z = "z-20";
          }

          return (
            <div
              key={index}
              className={`
                absolute top-0 left-1/2 -translate-x-1/2
                transition-all duration-500 ease-in-out
                ${transform} ${z} ${opacity} ${scale}
              `}
              onClick={() => setActive(index)}
            >
              <EventCard
                slug={event.slug}

                title={event.title}
                date={event.date}
                location={event.location}
                attendees={event.attendees}
                image={slide.image}
                tags={slide.tags}
                description={slide.description}
                isActive={index === active}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

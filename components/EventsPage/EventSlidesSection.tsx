"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";

interface Slide {
  image: string;
  tags: string[];
  description: string;
}

interface Props {
  slug: string;
  eventHeading: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  slides: Slide[];
}

export default function EventSection({
  slug,
  eventHeading,
  title,
  date,
  location,
  attendees,
  slides,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden px-24 pt-24">
      {/* EVENT HEADING */}
   <h2 className="absolute top-12 left-0 text-2xl md:text-4xl font-bold tracking-wide -mt-10
">
  {eventHeading.split(" ")[0]}{" "}
  <span className="gradient-text">
    {eventHeading.split(" ").slice(1).join(" ")}
  </span>
</h2>

    <div className="flex justify-center mt-10">
      <div className="relative w-[900px] h-[540px] flex items-center justify-center">
        {slides.map((slide, index) => {
          let offset = index - activeIndex;

          // 🔁 LOOP LOGIC
          if (offset < -1) offset += slides.length;
          if (offset > 1) offset -= slides.length;

          const isCenter = offset === 0;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="absolute transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform: `
                  translateX(${offset * 300}px)
                  scale(${isCenter ? 1 : 0.88})
                `,
                opacity: isCenter ? 1 : 0.45,
                zIndex: isCenter ? 20 : 10,
                filter: isCenter ? "none" : "blur(2px)",
              }}
            >
              <EventCard
                slug={slug}
                title={title}
                date={date}
                location={location}
                attendees={attendees}
                image={slide.image}
                tags={slide.tags}
                description={slide.description}
                isActive={isCenter}
              />
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
}

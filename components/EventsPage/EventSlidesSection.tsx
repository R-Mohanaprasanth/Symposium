"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";

interface Slide {
  image: string;
 
}

interface Props {
  slug: string;
  eventHeading: string;
  
  slides: Slide[];
}

export default function EventSection({
  slug,
  eventHeading,
  slides,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden px-24 pt-24">
      {/* EVENT HEADING */}
   {/* <h2 className="absolute top-12 left-0 -mt-10 text-2xl md:text-4xl font-bold tracking-wide leading-tight">
   <span
    className="
      block
      text-sm md:text-base
      uppercase
      tracking-[0.35em]
      text-white/60
      mb-2
    "
  >
    {eventHeading.split(" ")[0]}
  </span>{" "}
<span
   className="
     bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white
    bg-clip-text
    text-transparent
  "
>

  {eventHeading.split(" ").slice(1).join(" ")}
</span>

</h2> */}

<div className="absolute top-12 left-0 -mt-10">
  <div className="relative inline-block">

  <h2
    className="
      text-3xl md:text-5xl lg:text-5xl
      font-extrabold
      tracking-tight
      leading-tight

      bg-gradient-to-r
      from-[#01ffff]
      via-[#7ffdfd]
      to-white
      bg-clip-text
      text-transparent

      drop-shadow-[0_6px_25px_rgba(1,255,255,0.35)]
    "
  >
    {eventHeading}
  </h2>

  {/* CLEAN UNDERLINE */}
  <div
    className="
      
      h-[3px]
      w-full
      bg-gradient-to-r
      from-[#01ffff]
      via-[#7ffdfd]
      to-white
      rounded-full
    "
  />

</div>

</div>



    <div className="flex justify-center -mt-10">
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
                image={slide.image}
                
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

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Props {
  slug: string;
  
  image: string;
  
  isActive: boolean;
}

export default function EventCard({ slug, image, isActive }: Props) {
  const router = useRouter();

  return (
    <div
      className={`
        relative
        w-[380px]
        rounded-3xl
        p-4
        bg-[#0B1C2D]/60
        backdrop-blur
        transition-all
        duration-500
        overflow-hidden
        ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}
      `}
    >
{/* base mild border */}
    <div
      className="absolute inset-0 rounded-3xl"
      style={{
        padding: "1.5px",
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
    padding: "3.5px",

    background: `
      conic-gradient(
        from 0deg,
        rgba(1,255,255,0.15) 0deg,
        rgba(1, 255, 255, 0.15) 40deg,
        rgb(1, 255, 255) 60deg,
        rgba(12, 113, 113, 0.4) 80deg,
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



      {/* IMAGE */}
      <div className="relative h-94 rounded-2xl overflow-hidden bg-black z-10">
        <img
          src={image}
          alt="event"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* BUTTON */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/events/${slug}`);
          }}
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            bg-white/80 text-black
            hover:bg-white
            backdrop-blur-md
            rounded-xl
            px-6
          "
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

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
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={{
          backgroundImage: [
            `conic-gradient(from 0deg,
              rgba(1,255,255,0.15) 0deg,
              rgba(1,255,255,0.15) 40deg,
              rgba(1,255,255,1) 60deg,
              rgba(1,255,255,0.4) 80deg,
              rgba(1,255,255,0.15) 100deg,
              rgba(1,255,255,0.15) 360deg
            )`,
            `conic-gradient(from 360deg,
              rgba(1,255,255,0.15) 0deg,
              rgba(1,255,255,0.15) 40deg,
              rgba(1,255,255,1) 60deg,
              rgba(1,255,255,0.4) 80deg,
              rgba(1,255,255,0.15) 100deg,
              rgba(1,255,255,0.15) 360deg
            )`,
          ],
        }}
        transition={{
          duration: 3.8,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* IMAGE */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black z-10">

        <Image
          src={image}
          alt="event"
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover rounded-2xl"
          
          /* ⭐ PERFORMANCE MAGIC */
          priority={isActive}
          placeholder="blur"
          blurDataURL={image}
        />

        {/* BUTTON */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/events/${slug}`);
          }}
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            px-7 py-2.5
            rounded-xl
            font-semibold
            text-[#01ffff]
            bg-[#061824]/85
            backdrop-blur-md
            border border-[#01ffff]/60
            shadow-[0_0_12px_rgba(1,255,255,0.35)]
            hover:bg-[#01ffff]
            hover:text-[#001a1a]
            hover:shadow-[0_0_18px_rgba(1,255,255,0.65)]
            transition-all duration-300
          "
        >
          Explore Now
        </Button>

      </div>
    </div>
  );
}

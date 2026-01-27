"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  slug: string;

  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
  tags: string[];
  description: string;
  isActive: boolean;
}

export default function EventCard({
  slug,
  title,

  date,
  location,
  attendees,
  image,
  tags,
  description,
  isActive,
}: Props) {
  const router = useRouter();

  return (
    <div
      className={`
        w-[380px] rounded-3xl overflow-hidden
        transition-all duration-500
        ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}
      `}
    >
      {/* IMAGE */}
      {/* <div className="relative h-82">
        <img src={image} className="w-full h-full object-cover" alt={title} /> */}

        {/* <div className="absolute bottom-3 left-3 flex gap-2">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              className="bg-black/40 text-white backdrop-blur"
            >
              {tag}
            </Badge>
          ))}
        </div> */}
      {/* </div> */}

      {/* CONTENT */}
      {/* <div className="bg-zinc-400 text-white p-6 space-y-3"> */}
        {/* <h3 className="text-2xl font-bold">{title}</h3>

        <div className="text-sm space-y-1 opacity-90">
          <div className="flex gap-2 items-center">
            <Calendar size={16} /> {date}
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={16} /> {location}
          </div>
          <div className="flex gap-2 items-center">
            <Users size={16} /> {attendees} attending
          </div>
        </div>

        <p className="text-sm opacity-90">{description}</p> */}

        {/* <Button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 VERY IMPORTANT
            router.push(`/events/${slug}`);
          }}
          className="w-full mt-3 bg-white/30 hover:bg-white text-black"
        >
          Register Now
        </Button> */}
        {/* IMAGE */}
        <div className="relative h-94">
          <img src={image} className="w-full h-full object-cover" alt={title} />

          {/* REGISTER BUTTON INSIDE IMAGE */}
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
      {/* </div> */}
    </div>
  );
}

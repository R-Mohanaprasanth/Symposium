"use client";
import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  attendees: number;
  isActive: boolean;
  onClick?: () => void;
}

const EventCard = ({
  title,
  date,
  location,
  description,
  image,
  tags,
  attendees,
  isActive,
  onClick,
}: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer
        transition-all duration-500 ease-out
        ${isActive 
          ? "scale-100 opacity-100 z-20" 
          : "scale-90 opacity-60 z-10 hover:opacity-80"
        }
      `}
      style={{
        background: "linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)), hsl(var(--gradient-end)))",
      }}
    >
      {/* Card content wrapper */}
      <div className="relative">
        {/* Event Image */}
       <div className="relative h-72 md:h-80 overflow-hidden z-10">



          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Tags overlay */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index}
                className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div className="p-5 space-y-4 relative z-30 bg-black/40 backdrop-blur-sm">

          <h3 className="text-xl font-bold text-white tracking-tight">
            {title}
          </h3>

          <div className="space-y-2 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white/60" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white/60" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/60" />
              <span>{attendees} attending</span>
            </div>
          </div>

         <p
  className={`text-sm leading-relaxed transition-opacity duration-300 ${
    isActive ? "text-white/85 opacity-100" : "opacity-0"
  }`}
>
            {description}
          </p>

          {/* Register Button */}
          {isActive && (
  <Button
    className="w-full bg-white/20 backdrop-blur-md text-white border border-white/30 
               hover:bg-white hover:text-primary transition-all duration-300
               font-semibold py-5 rounded-xl"
    onClick={(e) => {
      e.stopPropagation();
      console.log(`Registering for ${title}`);
    }}
  >
    Register Now
  </Button>
)}

        </div>
      </div>

      {/* Decorative glow effect */}
      <div 
        className={`
          absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl
          transition-opacity duration-500
          ${isActive ? "opacity-50" : "opacity-0"}
        `}
        style={{ background: "hsl(var(--gradient-end))" }}
      />
    </div>
  );
};

export default EventCard;
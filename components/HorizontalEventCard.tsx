"use client";

import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface HorizontalEventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  tags: string[];
}

const HorizontalEventCard = ({
  title,
  date,
  location,
  image,
  tags,
}: HorizontalEventCardProps) => {
  return (
    <div className="min-w-[280px] max-w-[280px] rounded-xl overflow-hidden bg-card border border-border hover:scale-[1.02] transition-transform">
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg leading-tight">
          {title}
        </h3>

        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalEventCard;

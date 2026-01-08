
"use client";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "../EventCard";

const events = [
  {
    id: 1,
    title: "DevCon 2026",
    date: "March 15-17, 2026",
    location: "San Francisco, CA",
    description: "The premier developer conference bringing together 5,000+ engineers to explore cutting-edge technologies, from AI/ML to cloud-native architectures.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    tags: ["Conference", "DevOps", "Cloud"],
    attendees: 4250,
  },
  {
    id: 2,
    title: "AI Hackathon 2026",
    date: "April 8-10, 2026",
    location: "Austin, TX",
    description: "48-hour intensive hackathon focused on building the next generation of AI-powered applications. $50K in prizes, mentorship from industry leaders.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
    tags: ["Hackathon", "AI/ML", "Startup"],
    attendees: 850,
  },
  {
    id: 3,
    title: "React Summit 2026",
    date: "May 22-24, 2026",
    location: "New York, NY",
    description: "Join the world's largest React conference featuring talks from core team members, workshops on React 19, and networking with the global React community.",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&auto=format&fit=crop",
    tags: ["React", "Frontend", "JavaScript"],
    attendees: 3200,
  },
];

const EventCardsSection2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + events.length) % events.length);
    const adjustedDiff = normalizedDiff > events.length / 2 
      ? normalizedDiff - events.length 
      : normalizedDiff;

    return {
      transform: `translateX(${adjustedDiff * 85}%) scale(${1 - Math.abs(adjustedDiff) * 0.1})`,
      zIndex: 10 - Math.abs(adjustedDiff),
    };
  };

  return (
    <section 
      className="min-h-screen py-20 px-4 overflow-hidden"
      style={{ background: "hsl(var(--events-bg))" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Upcoming Tech Events
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover and register for the most exciting tech conferences, hackathons, 
            and summits happening around the world.
          </p>
        </div>

        {/* Cards Container */}
        <div 
          className="relative flex items-start justify-center min-h-[650px] pt-10"


          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 md:left-8 z-30 bg-white/10 backdrop-blur-md border-white/20 
                       text-white hover:bg-white/20 hover:text-white rounded-full w-12 h-12"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 md:right-8 z-30 bg-white/10 backdrop-blur-md border-white/20 
                       text-white hover:bg-white/20 hover:text-white rounded-full w-12 h-12"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Event Cards */}
          <div className="relative w-full max-w-sm mx-auto">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={getCardStyle(index)}
              >
                <EventCard
                  {...event}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/30 hover:bg-white/50"
                }
              `}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCardsSection2;
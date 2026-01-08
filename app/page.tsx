import HeroSection from "@/components/HeroSection";
import BlogCursor from '@/components/BlogCursor';
import EventHeading from "@/components/EventHeading";
import EventCardsSection from "@/components/EventCardSection/EventCardSection1";

export default function Home() {
  return (
    <main className="p-8">
      <BlogCursor />
      <HeroSection />
       <div className="min-h-screen">

      <EventCardsSection />

      <EventCardsSection />
    </div>
    </main>
  );
}

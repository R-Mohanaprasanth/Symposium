import HeroSection from "@/components/HeroSection";
import BlogCursor from '@/components/BlogCursor';
import EventHeading from "@/components/EventHeading";
import EventCardsSection1 from "@/components/EventCardSection/EventCardSection1";
import EventCardsSection2 from "@/components/EventCardSection/EventCardSection2";

export default function Home() {
  return (
    <main className="p-8">
      <BlogCursor />
      <HeroSection />
       <div className="min-h-screen">

      <EventCardsSection1 />
      <EventCardsSection2 />
      {/* <EventCardsSection1 />
      <EventCardsSection2 />
      <EventCardsSection1 />
      <EventCardsSection2 />
      <EventCardsSection1 />
      <EventCardsSection2 /> */}
    </div>
    </main>
  );
}

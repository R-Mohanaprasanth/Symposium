import HeroSection from "@/components/HeroSection";
import BlogCursor from "@/components/BlogCursor";
import EventHeading from "@/components/EventHeading";
import EventCardsSection1 from "@/components/EventCardSection/EventCardSection1";
import EventCardsSection2 from "@/components/EventCardSection/EventCardSection2";
import EventCardSection3 from "@/components/EventCardSection/EventCardSection3";
import EventCardsSection3 from "@/components/EventCardSection/EventCardSection3";

export default function Home() {
  return (
    <main className="p-8">
      <BlogCursor />
      <HeroSection />
      <div className="min-h-screen">
        {/* <HorizontalEventCard
          title="Community Meetup"
          date="2026-01-20"
          location="Online"
          image="/images/meetup.jpg"
          tags={["tech", "community"]}
        /> */}
        
        <EventCardsSection1 />
        <EventCardsSection2 />
        <EventCardsSection3 />
        <EventCardsSection2 />
        <EventCardsSection3 />
        <EventCardsSection2 />
        <EventCardsSection3 />
        
      </div>
    </main>
  );
}

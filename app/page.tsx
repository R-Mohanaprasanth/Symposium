import HeroSection from "@/components/HeroSection";
import BlogCursor from "@/components/BlogCursor";
import Footer from "@/components/Footer";
import AboutSection from "./home/AboutSection";
import GuidelinesSection from "./home/GuidelinesSection";
import EventsCTASection from "./home/EventsCTASection";
import SponsorsSection from "./home/SponsorsSection";
import HeroSection2 from "@/components/HeroSection2";

export default function Home() {
  return (
    <main>

      <HeroSection />
      <AboutSection />
      <EventsCTASection />
      <GuidelinesSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}

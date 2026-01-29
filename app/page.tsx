import HeroSection from "@/components/HeroSection";
import BlogCursor from "@/components/BlogCursor";
import Footer from "@/components/Footer";
import AboutSection from "./home/AboutSection";
import GuidelinesSection from "./home/GuidelinesSection";
import EventsCTASection from "./home/EventsCTASection";
import SponsorsSection from "./home/SponsorsSection";

export default function Home() {
  return (
    <main >

      {/* BACKGROUND IMAGE */}
      <div
        className="
          fixed inset-0
          bg-[url('/images/bg-1.png')]
          bg-cover
          bg-center
          bg-no-repeat
          -z-20
        "
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/65 -z-10" />

      {/* CONTENT */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsCTASection />
        <GuidelinesSection />
        <SponsorsSection />
        <Footer />
      </div>

    </main>
  );
}

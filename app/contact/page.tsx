import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

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
      
      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactMap />
        <Footer />
      </div>

    </main>
  );
}

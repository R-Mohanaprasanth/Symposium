import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="bg-[#0B1C2D] min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}

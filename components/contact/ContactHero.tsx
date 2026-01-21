import FadeIn from "@/components/common/FadeIn";

export default function ContactHero() {
  return (
    <FadeIn>
      <section className="py-28 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
          Have questions about Neuronex Symposium events, registrations, or
          participation? We’re here to help you.
        </p>
      </section>
    </FadeIn>
  );
}

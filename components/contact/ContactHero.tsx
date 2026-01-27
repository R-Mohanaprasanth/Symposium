import FadeIn from "@/components/common/FadeIn";

export default function ContactHero() {
  return (
    <FadeIn>
      <section className="relative py-32 text-center px-6 overflow-hidden">

        {/* CYAN LIGHT ACCENT */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[650px]
            h-[650px]
            bg-[#01ffff]/12
            blur-[170px]
            rounded-full
            pointer-events-none
          "
        />

        {/* CONTENT */}
        <div className="relative max-w-3xl mx-auto">

          {/* BADGE */}
          <span
            className="
              inline-block
              mb-6
              px-6 py-2
              text-sm
              font-semibold
              tracking-widest
              text-white
              border border-[#01ffff]
              bg-[#01ffff]/10
              rounded-md
            "
          >
            CONTACT
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
            Contact{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#00bebe]
                via-[#01ffff]
                to-[#00bebe]
                bg-clip-text
                text-transparent
              "
            >
              Us
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about Neuronex Symposium events, registrations, or
            participation? We’re here to guide you every step of the way.
          </p>

        </div>
      </section>
    </FadeIn>
  );
}

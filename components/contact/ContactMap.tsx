import FadeIn from "@/components/common/FadeIn";

export default function ContactMap() {
  return (
    <FadeIn>
      <section className="relative px-6 pb-0 flex justify-center overflow-hidden">

        {/* CYAN BACKLIGHT */}
        <div
          className="
            absolute
            -bottom-40
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            bg-[#01ffff]/10
            blur-[180px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            relative
            max-w-6xl
            w-full
            rounded-3xl
            p-10
            border border-[#01ffff]/30
            bg-[#061824]/75
            backdrop-blur-xl
          "
        >
          {/* TITLE */}
          <h2 className="text-2xl font-semibold text-[#01ffff] mb-8 text-center tracking-wide">
            Event Location
          </h2>

          {/* MAP */}
          <div className="overflow-hidden rounded-2xl border border-[#01ffff]/25">
            <iframe
              src="https://www.google.com/maps?q=Velammal+Institute+of+Technology,+Chennai&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

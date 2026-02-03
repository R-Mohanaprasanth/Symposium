import FadeIn from "@/components/common/FadeIn";

export default function ContactMap() {
  return (
    <FadeIn>
      <section
        className="
          relative
          px-12 sm:px-6
          pb-12 sm:pb-20
          flex justify-center
          overflow-hidden
        "
      >
        {/* CYAN BACKLIGHT */}
        <div
          className="
            absolute
            -bottom-32 sm:-bottom-40
            left-1/2
            -translate-x-1/2
            w-[420px] sm:w-[550px] md:w-[700px]
            h-[420px] sm:h-[550px] md:h-[700px]
            bg-[#01ffff]/10
            blur-[120px] sm:blur-[150px] md:blur-[180px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            relative
            max-w-6xl
            w-full
            rounded-2xl sm:rounded-3xl
            p-6 sm:p-8 md:p-10
            border-2 border-[#01ffff]/40
            bg-[#061824]/70
            backdrop-blur-xl
            shadow-[0_0_18px_rgba(1,255,255,0.25)]
          "
        >
          {/* TITLE */}
          <h2
            className="
              text-xl sm:text-2xl
              font-semibold
              mb-6 sm:mb-8
              text-center
              tracking-wide
              bg-gradient-to-r
              from-[#01ffff]
              via-[#7ffdfd]
              to-white
              bg-clip-text
              text-transparent
            "
          >
            Event Location
          </h2>

          {/* MAP */}
          <div
            className="
              overflow-hidden
              rounded-xl sm:rounded-2xl
              border border-[#01ffff]/25
            "
          >
            <iframe
              src="https://www.google.com/maps?q=Velammal+Institute+of+Technology,+Chennai&output=embed"
              className="
                w-full
                h-[260px] sm:h-[340px] md:h-[420px]
              "
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

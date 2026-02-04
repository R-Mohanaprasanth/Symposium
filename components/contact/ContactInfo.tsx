import FadeIn from "@/components/common/FadeIn";

export default function ContactInfo() {
  return (
    <section
      className="
        relative
        px-12 sm:px-6
        pb-20 sm:pb-24 md:pb-28
        flex justify-center
        overflow-hidden
      "
    >
      {/* SOFT CYAN BACKLIGHT */}
      <div
        className="
          absolute
          -bottom-32 sm:-bottom-40
          left-1/2
          -translate-x-1/2
          w-[420px] sm:w-[560px] md:w-[700px]
          h-[420px] sm:h-[560px] md:h-[700px]
          bg-[#01ffff]/10
          blur-[120px] sm:blur-[150px] md:blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6 sm:gap-8
          max-w-6xl
          w-full
        "
      >
        {/* EMAIL */}
        <FadeIn delay={0.1}>
          <div
            className="
              rounded-2xl
              p-6 sm:p-8
              border border-[#01ffff]/30
              bg-[#061824]/70
              backdrop-blur-xl
              text-center
              transition
              hover:border-[#01ffff]
            "
          >
            <h3 className="text-[#01ffff] text-base sm:text-lg font-semibold mb-2 tracking-wide">
              Email
            </h3>
            <div className="mt-3">
<ol className="space-y-2 text-sm sm:text-base text-zinc-200">
  <li className="flex items-center gap-3">
    <span className="min-w-[1.25rem] text-cyan-400 font-semibold">
      1.
    </span>
    <span className="tracking-wide">
      umabrindha2005@gmail.com
    </span>
  </li>
  <li className="flex items-center gap-3">
    <span className="min-w-[1.25rem] text-cyan-400 font-semibold">
      2.
    </span>
    <span className="tracking-wide">
      dineshkumar080426@gmail.com
    </span>
  </li>
</ol>

</div>

          </div>
        </FadeIn>

        {/* PHONE */}
        <FadeIn delay={0.2}>
          <div
            className="
              rounded-2xl
              p-6 sm:p-8
              border border-[#01ffff]/30
              bg-[#061824]/70
              backdrop-blur-xl
              text-center
              transition
              hover:border-[#01ffff]
            "
          >
            <h3 className="text-[#01ffff] text-base sm:text-lg font-semibold mb-2 tracking-wide">
              Phone
            </h3>
            <ol className="space-y-2 text-sm sm:text-base text-zinc-200">
  <li className="flex items-center gap-3">
    <span className="min-w-[1.25rem] text-cyan-400 font-semibold">
      1.
    </span>
    <span className="tracking-wide">
      +91&nbsp;84385&nbsp;00767
    </span>
  </li>
  <li className="flex items-center gap-3">
    <span className="min-w-[1.25rem] text-cyan-400 font-semibold">
      2.
    </span>
    <span className="tracking-wide">
      +91&nbsp;63742&nbsp;00660
    </span>
  </li>
</ol>

          </div>
        </FadeIn>

        {/* VENUE */}
        <FadeIn delay={0.3}>
          <div
            className="
              rounded-2xl
              p-6 sm:p-8
              border border-[#01ffff]/30
              bg-[#061824]/70
              backdrop-blur-xl
              text-center
              transition
              hover:border-[#01ffff]
            "
          >
            <h3 className="text-[#01ffff] text-base sm:text-lg font-semibold mb-2 tracking-wide">
              Venue
            </h3>
            <p className="text-sm sm:text-base text-zinc-300">
              Velammal Institute of Technology, Chennai
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "@/components/common/FadeIn";

export default function ContactInfo() {
  return (
    <section className="relative px-6 pb-28 flex justify-center overflow-hidden">

      {/* SOFT CYAN BACKLIGHT */}
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

      <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl w-full">

        {/* EMAIL */}
        <FadeIn delay={0.1}>
          <div
            className="
              rounded-2xl
              p-8
              border border-[#01ffff]/30
              bg-[#061824]/70
              backdrop-blur-xl
              text-center
              transition
              hover:border-[#01ffff]
            "
          >
            <h3 className="text-[#01ffff] text-lg font-semibold mb-2 tracking-wide">
              Email
            </h3>
            <p className="text-zinc-300">
              neuronexfest@gmail.com
            </p>
          </div>
        </FadeIn>

        {/* PHONE */}
        <FadeIn delay={0.2}>
          <div
            className="
              rounded-2xl
              p-8
              border border-[#01ffff]/30
              bg-[#061824]/70
              backdrop-blur-xl
              text-center
              transition
              hover:border-[#01ffff]
            "
          >
            <h3 className="text-[#01ffff] text-lg font-semibold mb-2 tracking-wide">
              Phone
            </h3>
            <p className="text-zinc-300">
              +91 98765 43210
            </p>
          </div>
        </FadeIn>

        {/* VENUE */}
        <FadeIn delay={0.3}>
          <div
            className="
              rounded-2xl
              p-8
              border border-[#01ffff]/30
              bg-[#061824]/70
              backdrop-blur-xl
              text-center
              transition
              hover:border-[#01ffff]
            "
          >
            <h3 className="text-[#01ffff] text-lg font-semibold mb-2 tracking-wide">
              Venue
            </h3>
            <p className="text-zinc-300">
              Velammal Institute of Technology, Chennai
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

import FadeIn from "@/components/common/FadeIn";

export default function ContactForm() {
  return (
    <FadeIn>
      <section className="px-6 pb-32 flex justify-center relative overflow-hidden">

        {/* CYAN BACKGROUND ACCENT */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[600px]
            bg-[#01ffff]/10
            blur-[160px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            relative
            max-w-4xl
            w-full
            rounded-3xl
            p-10
            border border-[#01ffff]/30
            bg-[#061824]/80
            backdrop-blur-xl
          "
        >
          {/* TITLE */}
          <h2
  className="
    text-2xl
    font-semibold
    mb-8
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
  Send Us a Message
</h2>


          <form className="grid md:grid-cols-2 gap-6">

            {/* INPUT */}
            <input
              className="
                bg-transparent
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:border-[#01ffff]
                transition
              "
              placeholder="Your Name"
            />

            <input
              className="
                bg-transparent
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:border-[#01ffff]
                transition
              "
              placeholder="Your Email"
            />

            <input
              className="
                md:col-span-2
                bg-transparent
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:border-[#01ffff]
                transition
              "
              placeholder="Subject"
            />

            <textarea
              rows={5}
              className="
                md:col-span-2
                bg-transparent
                border border-white/10
                rounded-lg
                px-4 py-3
                text-white
                placeholder:text-white/40
                resize-none
                focus:outline-none
                focus:border-[#01ffff]
                transition
              "
              placeholder="Your Message"
            />

            {/* BUTTON */}
            <button
              className="
                md:col-span-2
                mt-6
                py-3
                rounded-lg
                font-semibold
                text-black
                bg-[#01ffff]
                hover:brightness-110
                transition
              "
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </FadeIn>
  );
}

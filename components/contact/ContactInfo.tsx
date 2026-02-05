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

      <div className="relative max-w-6xl w-full space-y-6 sm:space-y-8">
        {/* ⭐ COORDINATORS BOX */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6 sm:gap-8
          "
        >
          {/* EMAIL */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl p-6 sm:p-8 border border-[#01ffff]/30 bg-[#061824]/70 backdrop-blur-xl text-center transition hover:border-[#01ffff]">
              <h3 className="text-[#01ffff] text-base sm:text-lg font-semibold mb-2 tracking-wide">
                STAFF COORDINATOR
              </h3>
              <ol className="space-y-3 text-sm sm:text-base text-zinc-200">
  {/* COORDINATOR 1 */}
  <li className="flex gap-3 justify-start">
    <span className="text-cyan-400 font-semibold mt-3">1.</span>

    <div className="flex flex-col mt-3">
      
      {/* NAME HOVER */}
      <span className="transition-colors hover:text-[#01ffff] cursor-pointer mb-2">
        MR. K. DINESHKUMAR
      </span>

      {/* NUMBER HOVER */}
      <div className="group cursor-pointer">
        <p className="text-sm sm:text-base text-zinc-300 mt-2 transition-colors group-hover:text-[#01ffff]">
          PH <span className="font-bold">+91 97108 45174</span>
        </p>
      </div>

    </div>
  </li>

  {/* COORDINATOR 2 */}
  <li className="flex gap-3 justify-start">
    <span className="text-cyan-400 font-semibold mt-2">2.</span>

    <div className="flex flex-col mt-2">
      
      {/* NAME HOVER */}
      <span className="transition-colors hover:text-[#01ffff] cursor-pointer mb-2">
        MRS. J. KIRUPAVATHY
      </span>

      {/* NUMBER HOVER */}
      <div className="group cursor-pointer">
        <p className="text-sm sm:text-base text-zinc-300 mt-2 transition-colors group-hover:text-[#01ffff]">
          PH <span className="font-bold">+91 99529 25525</span>
        </p>
      </div>

    </div>
  </li>
</ol>

            </div>
          </FadeIn>

          {/* PHONE */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl p-6 sm:p-8 border border-[#01ffff]/30 bg-[#061824]/70 backdrop-blur-xl text-center transition hover:border-[#01ffff]">
              <h3 className="text-[#01ffff] text-base sm:text-lg font-semibold mb-2 tracking-wide">
                PRESIDENT
              </h3>

              <ol className="space-y-2 text-sm sm:text-base text-zinc-200">
  <li className="flex gap-3 justify-left">
    <span className="text-cyan-400 font-semibold mt-4">1.</span>

    <div className="flex flex-col mt-4">
      
      {/* NAME HOVER */}
      <span className="transition-colors hover:text-[#01ffff] cursor-pointer">
        MR. K.G. THANUMJESH VARMA
      </span>

      {/* NUMBER HOVER */}
      <div className="group cursor-pointer">
        <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-18 transition-colors group-hover:text-[#01ffff]">
          PH <span className="font-bold">+91 80721 15719</span>
        </p>
      </div>

    </div>
  </li>

  <li className="flex gap-3 justify-left">
    <span className="text-cyan-400 font-semibold mt-2">2.</span>

    <div className="flex flex-col mt-2">

      {/* NAME HOVER */}
      <span className="mr-10 transition-colors hover:text-[#01ffff] cursor-pointer">
        MRS. M. MAHESHWARI
      </span>

      {/* NUMBER HOVER */}
      <div className="group cursor-pointer">
        <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-13 transition-colors group-hover:text-[#01ffff]">
          PH <span className="font-bold">+91 83103 39488</span>
        </p>
      </div>

    </div>
  </li>
</ol>

            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl p-6 sm:p-8 border border-[#01ffff]/30 bg-[#061824]/70 backdrop-blur-xl text-center transition hover:border-[#01ffff]">
              <h3 className="text-[#01ffff] text-base sm:text-lg font-semibold mb-2 tracking-wide">
                VICE-PRESIDENT
              </h3>

              <ol className="space-y-2 text-sm sm:text-base text-zinc-200">
  <li className="flex gap-3 justify-left">
    <span className="text-cyan-400 font-semibold mt-4">1.</span>

    <div className="flex flex-col mt-4">
      {/* NAME HOVER */}
      <span className="transition-colors hover:text-[#01ffff] cursor-pointer">
        MR. N. DINESH KUMAR
      </span>

      {/* NUMBER HOVER */}
      <div className="group cursor-pointer">
        <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-4 transition-colors group-hover:text-[#01ffff]">
          PH <span className="font-bold">+91 63742 00660</span>
        </p>
      </div>
    </div>
  </li>

  <li className="flex gap-3 justify-left">
    <span className="text-cyan-400 font-semibold mt-1.5">2.</span>

    <div className="flex flex-col mt-2">
      {/* NAME HOVER */}
      <span className="transition-colors hover:text-[#01ffff] cursor-pointer">
        MS. C. UMA MAHESHWARI
      </span>

      {/* NUMBER HOVER */}
      <div className="group cursor-pointer">
        <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-10 transition-colors group-hover:text-[#01ffff]">
          PH <span className="font-bold">+91 84385 00767</span>
        </p>
      </div>
    </div>
  </li>
</ol>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

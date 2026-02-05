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

              <ol className="space-y-2 text-sm sm:text-base text-zinc-200">
                <li className="flex gap-3 justify-left">
                  <span className="text-cyan-400 font-semibold mt-4">1.</span>

                  <div className="flex flex-col mt-4">
                    <span>MR. K. DINESHKUMAR</span>
                    <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-2">
                      PH +91 97108 45174
                    </p>
                  </div>
                </li>

                <li className="flex gap-3 justify-left">
                  <span className="text-cyan-400 font-semibold mt-2">2.</span>

                  <div className="flex flex-col mt-2 ">
                    <span className="mr-7">MRS. J. KIRUPATHY</span>
                    <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-3">
                      PH +91 99529 25525
                    </p>
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
                    <span>MR. K.G. THANUMJESH VARMA</span>
                    <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-18">
                      PH +91 80721 15719
                    </p>
                  </div>
                </li>

                <li className="flex gap-3 justify-left">
                  <span className="text-cyan-400 font-semibold mt-2">2.</span>

                  <div className="flex flex-col mt-2">
                    <span className="mr-10">MRS. M. MAHESHWARI</span>
                    <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-13">
                      PH +91 83103 39488
                    </p>
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
                    <span>MR. N. DINESH KUMAR</span>
                    <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-4">
                      PH +91 63742 00660
                    </p>
                  </div>
                </li>

                <li className="flex gap-3 justify-left">
                  <span className="text-cyan-400 font-semibold mt-1.5">2.</span>

                  <div className="flex flex-col mt-2">
                    <span>MS. C. UMA MAHESHWARI</span>
                    <p className="text-sm sm:text-base text-zinc-300 mt-4 mr-10">
                      PH +91 84385 00767
                    </p>
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

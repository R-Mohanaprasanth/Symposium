import FadeIn from "@/components/common/FadeIn";

export default function ContactInfo() {
  return (
    <section className="px-6 pb-24 flex justify-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        <FadeIn delay={0.1}>
          <div className="bg-[#12263A] rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">
              Email
            </h3>
            <p className="text-slate-300">
              neuronexfest@gmail.com
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#12263A] rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">
              Phone
            </h3>
            <p className="text-slate-300">
              +91 98765 43210
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-[#12263A] rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">
              Venue
            </h3>
            <p className="text-slate-300">
              Velammal Institute of Technology, Chennai
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

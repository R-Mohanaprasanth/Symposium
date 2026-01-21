import FadeIn from "@/components/common/FadeIn";

export default function ContactMap() {
  return (
    <FadeIn>
      <section className="px-6 pb-32 flex justify-center">
        <div className="max-w-6xl w-full bg-[#12263A] rounded-3xl p-10 border border-white/10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
            Event Location
          </h2>

          <div className="overflow-hidden rounded-2xl border border-white/10">
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

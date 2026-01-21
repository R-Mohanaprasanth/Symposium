import FadeIn from "@/components/common/FadeIn";

export default function ContactForm() {
  return (
    <FadeIn>
      <section className="px-6 pb-32 flex justify-center">
        <div className="max-w-4xl w-full bg-[#12263A] rounded-3xl p-10 border border-white/10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">
            Send Us a Message
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input className="bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white" placeholder="Your Name" />
            <input className="bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white" placeholder="Your Email" />
            <input className="md:col-span-2 bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white" placeholder="Subject" />
            <textarea rows={5} className="md:col-span-2 bg-[#0B1C2D] border border-white/10 rounded-lg px-4 py-3 text-white resize-none" placeholder="Your Message" />

            <button className="md:col-span-2 mt-4 bg-yellow-400 text-[#0B1C2D] font-semibold py-3 rounded-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </FadeIn>
  );
}

"use client";

import FadeIn from "@/components/common/FadeIn";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_zrvqxdk",     // 🔥 Replace
        "template_cnu6tj6",    // 🔥 Replace
        form,
        "ATJ8T0xX5WMHgRu-y"      // 🔥 Replace
      );

      form.reset();
      setSent(true);
      setLoading(false);

      setTimeout(() => setSent(false), 4000);

    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <FadeIn>
      <section className="px-12 sm:px-6 pb-20 sm:pb-24 md:pb-32 flex justify-center relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute -top-32 sm:-top-40 left-1/2 -translate-x-1/2 w-[420px] sm:w-[520px] md:w-[600px] h-[420px] sm:h-[520px] md:h-[600px] bg-[#01ffff]/10 blur-[120px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl w-full rounded-3xl p-6 sm:p-8 md:p-10 border border-[#01ffff]/30 bg-[#061824]/80 backdrop-blur-xl">

          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center tracking-wide bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white bg-clip-text text-transparent">
            Send Us a Message
          </h2>

          {/* SUCCESS MESSAGE */}
          {sent && (
            <p className="text-green-400 text-center font-semibold mb-4">
              ✅ Message Sent Successfully
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >

            {/* NAME */}
            <input
              name="name"
              required
              placeholder="Your Name"
              className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#01ffff] transition"
            />

            {/* EMAIL */}
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#01ffff] transition"
            />

            {/* SUBJECT */}
            <input
              name="subject"
              required
              placeholder="Subject"
              className="md:col-span-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#01ffff] transition"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="md:col-span-2 bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder:text-white/40 resize-none focus:outline-none focus:border-[#01ffff] transition"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 mt-4 sm:mt-6 py-3 rounded-lg font-semibold text-sm sm:text-base text-black bg-[#01ffff] hover:brightness-110 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </section>
    </FadeIn>
  );
}

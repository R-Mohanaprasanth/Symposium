"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Users,
  TrendingUp,
  Handshake,
  ArrowRight,
} from "lucide-react";
import TechFrame from "@/components/common/TechFrame";

const benefits = [
  {
    icon: Users,
    title: "Student Reach",
    text: "Connect with thousands of talented engineering students across institutions.",
  },
  {
    icon: TrendingUp,
    title: "Brand Visibility",
    text: "Get your brand showcased across events, banners, and digital promotions.",
  },
  {
    icon: Building2,
    title: "Industry Presence",
    text: "Position your organization as a technology leader among future professionals.",
  },
  {
    icon: Handshake,
    title: "Meaningful Collaboration",
    text: "Partner with innovation-driven events that encourage real engagement.",
  },
];

const SponsorsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="
              inline-block
              px-6 py-2
              text-white text-sm font-semibold tracking-widest
              border border-[#01ffff]
              bg-[#01ffff]/12
              rounded-md
            "
          >
            Sponsors & Collaborations
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold font-display leading-tight">
            <span className="text-white">Partner With </span>
            <span
              className="
                bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white
                bg-clip-text
                text-transparent
              "
            >
              NEURONEX 2K26
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-300 text-lg leading-relaxed">
            Join us in shaping the future by supporting innovation, creativity,
            and technical excellence. Collaborate with Neuronex to amplify your
            brand and connect with the next generation of tech leaders.
          </p>
        </motion.div>

        {/* VALUE FLOW */}
        <div className="relative max-w-4xl mx-auto mb-28">

          {/* CONNECTOR */}
          {/* <div className="absolute left-6 top-0 h-full w-px bg-[#01ffff]/40" /> */}
{/* <TechFrame> */}
 <div className="relative max-w-4xl mx-auto">

  {/* VERTICAL LINE */}
  <div
    className="
      absolute
      left-6
      top-6
      bottom-6
      w-px
      bg-[#01ffff]/50
    "
  />

  <div className="space-y-24">
    {benefits.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={index}
          className="relative flex items-start gap-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}

        >
          
          {/* ICON */}
          <div
            className="
              relative z-10
              w-12 h-12
              rounded-full
              border border-[#01ffff]
              bg-[#020b14]
              flex items-center justify-center
            "
          >
            <Icon className="w-6 h-6 text-[#01ffff]" />
          </div>

          {/* TEXT */}
          <div className="pt-1">
            <h3 className="text-xl font-semibold mb-1 text-white">
              {item.title}
            </h3>
            <p className="text-zinc-300 leading-relaxed max-w-xl">
              {item.text}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
{/* </TechFrame> */}








        </div>

        {/* CTA PANEL */}
        <motion.div
          className="
            relative
            rounded-3xl
            border border-[#01ffff]
            bg-transparent
            backdrop-blur-md
            p-12 md:p-16
            flex flex-col md:flex-row
            items-center justify-between
            gap-10
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
              Let’s Build Something Impactful Together
            </h3>

            <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
              Whether you’re a startup, enterprise, or technology brand —
              Neuronex offers a platform to engage, inspire, and recruit future
              innovators.
            </p>
          </div>

          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="
                flex items-center gap-3
                px-10 py-6
                rounded-full
                bg-gradient-to-r
                from-[#01ffff]
                via-white
                to-[#01ffff]
                text-black
                font-semibold text-lg
                cursor-pointer
                transition
              "
            >
              Become a Sponsor
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SponsorsSection;

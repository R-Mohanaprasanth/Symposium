"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description:
      "Hands-on challenges and real-world problem solving across emerging technologies.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description:
      "Exposure to AI, Web3, cloud computing, and industry-grade workflows.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Connect with innovators, creators, mentors, and tech leaders.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-12 p-35 overflow-hidden mt-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            About the Event
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display text-foreground leading-tight">
            Experience the Future at{" "}
            <span className="gradient-text">NEURONEX 2K26</span>
          </h2>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Neuronex 2K26 is an annual technical symposium designed to bring
            together innovation, creativity, and collaboration. It creates a
            platform where students explore real-world technologies, compete,
            learn, and grow beyond classrooms.
          </p>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Through workshops, competitions, and interactive sessions,
            participants gain exposure to modern engineering practices and
            future-ready skills.
          </p>
        </motion.div>

        {/* RIGHT FEATURES LIST */}
        <div className="space-y-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* BACKGROUND ACCENT */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
};

export default AboutSection;

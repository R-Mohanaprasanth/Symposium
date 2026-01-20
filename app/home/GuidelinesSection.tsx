"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  UserCheck,
  AlertTriangle,
  BadgeInfo,
  Laptop,
} from "lucide-react";

const guidelines = [
  {
    icon: UserCheck,
    title: "Eligibility",
    text: "Open to all undergraduate and postgraduate students from recognized institutions.",
  },
  {
    icon: Clock,
    title: "Reporting Time",
    text: "Participants must report at least 30 minutes before their scheduled event time.",
  },
  {
    icon: Laptop,
    title: "Bring Your ID",
    text: "College ID card is mandatory for entry and participation in all events.",
  },
  {
    icon: BadgeInfo,
    title: "Registration",
    text: "Prior online registration is required. On-spot registrations are subject to availability.",
  },
  {
    icon: AlertTriangle,
    title: "Code of Conduct",
    text: "Participants must maintain discipline and follow the instructions of event coordinators.",
  },
  {
    icon: CheckCircle,
    title: "Certificates",
    text: "Participation certificates will be provided to all registered attendees.",
  },
];

const GuidelinesSection = () => {
  return (
    <section className="relative py-28 p-35 overflow-hidden -mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Important Information
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display text-foreground">
            Event <span className="gradient-text">Guidelines</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg">
            Please read the following guidelines carefully to ensure a smooth,
            fair, and enjoyable experience during Neuronex 2K26.
          </p>
        </motion.div>

        {/* GUIDELINES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {guidelines.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
};

export default GuidelinesSection;

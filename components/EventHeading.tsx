"use client";

import { motion } from "framer-motion";
import InteractiveText from "@/components/InteractiveText";

interface EventHeadingProps {
  prefix?: string;
  title: string;
}

const EventHeading = ({
  prefix = "Annual Symposium",
  title,
}: EventHeadingProps) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="flex items-baseline gap-3 font-display font-bold tracking-tight">
        {/* Prefix */}
        <span className="text-xl md:text-2xl lg:text-3xl text-foreground">
          {prefix}
        </span>

        {/* Event Name */}
        <InteractiveText
          text={title}
          className="text-2xl md:text-3xl lg:text-4xl gradient-text text-glow"
        />
      </h2>
    </motion.div>
  );
};

export default EventHeading;

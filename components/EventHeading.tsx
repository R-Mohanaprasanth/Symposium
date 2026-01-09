"use client";

import { motion } from "framer-motion";
import InteractiveText from "@/components/InteractiveText";
import { cn } from "@/lib/utils";

interface EventHeadingProps {
  prefix?: string;
  title: string;
  align?: "left" | "center" | "right"; // 👈 NEW
}

const EventHeading = ({
  prefix = "Annual Symposium",
  title,
  align = "left",
}: EventHeadingProps) => {
  return (
    <motion.div
      className={cn(
        "mb-12 w-full flex",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end"
      )}
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

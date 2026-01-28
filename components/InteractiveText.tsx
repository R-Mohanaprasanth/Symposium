"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface InteractiveTextProps {
  text: string;
  className?: string;
}

const creativeFonts = [
  "Fredoka One",
  "Righteous",
  "Bungee",
  "Kalam",
  "Bangers",
  "Orbitron",
  "Permanent Marker",
  "Russo One",
  "Anton",
  "Black Ops One",
  "Luckiest Guy",
  "Rubik Glitch",
  "Titan One",
];

const vibrantColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFE66D",
  "#FF8C42",
  "#9B5DE5",
  "#00F5D4",
  "#F15BB5",
  "#00BBF9",
];

const InteractiveText: React.FC<InteractiveTextProps> = ({
  text,
  className = "",
}) => {
  const [letterStyles, setLetterStyles] = useState<{
    [key: number]: { font: string; color?: string };
  }>({});

  // AUTO ANIMATION
  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * text.length);
      if (text[i] === " ") return;

      setLetterStyles((prev) => ({
        ...prev,
        [i]: {
          font:
            creativeFonts[
              Math.floor(Math.random() * creativeFonts.length)
            ],
          color:
            vibrantColors[
              Math.floor(Math.random() * vibrantColors.length)
            ],
        },
      }));
    }, 450);

    return () => clearInterval(interval);
  }, [text]);

  const handleHover = (index: number) => {
    setLetterStyles((prev) => ({
      ...prev,
      [index]: {
        font:
          creativeFonts[
            Math.floor(Math.random() * creativeFonts.length)
          ],
        color:
          vibrantColors[
            Math.floor(Math.random() * vibrantColors.length)
          ],
      },
    }));
  };

  return (
    <span className={className}>
      {text.split("").map((char, index) => {
        const style = letterStyles[index];

        return (
          <motion.span
            key={index}
            className="inline-block cursor-pointer"
            style={{
              fontFamily: style?.font || "Oswald",
              fontWeight: style ? 700 : undefined,

              // ✅ apply color ONLY when animated
              ...(style?.color ? { color: style.color } : {}),
            }}
            onMouseEnter={() => handleHover(index)}
            whileHover={{
              scale: 1.15,
              y: -3,
              transition: {
                type: "spring",
                stiffness: 420,
                damping: 14,
              },
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
};

export default InteractiveText;

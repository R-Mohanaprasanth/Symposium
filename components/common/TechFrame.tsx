"use client";

import React from "react";

interface TechFrameProps {
  children: React.ReactNode;
  className?: string;
}

const TechFrame: React.FC<TechFrameProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full mt-2 ${className}`}>
      {/* FRAME */}
      <div className="relative p-8 md:p-12 border border-cyan-400/40 rounded-xl">

        {/* CORNER GLOWS */}
        <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
        <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
        <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_40px_rgba(0,255,255,0.15)]" />

        {/* CONTENT */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TechFrame;

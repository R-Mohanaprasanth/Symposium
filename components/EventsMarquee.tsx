// "use client";

// import { motion } from "framer-motion";

// interface EventsMarqueeProps {
//   events: string[];
// }

// const EventsMarquee = ({ events }: EventsMarqueeProps) => {
//   return (
//     <section className="py-12 overflow-hidden">
//       <div className="relative">
//         {/* Gradient fade edges */}
//         <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

//         <motion.div
//           className="flex items-center gap-10 whitespace-nowrap"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             duration: 10,          // 🔥 FAST
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "loop",    // ✅ IMPORTANT
//           }}
//         >
//           {/* Duplicate twice for seamless flow */}
//           {[...events, ...events].map((event, index) => (
//             <div key={index} className="flex items-center gap-10">
//               <span
//                 className="
//                   text-lg md:text-xl lg:text-2xl
//                   font-display font-semibold uppercase tracking-wide
//                   text-foreground/70
//                   hover:text-foreground
//                   transition-colors
//                 "
//               >
//                 {event}
//               </span>

//               <span className="text-foreground/30 text-lg">✦</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default EventsMarquee;

"use client";

import { motion } from "framer-motion";

interface EventsMarqueeProps {
  events: string[];
}

const EventsMarquee = ({ events }: EventsMarqueeProps) => {
  return (
    <section className="relative py-10 overflow-hidden">

      {/* TOP & BOTTOM FADE LINES */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#01ffff]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#01ffff]/20 to-transparent" />

      <div className="relative">

        {/* EDGE FADES */}
        {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-background to-transparent z-10" /> */}

        {/* MARQUEE */}
        <motion.div
          className="flex items-center gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 14,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...events, ...events].map((event, index) => (
            <div key={index} className="flex items-center gap-14">

              {/* EVENT TEXT */}
              <span
                className="
                  text-lg md:text-xl lg:text-2xl
                  font-display font-semibold uppercase tracking-widest
                  text-zinc-300
                  hover:text-[#01ffff]
                  transition-colors
                "
              >
                {event}
              </span>

              {/* SEPARATOR */}
              <span className="text-[#01ffff]/50 text-xl select-none">
                ◆
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsMarquee;

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

// const EventsCTASection = () => {
//   return (
//     <section className="relative py-24 p-35 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         <motion.div
//           className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* LEFT CONTENT */}
//           <div className="max-w-xl">
//             <div className="flex items-center gap-2 text-primary mb-3">
//               <Sparkles className="w-5 h-5" />
//               <span className="text-sm uppercase tracking-widest font-medium">
//                 Don’t Miss Out
//               </span>
//             </div>

//             <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
//               Discover Exciting Events at{" "}
//               <span className="gradient-text">Neuronex 2K26</span>
//             </h3>

//             <p className="mt-4 text-muted-foreground text-lg">
//               From hackathons and workshops to tech talks and competitions —
//               explore events crafted to challenge, inspire, and elevate you.
//             </p>
//           </div>

//           {/* RIGHT CTA */}
//           <Link href="/events">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg shadow-lg cursor-pointer"
//             >
//               <CalendarDays className="w-5 h-5" />
//               View All Events
//               <ArrowRight className="w-5 h-5" />
//             </motion.div>
//           </Link>

//           {/* GLOW */}
//           {/* <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full pointer-events-none" /> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default EventsCTASection;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

const EventsCTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

       <motion.div
  className="
    relative
    rounded-3xl
    border border-[#01ffff]
    bg-transparent

    p-10 md:p-14
    flex flex-col md:flex-row
    items-center justify-between
    gap-10
  "
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* TAG */}
            <div className="flex items-center gap-2 text-[#01ffff] mb-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest font-medium">
                Don’t Miss Out
              </span>
            </div>

            {/* HEADING */}
            <h3 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              <span className="text-white">
                Discover Exciting Events at{" "}
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-[#00bebe]
                  via-[#01ffff]
                  to-[#00bebe]
                  bg-clip-text
                  text-transparent
                "
              >
                NEURONEX 2K26
              </span>
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
              From hackathons and workshops to tech talks and competitions —
              explore events crafted to challenge, inspire, and elevate you.
            </p>
          </div>

          {/* RIGHT CTA BUTTON */}
          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-3
                px-10 py-5
                rounded-full
                bg-gradient-to-r
                from-[#01ffff]
                via-white
                to-[#01ffff]
                text-black
                font-semibold text-lg
                shadow-md
                hover:brightness-110
                transition
                cursor-pointer
              "
            >
              <CalendarDays className="w-5 h-5" />
              View All Events
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default EventsCTASection;

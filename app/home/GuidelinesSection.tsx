// "use client";

// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   Clock,
//   UserCheck,
//   AlertTriangle,
//   BadgeInfo,
//   Laptop,
// } from "lucide-react";

// const guidelines = [
//   {
//     icon: UserCheck,
//     title: "Eligibility",
//     text: "Open to all undergraduate and postgraduate students from recognized institutions.",
//   },
//   {
//     icon: Clock,
//     title: "Reporting Time",
//     text: "Participants must report at least 30 minutes before their scheduled event time.",
//   },
//   {
//     icon: Laptop,
//     title: "Bring Your ID",
//     text: "College ID card is mandatory for entry and participation in all events.",
//   },
//   {
//     icon: BadgeInfo,
//     title: "Registration",
//     text: "Prior online registration is required. On-spot registrations are subject to availability.",
//   },
//   {
//     icon: AlertTriangle,
//     title: "Code of Conduct",
//     text: "Participants must maintain discipline and follow the instructions of event coordinators.",
//   },
//   {
//     icon: CheckCircle,
//     title: "Certificates",
//     text: "Participation certificates will be provided to all registered attendees.",
//   },
// ];

// const GuidelinesSection = () => {
//   return (
//     <section className="relative py-28 p-35 overflow-hidden -mt-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* SECTION HEADER */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="text-sm uppercase tracking-widest text-primary font-medium">
//             Important Information
//           </span>

//           <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display text-foreground">
//             Event <span className="gradient-text">Guidelines</span>
//           </h2>

//           <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg">
//             Please read the following guidelines carefully to ensure a smooth,
//             fair, and enjoyable experience during Neuronex 2K26.
//           </p>
//         </motion.div>

//         {/* GUIDELINES GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {guidelines.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: index * 0.12 }}
//                 whileHover={{ y: -6 }}
//               >
//                 <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
//                   <Icon className="w-6 h-6 text-primary" />
//                 </div>

//                 <h3 className="text-xl font-semibold mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-muted-foreground leading-relaxed">
//                   {item.text}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* BACKGROUND GLOW */}
//       <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" />
//     </section>
//   );
// };

// export default GuidelinesSection;

// "use client";

// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   Clock,
//   UserCheck,
//   AlertTriangle,
//   BadgeInfo,
//   Laptop,
// } from "lucide-react";

// const guidelines = [
//   {
//     icon: UserCheck,
//     title: "Eligibility",
//     text: "Open to all undergraduate and postgraduate students from recognized institutions.",
//   },
//   {
//     icon: Clock,
//     title: "Reporting Time",
//     text: "Participants must report at least 30 minutes before their scheduled event time.",
//   },
//   {
//     icon: Laptop,
//     title: "Bring Your ID",
//     text: "College ID card is mandatory for entry and participation in all events.",
//   },
//   {
//     icon: BadgeInfo,
//     title: "Registration",
//     text: "Prior online registration is required. On-spot registrations are subject to availability.",
//   },
//   {
//     icon: AlertTriangle,
//     title: "Code of Conduct",
//     text: "Participants must maintain discipline and follow the instructions of event coordinators.",
//   },
//   {
//     icon: CheckCircle,
//     title: "Certificates",
//     text: "Participation certificates will be provided to all registered attendees.",
//   },
// ];

// const GuidelinesSection = () => {
//   return (
//     <section className="relative py-28 overflow-hidden -mt-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* SECTION HEADER */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <span
//             className="
//               inline-block
//               px-6 py-2
//               text-white text-sm font-semibold tracking-widest
//               border border-[#01ffff]
//               bg-[#01ffff]/12
//               rounded-md
//             "
//           >
//             Important Information
//           </span>

//           <h2 className="mt-5 text-4xl md:text-5xl font-bold font-display leading-tight">
//             <span className="text-white">Event </span>
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-[#00bebe]
//                 via-[#01ffff]
//                 to-[#00bebe]
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Guidelines
//             </span>
//           </h2>

//           <p className="mt-6 max-w-3xl mx-auto text-zinc-300 text-lg leading-relaxed">
//             Please read the following guidelines carefully to ensure a smooth,
//             fair, and enjoyable experience during Neuronex 2K26.
//           </p>
//         </motion.div>

//         {/* GUIDELINES GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {guidelines.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 className="
//                   relative
//                   p-8
//                   rounded-2xl
//                   border-2 border-[#01ffff]/80
//                   bg-transparent
//                   backdrop-blur-sm
//                   transition-all
//                   will-change-transform
//                 "
//                 initial={{ opacity: 0, y: 40, scale: 0.92 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 260,
//                   damping: 22,
//                   delay: index * 0.08,
//                 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.03,
//                   transition: {
//                     type: 'spring',
//                     stiffness: 400,
//                     damping: 25,
//                   },
//                 }}
//               >

//                 {/* ICON */}
//                 <div
//                   className="
//                     w-12 h-12 mb-6
//                     rounded-xl
//                     border border-[#01ffff]
//                     flex items-center justify-center
//                   "
//                 >
//                   <Icon className="w-6 h-6 text-[#01ffff]" />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-xl font-semibold mb-2 text-white">
//                   {item.title}
//                 </h3>

//                 {/* TEXT */}
//                 <p className="text-zinc-300 leading-relaxed">
//                   {item.text}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GuidelinesSection;

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
import TechFrame from "@/components/common/TechFrame";

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
    text: "Participation certificates will be provided to all registered attendees during prize distribution.",
  },
];

const GuidelinesSection = () => {
  return (
    <section className="relative py-28 overflow-hidden -mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-20"
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
            Important Information
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold font-display leading-tight">
            <span className="text-white">Event </span>
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
              Guidelines
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-zinc-300 text-lg leading-relaxed">
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
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
              >
                {/* ✅ TECH FRAME BORDER */}
                <TechFrame className="h-full !p-4">

                  <div className="p-4 md:p-5">


                    {/* ICON */}
                    <div
                      className="
                        w-12 h-12 mb-6
                        rounded-xl
                        border border-[#01ffff]
                        flex items-center justify-center
                      "
                    >
                      <Icon className="w-6 h-6 text-[#01ffff]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>

                    {/* TEXT */}
                    <p className="text-zinc-300 leading-relaxed">
                      {item.text}
                    </p>

                  </div>
                </TechFrame>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;

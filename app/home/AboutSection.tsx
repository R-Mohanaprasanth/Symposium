// "use client";

// import { motion } from "framer-motion";
// import { Sparkles, Rocket, Users } from "lucide-react";
// import TechFrame from "@/components/common/TechFrame";

// const features = [
//   {
//     icon: Sparkles,
//     title: "Innovation Driven",
//     description:
//       "Hands-on challenges and real-world problem solving across emerging technologies.",
//   },
//   {
//     icon: Rocket,
//     title: "Future Ready",
//     description:
//       "Exposure to AI, Web3, cloud computing, and industry-grade workflows.",
//   },
//   {
//     icon: Users,
//     title: "Community Focused",
//     description:
//       "Connect with innovators, creators, mentors, and tech leaders.",
//   },
// ];

// const AboutSection = () => {
//   return (

//     <section className="relative py-12 p-35 overflow-hidden mt-20"
//     >

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//         >
//           <span
//             className="
//     inline-block
//     px-6 py-3
//     text-white font-semibold tracking-wide
//     border border-[#01ffff]
//     bg-[#01ffff]/15
//     backdrop-blur-sm
//     rounded-md
//   "
//           >
//             About the Event
//           </span>

//           {/* <TechFrame className="max-w-6xl mx-auto mt-20"> */}
//           <h2 className="mt-4 text-4xl md:text-5xl font-bold font-display text-white leading-tight">
//             Experience the Future at{" "}
//             <span
//               className="
//     bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white
//     bg-clip-text
//     text-transparent
//   "
//             >
//               NEURONEX 2K26
//             </span>
//           </h2>
//           {/* </TechFrame> */}

//           <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
//             Neuronex 2K26 is an annual technical symposium designed to bring
//             together innovation, creativity, and collaboration. It creates a
//             platform where students explore real-world technologies, compete,
//             learn, and grow beyond classrooms.
//           </p>

//           <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
//             Through workshops, competitions, and interactive sessions,
//             participants gain exposure to modern engineering practices and
//             future-ready skills.
//           </p>

//           <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
//             Neuronex 2K26 encourages participants to push boundaries, think
//             critically, and transform ideas into impactful solutions. The
//             symposium is crafted to bridge the gap between academic learning and
//             industry expectations through practical exposure.
//           </p>

//           <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
//             With a blend of technical and non-technical events, Neuronex
//             provides an inclusive environment where students from diverse
//             domains collaborate, showcase talent, and build confidence beyond
//             traditional classroom limits.
//           </p>

//           <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
//             More than just a competition, Neuronex 2K26 is a celebration of
//             innovation, teamwork, and future-ready thinking — empowering the
//             next generation of engineers to lead, adapt, and inspire.
//           </p>
//         </motion.div>

//         {/* RIGHT FEATURES LIST */}
//         <div className="space-y-10">
//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 className="flex items-start gap-6"
//                 initial={{ opacity: 0, x: 60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: index * 0.15 }}
//               >
//                 <TechFrame>
//                   {/* Icon */}
//                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>

//                   {/* Text */}
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1 text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-muted-foreground leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </TechFrame>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* BACKGROUND ACCENT */}
//       {/* <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" /> */}
//     </section>
//   );
// };

// export default AboutSection;

"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Users } from "lucide-react";
import TechFrame from "@/components/common/TechFrame";

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
    <section
      className="
        relative
        py-10 sm:py-16 lg:py-20
        px-12.5 sm:px-6 lg:px-0
        overflow-hidden
        mt-14 sm:mt-20
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative inline-block">

             <div
    className="absolute inset-0 rounded-3xl pointer-events-none"
    style={{
      padding: "1.5px",
      background: "rgba(34, 172, 172, 0.65)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}
  />
  {/* rotating glow */}
  <motion.div
    className="
      absolute
      inset-y-0
      left-0
      right-0
      rounded-3xl
      pointer-events-none
    "
    style={{
      padding: "3px",
      background: `
        conic-gradient(
          from 0deg,
          rgba(1,255,255,0.15) 0deg,
          rgba(1,255,255,0.15) 40deg,
          rgb(1,255,255) 60deg,
          rgba(12,113,113,0.4) 80deg,
          rgba(1,255,255,0.15) 100deg,
          rgba(1,255,255,0.15) 360deg
        )
      `,
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}
    animate={{
      backgroundImage: [
        `conic-gradient(from 0deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`,
        `conic-gradient(from 360deg, rgba(1,255,255,0.15) 0deg, rgba(1,255,255,1) 60deg, rgba(1,255,255,0.15) 360deg)`
      ],
    }}
    transition={{
      duration: 3.8,
      ease: "linear",
      repeat: Infinity,
    }}
  />

  {/* CONTENT */}
  <span
    className="
      relative z-10
      inline-block
      px-4 py-2 sm:px-6 sm:py-3
      text-sm sm:text-base
      text-white font-semibold tracking-wide
     
      rounded-3xl
    "
  >
    About the Event
  </span>
</div>


          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Experience the Future at{" "}
            <span className="bg-gradient-to-r from-[#01ffff] via-[#7ffdfd] to-white bg-clip-text text-transparent">
              NEURONEX 2K26
            </span>
          </h2>

          <div className="mt-6 space-y-3 sm:space-y-6 max-w-xl">
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Neuronex 2K26 is an annual technical symposium designed to bring
              together innovation, creativity, and collaboration. It creates a
              platform where students explore real-world technologies, compete,
              learn, and grow beyond classrooms.
            </p>

            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              Through workshops, competitions, and interactive sessions,
              participants gain exposure to modern engineering practices and
              future-ready skills.
            </p>

            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              Neuronex 2K26 encourages participants to push boundaries, think
              critically, and transform ideas into impactful solutions. The
              symposium is crafted to bridge the gap between academic learning
              and industry expectations through practical exposure.
            </p>

            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              With a blend of technical and non-technical events, Neuronex
              provides an inclusive environment where students from diverse
              domains collaborate, showcase talent, and build confidence beyond
              traditional classroom limits.
            </p>

            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
              More than just a competition, Neuronex 2K26 is a celebration of
              innovation, teamwork, and future-ready thinking — empowering the
              next generation of engineers to lead, adapt, and inspire.
            </p>
          </div>
        </motion.div>

        {/* RIGHT FEATURES */}
        <div className="space-y-6 sm:space-y-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <TechFrame>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
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

export default AboutSection;

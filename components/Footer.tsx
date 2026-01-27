// "use client";

// import { motion } from "framer-motion";
// import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="relative  border-t py-12 p-35 border-border/50 bg-background"
//     >
//       {/* Top glow */}
//       <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
//         {/* Brand */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-display font-bold tracking-tight">
//             NEURONEX <span className="text-primary">2K26</span>
//           </h3>
//           <p className="text-sm text-muted-foreground max-w-sm">
//             Annual Symposium bringing together innovation, technology,
//             creativity, and the brightest minds of the future.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div className="space-y-4">
//           <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
//             Explore
//           </h4>
//           <ul className="space-y-2 text-sm">
//             {["Home", "Events", "Schedule", "Speakers", "Contact"].map(
//               (item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Contact + Social */}
//         <div className="space-y-4">
//           <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
//             Connect
//           </h4>

//           <div className="flex items-center gap-3 text-muted-foreground">
//             <Mail className="w-4 h-4" />
//             <span className="text-sm">contact@neuronex2k26.com</span>
//           </div>

//           <div className="flex gap-4 pt-2">
//             {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="p-2 rounded-full border border-border/50 
//                            hover:border-primary hover:text-primary 
//                            transition-all"
//               >
//                 <Icon className="w-4 h-4" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-border/40">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
//           <span>© 2026 NEURONEX. All rights reserved.</span>
//           <span>Designed & Built with ❤️ for Innovation</span>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;

"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mt-32 overflow-hidden"
    >
      {/* TOP GRADIENT LINE */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#01ffff] to-transparent opacity-70" />

      {/* BACKGROUND ACCENT */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#01ffff]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* BRAND */}
        <div className="space-y-5">
          <h3 className="text-3xl font-display font-bold tracking-wide text-white">
            NEURONEX{" "}
            <span className="bg-gradient-to-r from-[#00bebe] via-[#01ffff] to-[#00bebe] bg-clip-text text-transparent">
              2K26
            </span>
          </h3>

          <p className="text-zinc-400 leading-relaxed max-w-sm">
            Neuronex 2K26 is a national-level technical symposium that brings
            together innovation, creativity, and the future of technology.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-5">
          <h4 className="text-sm uppercase tracking-widest text-[#01ffff]">
            Explore
          </h4>

          <ul className="space-y-3 text-zinc-300">
            {["Home", "Events", "Schedule", "Speakers", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative inline-block hover:text-[#01ffff] transition-colors
                               after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                               after:bg-[#01ffff] after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-5">
          <h4 className="text-sm uppercase tracking-widest text-[#01ffff]">
            Connect
          </h4>

          <div className="flex items-center gap-3 text-zinc-300">
            <Mail className="w-4 h-4 text-[#01ffff]" />
            <span>contact@neuronex2k26.com</span>
          </div>

          <div className="flex gap-4 pt-2">
            {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="
                  w-10 h-10 rounded-full
                  border border-[#01ffff]/40
                  flex items-center justify-center
                  text-[#01ffff]
                  hover:bg-[#01ffff]/10
                  hover:border-[#01ffff]
                  transition-all
                "
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-[#01ffff]/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <span>© 2026 NEURONEX. All rights reserved.</span>
          <span className="text-zinc-500">
            Crafted with passion for innovation
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

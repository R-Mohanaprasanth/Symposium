"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveText from "@/components/InteractiveText";
import EventCountdown from "@/components/EventCountdown";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient Orbs */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      /> */}

      {/* Animated Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.1 }}
      >
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="hsl(var(--secondary))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 -mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground -mt 3 block">
            Showcase your Skills
          </span>
        </motion.div>

        {/* Main Heading with Interactive Text */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-15xl font-bold font-display tracking-tight leading-none -mt-4">
            <span className="block text-3xl md:text-5xl lg:text-6xl text-foreground mb-2">
              Symposium
            </span>

            <InteractiveText
              text="NEURONEX"
              className="text-5xl md:text-7xl lg:text-8xl gradient-text text-glow"
            />
          </h1>
        </motion.div>

        {/* Subheading */}
        <EventCountdown />

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary hover:opacity-90 transition-all group"
          >
            Technical Event
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border/50 bg-card/30 backdrop-blur-sm text-foreground font-semibold px-8 py-6 text-lg hover:bg-card/50 hover:border-primary/50 transition-all group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
           Non-Technical Event
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-16
"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { value: "150+", label: "Event Conducted" },
            { value: "98%", label: "Student Satisfaction" },
            { value: "10+", label: "Years Experience" },
            { value: "1000", label: "Prize Amount" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-1 mr-3 mr-3">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Play, Sparkles } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import InteractiveText from './InteractiveText';

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Background Elements */}
//       <div className="absolute inset-0 grid-pattern opacity-30" />
      
//       {/* Gradient Orbs */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
//       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
//       {/* Animated Lines */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
//         <motion.line
//           x1="0%"
//           y1="30%"
//           x2="100%"
//           y2="70%"
//           stroke="hsl(var(--primary))"
//           strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2, delay: 0.5 }}
//         />
//         <motion.line
//           x1="100%"
//           y1="20%"
//           x2="0%"
//           y2="80%"
//           stroke="hsl(var(--secondary))"
//           strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2, delay: 1 }}
//         />
//       </svg>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
//         {/* Badge */}
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Sparkles className="w-4 h-4 text-primary" />
//           <span className="text-sm font-medium text-muted-foreground">
//             Elevating Digital Experiences
//           </span>
//         </motion.div>

//         {/* Main Heading with Interactive Text */}
//         <motion.div
//           className="mb-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-none">
//             <span className="block text-foreground mb-2">We Build</span>
//             <InteractiveText 
//               text="DIGITAL FUTURES" 
//               className="gradient-text text-glow"
//             />
//           </h1>
//         </motion.div>

//         {/* Subheading */}
//         <motion.p
//           className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           Premium web development, SEO optimization, and digital marketing 
//           solutions that transform businesses and create lasting impressions.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <Button 
//             size="lg"
//             className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary hover:opacity-90 transition-all group"
//           >
//             Start Your Project
//             <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
          
//           <Button 
//             size="lg"
//             variant="outline"
//             className="border-border/50 bg-card/30 backdrop-blur-sm text-foreground font-semibold px-8 py-6 text-lg hover:bg-card/50 hover:border-primary/50 transition-all group"
//           >
//             <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//             Watch Showreel
//           </Button>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           className="mt-12 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-8"

//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           {[
//             { value: '150+', label: 'Projects Delivered' },
//             { value: '98%', label: 'Client Satisfaction' },
//             { value: '10+', label: 'Years Experience' },
//             { value: '50+', label: 'Happy Clients' },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center"
//               whileHover={{ y: -5 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-1">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         <motion.div
//           className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
//           animate={{ y: [0, 5, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <motion.div
//             className="w-1.5 h-1.5 rounded-full bg-primary"
//             animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;


// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import EventCardsSection1 from "@/components/EventsPage/EventsSlider/EventCardSection1";
// import EventCardsSection2 from "@/components/EventsPage/EventsSlider/EventCardSection2";
// import EventCardsSection3 from "@/components/EventsPage/EventsSlider/EventCardSection3";

// const slides = [
//   <EventCardsSection1 key="s1" />,
//   <EventCardsSection2 key="s2" />,
//   <EventCardsSection3 key="s3" />,
// ];

// export default function EventsSlider() {
//   const [index, setIndex] = useState(0);

//   // ✅ AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000); // 6 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ x: 400, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -400, opacity: 0 }}
//           transition={{
//             duration: 1.4,
//             ease: "easeInOut",
//           }}
//           className="w-full flex justify-center"
//         >
//           {slides[index]}
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// }


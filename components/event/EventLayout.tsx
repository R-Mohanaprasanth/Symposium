// "use client";

// import { motion } from "framer-motion";
// import EventInfo from "@/components/event/EventInfo";
// import EventContacts from "@/components/event/EventContacts";
// import EventRules from "@/components/event/EventRules";


// export default function EventLayout({ event }: any) {
//   return (
//     <section className="min-h-screen pt-32 pb-24 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-14">

//         {/* LEFT — POSTER */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="rounded-2xl overflow-hidden border border-border"
//         >
//           <img
//             src={event.poster}
//             alt={event.title}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* RIGHT — CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-8"
//         >
//           <EventInfo event={event} />
//           <EventContacts coordinators={event.coordinators} />
//           <EventRules image={event.rulesImage} />
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function EventLayout({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: React.ReactNode;
}) {
  return (
    <main className="pt-28 px-6 max-w-7xl mx-auto">
      {/* Poster */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>

          {children}
        </div>
      </motion.div>
    </main>
  );
}

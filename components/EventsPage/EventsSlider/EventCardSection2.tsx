// "use client";

// import { useState } from "react";
// import EventCard from "../../EventCard";
// import EventHeading from "../../EventHeading";

// const events = [
//   {
//     id: 1,
//     slug: "devcon-2026",
//     title: "DevCon 2026",
//     date: "March 15–17, 2026",
//     location: "San Francisco, CA",
//     description:
//       "The premier developer conference bringing together engineers worldwide.",
//     image:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
//     tags: ["Conference", "DevOps", "Cloud"],
//     attendees: 4250,
//   },
//   {
//     id: 2,
//     slug: "ai-hackathon-2026",
//     title: "AI Hackathon 2026",
//     date: "April 8–10, 2026",
//     location: "Austin, TX",
//     description:
//       "48-hour intensive hackathon focused on AI-powered solutions.",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
//     tags: ["Hackathon", "AI/ML"],
//     attendees: 850,
//   },
//   {
//     id: 3,
//     slug: "react-summit-2026",
//     title: "React Summit 2026",
//     date: "May 22–24, 2026",
//     location: "New York, NY",
//     description:
//       "The world’s largest React conference with core team members.",
//     image:
//       "https://images.unsplash.com/photo-1558403194-611308249627?w=800",
//     tags: ["React", "Frontend"],
//     attendees: 3200,
//   },
// ];

// export default function EventCardsSection2() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="min-h-screen py-20 overflow-hidden">
//       <div className="max-w-6xl mx-auto">

//         <EventHeading title="NEURONEX" align="right" />

//         <div className="relative flex justify-center min-h-[650px] pt-10">
//           <div className="relative w-full max-w-[400px]">

//             {events.map((event, index) => (
//               <div
//                 key={event.id}
//                 className="absolute inset-0 transition-all duration-500"
//                 style={{
//                   transform: `translateX(${(index - activeIndex) * 55}%)`,
//                   opacity: index === activeIndex ? 1 : 0.6,
//                   zIndex: index === activeIndex ? 20 : 10,
//                 }}
//               >
//                 <EventCard
//                   {...event}
//                   isActive={index === activeIndex}
//                   onClick={() => setActiveIndex(index)}
//                 />
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

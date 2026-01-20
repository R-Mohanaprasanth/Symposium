// "use client";

// import { useState, useCallback, useEffect } from "react";
// import { useRouter } from "next/navigation";

// import EventCard from "../../EventCard";
// import EventHeading from "../../EventHeading";

// const events = [
//   {
//     id: 1,
//     slug: "devcon-2026",
//     title: "DevCon 2026",
//     date: "March 15-17, 2026",
//     location: "San Francisco, CA",
//     description:
//       "The premier developer conference bringing together 5,000+ engineers to explore cutting-edge technologies.",
//     image:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
//     tags: ["Conference", "DevOps", "Cloud"],
//     attendees: 4250,
//   },
//   {
//     id: 2,
//     slug: "ai-hackathon-2026",
//     title: "AI Hackathon 2026",
//     date: "April 8-10, 2026",
//     location: "Austin, TX",
//     description:
//       "48-hour intensive hackathon focused on building next-gen AI-powered applications.",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
//     tags: ["Hackathon", "AI/ML", "Startup"],
//     attendees: 850,
//   },
//   {
//     id: 3,
//     slug: "react-summit-2026",
//     title: "React Summit 2026",
//     date: "May 22-24, 2026",
//     location: "New York, NY",
//     description:
//       "The world's largest React conference with core team members and workshops.",
//     image:
//       "https://images.unsplash.com/photo-1558403194-611308249627?w=800&auto=format&fit=crop",
//     tags: ["React", "Frontend", "JavaScript"],
//     attendees: 3200,
//   },
// ];

// export default function EventCardsSection3() {
//   const router = useRouter();

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState<number | null>(null);
//   const [touchEnd, setTouchEnd] = useState<number | null>(null);

//   const minSwipeDistance = 50;

//   const goToPrevious = useCallback(() => {
//     setActiveIndex((prev) =>
//       prev === 0 ? events.length - 1 : prev - 1
//     );
//   }, []);

//   const goToNext = useCallback(() => {
//     setActiveIndex((prev) =>
//       prev === events.length - 1 ? 0 : prev + 1
//     );
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") goToPrevious();
//       if (e.key === "ArrowRight") goToNext();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [goToNext, goToPrevious]);

//   const onTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//     setTouchEnd(null);
//   };

//   const onTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const onTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;

//     if (distance > minSwipeDistance) goToNext();
//     if (distance < -minSwipeDistance) goToPrevious();
//   };

//   const getCardStyle = (index: number) => {
//     const diff = index - activeIndex;
//     const normalizedDiff = (diff + events.length) % events.length;

//     const adjusted =
//       normalizedDiff > events.length / 2
//         ? normalizedDiff - events.length
//         : normalizedDiff;

//     const isCenter = adjusted === 0;

//     return {
//       transform: `
//         translateX(${adjusted * 55}%)
//         translateY(${isCenter ? 0 : 32}px)
//         scale(${isCenter ? 1 : 0.9})
//       `,
//       zIndex: isCenter ? 20 : 10 - Math.abs(adjusted),
//       opacity: isCenter ? 1 : 0.75,
//       filter: isCenter ? "none" : "blur(1px)",
//     };
//   };

//   return (
//     <section className="min-h-screen py-20 px-4 overflow-hidden">
//       <div className="max-w-6xl mx-auto">

//         <EventHeading prefix="Annual Symposium" title="NEURONEX" />

//         <div
//           className="relative flex justify-center min-h-[650px] pt-10"
//           onTouchStart={onTouchStart}
//           onTouchMove={onTouchMove}
//           onTouchEnd={onTouchEnd}
//         >
//           <div className="relative w-full max-w-[400px] mx-auto">
//             {events.map((event, index) => (
//               <div
//                 key={event.id}
//                 className="absolute inset-0 transition-all duration-500"
//                 style={getCardStyle(index)}
//               >
//                 <EventCard
//                   {...event}
//                   isActive={index === activeIndex}
//                   onClick={() => router.push(`/events/${event.slug}`)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

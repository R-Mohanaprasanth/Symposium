export default function EventDetails({ event }: any) {
  return (
    <div className="rounded-2xl p-8 text-white space-y-4 border border-[#01ffff]/25 bg-[#061824]/70 backdrop-blur">
      <h2
        className="
          text-3xl font-bold
          bg-gradient-to-r
          from-[#00bebe]
          via-[#01ffff]
          to-[#00bebe]
          bg-clip-text
          text-transparent
        "
      >
        {event.title}
      </h2>

      <p className="text-zinc-300">{event.subtitle}</p>

      <div className="space-y-1 text-zinc-300">
        <p>📅 {event.date}</p>
        <p>⏰ {event.time}</p>
        <p>📍 {event.venue}</p>
        <p>👥 {event.teamLimit}</p>
      </div>

      <button
        className="
          mt-6 w-full py-3 rounded-lg
          font-semibold text-black
          bg-[#01ffff]
          hover:brightness-110
          transition
        "
      >
        Register Now
      </button>
    </div>
  );
}

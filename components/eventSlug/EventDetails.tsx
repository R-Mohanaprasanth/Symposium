export default function EventDetails({ event }: any) {
  return (
    <div className="bg-[#2f2f2f] rounded-xl p-6 text-white space-y-3">
      <h2 className="text-3xl font-bold text-yellow-400">
        {event.title}
      </h2>

      <p className="text-gray-300">{event.subtitle}</p>

      <p>📅 {event.date}</p>
      <p>⏰ {event.time}</p>
      <p>📍 {event.venue}</p>
      <p>👥 {event.teamLimit}</p>

      <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold">
        Register Now
      </button>
    </div>
  );
}

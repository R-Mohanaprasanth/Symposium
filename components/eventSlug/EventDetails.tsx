export default function EventDetails({ event }: any) {
  return (
    <div
      className="
        h-full rounded-2xl
        p-5 sm:p-6
        pl-5 sm:pl-6 md:pl-12
        border border-[#01ffff]/25
        bg-[#061824]/70
        backdrop-blur
        text-white
        flex flex-col
      "
    >
      <h2
        className="
          text-xl sm:text-2xl
          font-bold
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

      <div
        className="
          mt-4 space-y-1
          text-zinc-300
          text-sm sm:text-base
        "
      >
        <p>📅 {event.date}</p>
        <p>⏰ {event.time}</p>
        <p>📍 {event.venue}</p>
        <p>👥 {event.teamLimit}</p>
      </div>

      <div className="mt-auto">
    <button
  onClick={() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdyfNolKePjbLEF2oqTst0UUfVhBLxNqcEVKzR9akafB4tcg/viewform",
      "_blank"
    );
  }}
  className="
    mt-6
    w-full sm:w-60
    py-2.5
    rounded-lg
    font-semibold

    text-black
    bg-[#01ffff]
    border border-transparent

    shadow-[0_0_12px_rgba(1,255,255,0.35)]

    hover:bg-transparent
    hover:text-[#01ffff]
    hover:border-[#01ffff]
    hover:shadow-[0_0_20px_rgba(1,255,255,0.6)]

    transition-all duration-300
  "
>
  Register Now
</button>


      </div>
    </div>
  );
}

export default function EventDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div
      className="
        w-full
        rounded-2xl
        p-12
        border border-[#01ffff]/25
        bg-[#061824]/70
        backdrop-blur
      "
    >
      <h2
        className="
          text-2xl md:text-3xl font-bold mb-8
          bg-gradient-to-r
          from-[#00bebe]
          via-[#01ffff]
          to-[#00bebe]
          bg-clip-text
          text-transparent
        "
      >
        About the Event
      </h2>

      <p
        className="
          text-zinc-300
          text-lg md:text-xl
          leading-8 md:leading-9
          whitespace-pre-line
        "
      >
        {description}
      </p>
    </div>
  );
}

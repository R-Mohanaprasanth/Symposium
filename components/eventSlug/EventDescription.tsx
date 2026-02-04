export default function EventDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div
      className="
        w-full
        max-w-4xl
        mx-auto
        rounded-2xl

        p-6 sm:p-7 md:p-[2.75rem]

        border border-[#01ffff]/25
        bg-[#061824]/70
        backdrop-blur
      "
    >
      <h2
        className="
          text-lg sm:text-xl md:text-2xl
          font-bold
          mb-4 sm:mb-5 md:mb-6

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
          text-sm sm:text-base md:text-lg
          leading-6 sm:leading-7 md:leading-8
          whitespace-pre-line
        "
      >
        {description}
      </p>
    </div>
  );
}

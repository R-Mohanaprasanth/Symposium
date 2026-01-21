export default function EventDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div
      className="
        w-full
        bg-gradient-to-br from-[#0B1C2D]/90 to-[#12263A]/90
        rounded-2xl
        p-12
        border border-white/10
        shadow-lg
      "
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">
        About the Event
      </h2>

      {/* Content */}
      <p
        className="
          text-slate-200
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

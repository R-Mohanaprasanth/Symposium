export default function EventRules({ image }: { image: string }) {
  return (
    <div className="space-y-6">
      <h3
        className="
          text-xl font-bold
          bg-gradient-to-r
          from-[#00bebe]
          via-[#01ffff]
          to-[#00bebe]
          bg-clip-text
          text-transparent
        "
      >
        Event Rules
      </h3>

      <div className="relative overflow-hidden rounded-2xl border border-[#01ffff]/25">
        <img
          src={image}
          alt="rules"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
}

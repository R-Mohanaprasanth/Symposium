export default function EventHero({ image }: { image: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={image}
        alt="event poster"
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* subtle cyan glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}

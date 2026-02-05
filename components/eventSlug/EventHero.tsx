export default function EventHero({ image }: { image: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#01ffff]/25 w-full h-[320px] md:h-auto">


      
      {/* IMAGE */}
      <img
        src={image}
        alt="event poster"
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/15" /> */}

      {/* BOTTOM LIGHT GLOW */}
      {/* <div
        className="
          absolute bottom-0 left-1/2
          -translate-x-1/2
          w-[140%] h-[45%]
          bg-gradient-to-t
          from-[#01ffff]/30
          via-[#01ffff]/10
          to-transparent
          blur-2xl
          pointer-events-none
        "
      /> */}

      {/* DEPTH SHADOW */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" /> */}
    </div>
  );
}

export default function EventRules({ image }: { image: string }) {
  return (
  
      

      <div className="relative overflow-hidden rounded-2xl border border-[#01ffff]/25">
        <img
          src={image}
          alt="rules"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

  );
}

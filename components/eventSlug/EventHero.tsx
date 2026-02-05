import Image from "next/image";

export default function EventHero({ image }: { image: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#01ffff]/25 w-full h-[320px] md:h-[530px]">

      <Image
        src={image}
        alt="event poster"
        fill
        priority
        placeholder="blur"
        blurDataURL={image}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
      />

    </div>
  );
}

export default function EventHero({ image }: { image: string }) {
  return (
    <img
      src={image}
      alt="event poster"
      className="w-full rounded-xl"
    />
  );
}

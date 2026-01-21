export default function EventRules({ image }: { image: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-4">
        Event Rules
      </h3>

      <img
        src={image}
        alt="rules"
        className="rounded-xl"
      />
    </div>
  );
}

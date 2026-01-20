export default function EventRules({ rules }: { rules: string[] }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Rules</h3>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        {rules.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

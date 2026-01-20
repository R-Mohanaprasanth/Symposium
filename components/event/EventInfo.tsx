export default function EventInfo({
  date,
  time,
  venue,
  description,
}: any) {
  return (
    <div className="space-y-4 text-muted-foreground">
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Venue:</strong> {venue}</p>

      <p className="mt-6 text-base">{description}</p>
    </div>
  );
}

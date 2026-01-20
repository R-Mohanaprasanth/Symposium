export default function EventContacts({
  contacts,
}: {
  contacts: { name: string; phone: string }[];
}) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">
        Coordinator Contacts
      </h3>

      {contacts.map((c, i) => (
        <p key={i} className="text-muted-foreground">
          {c.name} — {c.phone}
        </p>
      ))}
    </div>
  );
}

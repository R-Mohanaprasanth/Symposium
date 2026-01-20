import { notFound } from "next/navigation";
import { events } from "@/data/events";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <div>
      {/* Layout wrapper */}
      <h1 className="text-4xl font-bold">{event.title}</h1>

      {/* You can plug your components here */}
      {/* Example */}
      {/* 
      <EventLayout title={event.title} image={event.image}>
        <EventInfo
          date={event.date}
          time={event.time}
          venue={event.venue}
          description={event.description}
        />
        <EventRules rules={event.rules} />
        <EventContacts contacts={event.contacts} />
      </EventLayout>
      */}
    </div>
  );
}

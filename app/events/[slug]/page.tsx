import { eventSlugData } from "@/data/eventSlugData";
import EventLayout from "@/components/eventSlug/EventLayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventSlugPage({ params }: Props) {
  const { slug } = await params;

  const event = eventSlugData.find(
    (e) => e.slug === slug
  );

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Event not found
      </div>
    );
  }

  return <EventLayout event={event} />;
}

import { eventSlugData } from "@/data/eventSlugData";
import EventLayout from "@/components/eventSlug/EventLayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventSlugPage({ params }: Props) {
  const { slug } = await params;

  const event = eventSlugData.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-white">
        Event not found
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="
          fixed inset-0
          bg-[url('/images/bg-1.png')]
          bg-cover
          bg-center
          bg-no-repeat
          -z-20
        "
      />

      {/* DARK OVERLAY */}
     

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <EventLayout event={event} />
      </div>

    </main>
  );
}

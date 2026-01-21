import EventHero from "./EventHero";
import EventDetails from "./EventDetails";
import EventContacts from "./EventContacts";
import EventRules from "./EventRules";
import EventDescription from "./EventDescription";

export default function EventLayout({ event }: any) {
  return (
    <section className="min-h-screen px-6 py-28 flex justify-center bg-[#0B1C2D]">
      <div
        className="
          max-w-6xl w-full
          bg-[#12263A]
          rounded-3xl
          p-10
          border border-white/10
          shadow-2xl
          backdrop-blur
        "
      >
        {/* HERO */}
        <div className="overflow-hidden rounded-2xl border border-white/10 mb-14">
          <EventHero image={event.heroImage} />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* ABOUT EVENT — FULL WIDTH */}
          <div className="md:col-span-2">
            <EventDescription description={event.description} />
          </div>

          {/* EVENT DETAILS */}
          <div className="h-full bg-[#0B1C2D]/70 rounded-2xl p-8 border border-white/10">
            <EventDetails event={event} />
          </div>

          {/* COORDINATOR */}
          <div className="h-full bg-[#0B1C2D]/70 rounded-2xl p-8 border border-white/10">
            <EventContacts coordinator={event.coordinator} />
          </div>

        </div>

        {/* RULES */}
        <div className="mt-14 bg-[#0B1C2D]/60 rounded-2xl p-8 border border-white/10">
          <EventRules image={event.rulesImage} />
        </div>

      </div>
    </section>
  );
}

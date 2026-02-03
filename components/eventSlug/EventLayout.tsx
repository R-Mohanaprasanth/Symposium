import EventHero from "./EventHero";
import EventDetails from "./EventDetails";
import EventContacts from "./EventContacts";
import EventRules from "./EventRules";
import EventDescription from "./EventDescription";

export default function EventLayout({ event }: any) {
  return (
    <section className="relative min-h-screen px-6 py-32 flex justify-center overflow-hidden">

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
      <div className="fixed inset-0 bg-black/65 -z-10" />

      {/* CYAN TECH GLOW */}
      <div
        className="
          fixed
          top-[35%]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-[#01ffff]/10
          blur-[220px]
          rounded-full
          -z-10
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          max-w-6xl
          w-full
          rounded-3xl
          p-10
         border-2 border-[#01ffff]/40
    bg-[#061824]/70
    backdrop-blur-xl
    shadow-[0_0_18px_rgba(1,255,255,0.25)]
        "
      >
        {/* HERO */}
        <div className="overflow-hidden rounded-2xl border border-[#01ffff]/25 mb-14">
          <EventHero image={event.heroImage} />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* ABOUT EVENT — FULL WIDTH */}
          <div className="md:col-span-2">
            <EventDescription description={event.description} />
          </div>

          {/* EVENT DETAILS */}
          <div
            className="
              h-full
              rounded-2xl
              p-8
              border border-[#01ffff]/25
              bg-[#061824]/70
              backdrop-blur
            "
          >
            <EventDetails event={event} />
          </div>

          {/* COORDINATOR */}
          <div
            className="
              h-full
              rounded-2xl
              p-8
              border border-[#01ffff]/25
              bg-[#061824]/70
              backdrop-blur
            "
          >
            <EventContacts coordinator={event.coordinator} />
          </div>

        </div>

        {/* RULES */}
        <div
          className="
            mt-14
            rounded-2xl
            p-8
            border border-[#01ffff]/25
            bg-[#061824]/65
            backdrop-blur
          "
        >
          <EventRules image={event.rulesImage} />
        </div>
      </div>
    </section>
  );
}

export default function EventContacts({ coordinators }: any) {
  return (
    <div className="rounded-2xl p-5 border border-[#01ffff]/25 bg-[#061824]/70 backdrop-blur text-white space-y-4">
      
      <h3
        className="
          text-2xl font-bold mb-2
          bg-gradient-to-r
          from-[#00bebe]
          via-[#01ffff]
          to-[#00bebe]
          bg-clip-text
          text-transparent
        "
      >
        Coordinators
      </h3>

      {coordinators.map((person: any, index: number) => (
        <div key={index} className="space-y-1">
          <p className="text-zinc-300 text-base">
            Name: <span className="text-white">{person.name}</span>
          </p>
          <p className="text-zinc-300 text-base">
            Phone: <span className="text-white">{person.phone}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

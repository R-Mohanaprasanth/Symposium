export default function EventContacts({ coordinator }: any) {
  return (
    <div className="rounded-2xl p-6 border border-[#01ffff]/25 bg-[#061824]/70 backdrop-blur text-white space-y-2">
      <h3
        className="
          text-lg font-semibold mb-3
          bg-gradient-to-r
          from-[#00bebe]
          via-[#01ffff]
          to-[#00bebe]
          bg-clip-text
          text-transparent
        "
      >
        Coordinator
      </h3>

      <p className="text-zinc-300">
        Name: <span className="text-white">{coordinator.name}</span>
      </p>

      <p className="text-zinc-300">
        Phone: <span className="text-white">{coordinator.phone}</span>
      </p>
    </div>
  );
}

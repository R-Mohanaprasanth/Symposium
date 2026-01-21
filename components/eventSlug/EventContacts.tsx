export default function EventContacts({ coordinator }: any) {
  return (
    <div className="bg-[#1f1f1f] rounded-xl p-5 text-white">
      <h3 className="text-lg font-semibold text-yellow-400 mb-2">
        Coordinator
      </h3>

      <p>Name: {coordinator.name}</p>
      <p>Phone: {coordinator.phone}</p>
    </div>
  );
}

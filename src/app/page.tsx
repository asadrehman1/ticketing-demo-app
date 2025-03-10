import Link from "next/link";

export default function Home() {
  const events = [
    { id: 1, name: "Concert A", date: "2023-12-25" },
    { id: 2, name: "Concert B", date: "2023-12-30" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Events</h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600">Date: {event.date}</p>
            <Link href={`/event/${event.id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

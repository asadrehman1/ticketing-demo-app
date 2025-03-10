"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Event({ params }: EventPageProps) {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  const handlePurchase = () => {
    if (id) {
      router.push(`/success?eventId=${id}`);
    }
  };

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Event {id}</h1>
        <p className="text-gray-700 mb-4">
          This is a detailed description of Event {id}. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <button
          onClick={handlePurchase}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

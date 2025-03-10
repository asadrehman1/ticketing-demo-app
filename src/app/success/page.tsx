"use client"; // Mark this as a Client Component

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Wrapper component to handle suspense for useSearchParams()
function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Purchase Successful!</h1>
        <p className="text-gray-700 mb-4">
          Thank you for purchasing a ticket for Event {eventId}. Your ticket has
          been confirmed.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

// Main Success Page component
export default function Success() {
  return (
    <Suspense fallback={<div className="min-h-screen p-8">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

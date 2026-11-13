import React, { Suspense } from "react";
import PageHeader from "../Component/PageHeader";
import ContactClient from "../Component/ContactClient";

export const metadata = {
  title: "Contact Us | Guru Nanak Tours & Travels - Taxi & Vehicle Outsourcing Mohali",
  description:
    "Contact Guru Nanak Tours & Travels for taxi service, vehicle outsourcing, airport transfers, and corporate travel in Punjab. Call +91-9872632396 or visit Phase-9, Mohali.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Page Header Banner */}
      <PageHeader
        title="Contact Us"
        subtitle="We are available 24/7 to assist with your transportation and fleet requirements"
        breadcrumb={[{ label: "Contact Us" }]}
      />

      {/* Main Content with Suspense for SearchParams */}
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#ffa41b] border-r-transparent" />
            <p className="mt-4 text-sm text-gray-500">Loading Contact Information...</p>
          </div>
        }
      >
        <ContactClient />
      </Suspense>
    </main>
  );
}


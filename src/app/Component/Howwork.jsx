"use client";

import { MessageSquare, Calendar, Layers, KeyRound } from "lucide-react";
import Image from "next/image";

export default function Choose() {
  const items = [
    {
      id: 1,
      icon: <MessageSquare className="w-6 h-6 text-gray-800" />,
      title: "Easy Booking",
      text: "Book your taxi easily through call, WhatsApp, or online with instant confirmation.",
    },
    {
      id: 2,
      icon: <Calendar className="w-6 h-6 text-gray-800" />,
      title: "24/7 Availability",
      text: "We provide round-the-clock taxi services for all local and outstation trips.",
    },
    {
      id: 3,
      icon: <Layers className="w-6 h-6 text-gray-800" />,
      title: "All India Routes",
      text: "From short city rides to long tours, we cover all major destinations across India.",
    },
    {
      id: 4,
      icon: <KeyRound className="w-6 h-6 text-gray-800" />,
      title: "Comfortable & Clean Cars",
      text: "Travel comfortably in well-maintained cars with professional and experienced drivers.",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: "url('/img/work.webp')",
        backgroundPosition: "right bottom",
        backgroundSize: "20%",
      }}
    >
      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

      <div className="relative z-10 text-center mb-12">
        <p className="text-[#ffa41b] uppercase text-sm tracking-wide font-medium">
          Why Choose Us
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
          Reliable Taxi Services for Every Trip, Anytime – Anywhere
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-2 ${
              index === 1 || index === 3 ? "-translate-y-6" : ""
            }`}
          >
            <div className="absolute text-[8rem] font-extrabold text-gray-100 top-4 right-6 -z-0">
              {index + 1}
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-[#ffd101] p-4 rounded-full mb-4 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

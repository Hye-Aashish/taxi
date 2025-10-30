"use client";

import { MessageSquare, Calendar, Layers, KeyRound } from "lucide-react";
import Image from "next/image";

export default function Choose() {
  const items = [
    {
      id: 1,
      icon: <MessageSquare className="w-6 h-6 text-gray-800" />,
      title: "Free Consultations",
      text: "Get expert advice on key making, lock repairs, and security solutions with our friendly certified locksmiths at no cost.",
    },
    {
      id: 2,
      icon: <Calendar className="w-6 h-6 text-gray-800" />,
      title: "Book Appointment",
      text: "Schedule your locksmith service at your convenience, whether for home, office, or vehicle security needs.",
    },
    {
      id: 3,
      icon: <Layers className="w-6 h-6 text-gray-800" />,
      title: "Tools & Equipment",
      text: "We use high-quality tools and modern techniques to ensure precise key cutting and secure lock installations.",
    },
    {
      id: 4,
      icon: <KeyRound className="w-6 h-6 text-gray-800" />,
      title: "Key & Lock Repair",
      text: "Our experts handle all types of key repairs, lock replacements, and ignition services efficiently and safely.",
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
        <p className="text-yellow-600 uppercase text-sm tracking-wide font-medium">
          How It Works
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
          Trusted Locksmith Services for <br /> Your Home, Office, and Vehicle
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
              <div className="bg-[#ffa41b] p-4 rounded-full mb-4 shadow-md">
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

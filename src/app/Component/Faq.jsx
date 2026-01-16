"use client";
import { useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "Do you provide one-way taxi service?",
    answer:
      "Yes, we offer daily one-way taxi service for all major routes including Chandigarh, Delhi, Manali, Shimla, and more.",
  },
  {
    id: 2,
    question: " How do I book a taxi?",
    answer:
      "You can book easily through call, WhatsApp, or online. Once details are confirmed, your driver will be assigned instantly.",
  },
  {
    id: 3,
    question: "Are your prices fixed or do they change?",
    answer:
      "Our prices are fixed and transparent. No hidden charges—fuel, tolls, and taxes are clearly informed during booking.",
  },
  {
    id: 4,
    question: "What cars do you provide?",
    answer:
      "We offer all types of vehicles: Sedan, SUV, Innova, Crysta, Ertiga, Dzire, and Tempo Traveller depending on your requirement.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(1);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-500 font-bold uppercase text-xs md:text-sm tracking-widest mb-2">
            FAQ'S
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
            General <span className="text-yellow-500">Frequently</span> Asked Questions
          </h2>

          <p className="text-gray-500 leading-relaxed mb-6">
      Quick and clear answers to common queries about our taxi and tour services.
          </p>

          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="/gallery/faq.webp"
              alt="FAQ Image"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* RIGHT SIDE – ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg border border-gray-100 rounded-xl"
            >
              {/* Header */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center px-4 md:px-6 py-4 md:py-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                    ?
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                </div>

                {open === item.id ? (
                  <FiMinus className="text-gray-700 text-xl" />
                ) : (
                  <FiPlus className="text-gray-700 text-xl" />
                )}
              </button>

              {/* Content */}
              {open === item.id && (
                <div className="px-6 md:px-10 pb-4 md:pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "What services does Guru Nanak Tours & Travels provide?",
    answer:
      "Guru Nanak Tours & Travels provides reliable transportation solutions for government departments, healthcare institutions, and corporate organizations, with a focus on safe, comfortable, and efficient travel.",
  },
  {
    id: 2,
    question: "How long has Guru Nanak Tours & Travels been in business?",
    answer:
      "We have been serving the transportation industry since 2005, building our reputation through professional service, reliable operations, and a strong commitment to customer satisfaction.",
  },
  {
    id: 3,
    question: "Does Guru Nanak Tours & Travels provide corporate and government transport?",
    answer:
      "Yes, we specialize in transportation solutions for government departments, healthcare institutions, and corporate organizations, tailored to their official and institutional travel requirements.",
  },
  {
    id: 4,
    question: "Why choose Guru Nanak Tours & Travels?",
    answer:
      "With experience since 2005, we prioritize safety, punctuality, professionalism, and dependable service. Our goal is to build long-term relationships by delivering transportation solutions that meet our clients' needs.",
  },

];

export default function FaqSection() {
  const [open, setOpen] = useState(1);

const toggle = (id) => {
  setOpen(open === id ? null : id);

  };

  return (
    <section className="w-full bg-white py-16 md:py-20 xl:mt-9">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-500 md:text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Guru Nanak Tours & Travels{" "}
            <span className="text-yellow-500">FAQs</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-500">
            Find answers to common questions about our transportation
            services, corporate travel solutions, government transport,
            and institutional requirements. Serving clients with trust
            and commitment since 2005.
          </p>

          <div className="w-full overflow-hidden rounded-xl">
            <img
              src="/gallery/faq.webp"
              alt="Guru Nanak Tours & Travels transportation services"
              width={600}
              height={400}
              loading="lazy"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE - ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={open === item.id}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left md:px-6 md:py-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
                    ?
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900 md:text-lg">
                    {item.question}
                  </h3>
                </div>

                {open === item.id ? (
                  <FiMinus className="shrink-0 text-xl text-gray-700" />
                ) : (
                  <FiPlus className="shrink-0 text-xl text-gray-700" />
                )}
              </button>

              {/* Answer */}
              {open === item.id && (
                <div className="px-5 pb-5 pl-16 text-sm leading-relaxed text-gray-600 md:pl-20 md:text-base">
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
"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do you provide emergency locksmith services?",
    answer:
      "Yes! We offer 24/7 emergency locksmith services for homes, offices, and vehicles. Our team responds quickly to any lockout or urgent situation.",
  },
  {
    question: "Can you make duplicate keys for my home and car?",
    answer:
      "Absolutely. We specialize in key duplication for all types of locks, including house keys, car keys, and high-security keys.",
  },
  {
    question: "Do you install advanced security systems?",
    answer:
      "Yes, we provide installation of smart locks, CCTV systems, and other advanced security solutions to ensure maximum protection for your property.",
  },
  {
    question: "How long does it take to repair a lock?",
    answer:
      "Most lock repairs are completed within 30-60 minutes depending on the complexity. Our technicians ensure precise and reliable service every time.",
  },
  {
    question: "Do you offer ignition repair for vehicles?",
    answer:
      "Yes, we provide professional ignition repair and replacement services for cars, motorcycles, and scooters to get you back on the road quickly.",
  },
  {
    question: "Are your locksmiths certified and experienced?",
    answer:
      "All our locksmiths are certified professionals with years of experience in residential, commercial, and automotive locksmith services.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide locksmith services in the local community and surrounding areas. Contact us to confirm service availability in your location.",
  },
  {
    question: "Do you charge hidden fees?",
    answer:
      "No, we believe in transparent pricing. All costs are communicated upfront with no hidden charges.",
  },
  {
    question: "Can you replace broken keys or lock parts?",
    answer:
      "Yes, we offer key cutting, broken key extraction, and replacement of lock components with professional-grade tools.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can call us directly or book an appointment through our website. We provide flexible scheduling to suit your needs.",
  },
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([0, 1]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-[#f9fafb] text-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#F9C643] uppercase text-sm font-semibold tracking-wide mb-2">
          Common Questions
        </p>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
          Frequently Asked Questions <br /> About Our Locksmith Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0A2540] text-white rounded-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-[16px] focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndexes.includes(index) ? (
                  <FaChevronUp className="text-[#F9C643]" />
                ) : (
                  <FaChevronDown className="text-[#F9C643]" />
                )}
              </button>

              {openIndexes.includes(index) && (
                <div className="bg-gray-100 text-gray-700 px-5 py-4 text-justify text-sm transition-all duration-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

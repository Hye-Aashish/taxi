"use client";
import { MessageSquare, Mail, LifeBuoy, BookOpen } from "lucide-react";

const supportItems = [
  {
    title: "Customer Support",
    description:
      "Get reliable locksmith support anytime! K.K All Keys Maker offers quick, affordable, and professional assistance for all key and lock issues.",
    icon: <MessageSquare className="w-8 h-8 text-[#1E3A8A]" />,
    buttonText: "CHAT NOW",
    buttonColor: "bg-[#FBBF24]",
    highlighted: true,
  },
  {
    title: "Ticket Support",
    description:
      "Get in touch with **K.K All Keys Maker** for quick locksmith assistance. Use our **Ticket Support** system for fast issue resolution, key replacement, and emergency lock services anytime, anywhere.",
    icon: <Mail className="w-8 h-8 text-[#1E3A8A]" />,
    buttonText: "SEND TICKET",
    buttonColor: "bg-[#FBBF24]",
  },
  {
    title: "Technical Support",
    description:
      "Need help with your locks or keys? Contact K.K All Keys Maker for expert technical support, fast assistance, and reliable locksmith solutions. We're available 24/7 to solve your security issues.",
    icon: <LifeBuoy className="w-8 h-8 text-[#1E3A8A]" />,
    buttonText: "CHAT NOW",
    buttonColor: "bg-[#FBBF24]",
  },
  {
    title: "Free Insight",
    description:
      "Get a **free insight** from **K.K All Keys Maker**! Contact us today for expert locksmith solutions, key duplication, lock repair, and emergency support — fast, reliable, and trusted service!",
    icon: <BookOpen className="w-8 h-8 text-[#1E3A8A]" />,
    buttonText: "READ ARTICLE",
    buttonColor: "bg-[#FBBF24]",
  },
];

export default function SupportSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-12 px-4">
        <p className="text-yellow-500 uppercase tracking-widest font-medium">
          Need more help?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our team is ready to provide
          <br className="hidden sm:block" /> expert solutions.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-8 rounded-xl shadow-lg transition-all duration-300 ${
              item.highlighted
                ? "bg-[#305C8E] text-white"
                : "bg-white text-gray-800 hover:shadow-xl"
            }`}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-[#FBBF24] rounded mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p
              className={`text-sm leading-relaxed ${
                item.highlighted ? "text-gray-100" : "text-gray-500"
              } mb-6`}
            >
              {item.description}
            </p>
            <button
              className={`px-6 py-2 rounded text-sm font-medium text-gray-900 ${item.buttonColor}`}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

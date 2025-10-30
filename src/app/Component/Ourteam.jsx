"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function TeamSection() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-wide mb-3">
            Our Team
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3353] mb-6 leading-snug">
            Meet the Experts <br /> Behind K.K All Keys Maker
          </h2>

          <p className="text-gray-500 mb-6">
            Our certified locksmiths combine years of experience with modern tools and techniques to provide reliable key making, lock repair, and security solutions for homes, offices, and vehicles.
          </p>

          <ul className="space-y-4">
            {[
              "Certified locksmiths with extensive residential, commercial, and automotive expertise.",
              "Quick response and reliable solutions for all lock and key emergencies.",
              "Available 24/7 to assist you anytime, anywhere.",
              "Committed to safety, security, and customer satisfaction.",
              "Up-to-date with latest smart lock and security technologies.",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-start gap-3 border-b border-gray-200 pb-2"
              >
                <FiCheck className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full h-full flex justify-center">
          <img
            src="/img/aboutimg2.webp" // 🟡 Replace with your image path
            alt="Locksmith at work"
            width={600}
            height={600}
            className="rounded-lg shadow-md object-cover"
          />

          {/* EXPERIENCE BADGE */}
          <div className="absolute bottom-[-50px] left-[-20px] bg-[#1a3353] text-white px-8 py-6 rounded-lg shadow-lg border border-dashed border-white">
            <p className="text-7xl font-semibold text-[#ffa41b] text-center">15+</p>
            <p className="text-md mt-1 font-medium tracking-wide text-center">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

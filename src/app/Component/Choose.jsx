"use client";

import { KeyRound, ShieldCheck, Wrench, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Choose() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-32">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="/img/aboutimg.webp" // replace with your image path
            alt="Locksmith"
            width={600}
            height={500}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="xl:mb-16 xl:pb-16">
          <p className="text-yellow-500 font-semibold mb-2 uppercase tracking-wide">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
          Why Choose K.K All Keys Maker for Locksmith Services
          </h2>

          <p className="text-gray-600 mb-6">
           We provide fast, reliable, and professional locksmith services for homes, offices, and vehicles. Our skilled technicians ensure accurate key making, secure lock repairs, ignition services, and 24/7 emergency assistance for complete peace of mind.
          </p>
          
        

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded transition-all duration-200">
            Learn More →
          </button>
        </div>
      </div>

      {/* BOTTOM FLEX CARDS (full width) */}
     <div className="flex flex-wrap justify-center gap-4 lg:justify-evenly xl:mt-[-100px] xl:pl-20 mt-12 ">
  {/* Card 1 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1 min-w-[220px] lg:max-w-[260px] hover:shadow-lg transition">
    <KeyRound className="mx-auto text-yellow-500 w-10 h-10 mb-3" />
    <h3 className="font-semibold text-gray-900">
      Certified Locksmith Experts
    </h3>
    <p className="text-gray-500 text-sm mt-2">
      Our trained professionals provide accurate key cutting, lock repairs, and ignition services with utmost precision.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-yellow-500 shadow-md rounded-lg p-6 text-center text-white flex-1 min-w-[220px] lg:max-w-[260px] hover:bg-yellow-600 transition">
    <ShieldCheck className="mx-auto w-10 h-10 mb-3" />
    <h3 className="font-semibold">Advanced Security Solutions</h3>
    <p className="text-white/90 text-sm mt-2">
      We install and maintain high-security locks, digital access systems, and smart locking solutions for full protection.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1 min-w-[220px] lg:max-w-[260px] hover:shadow-lg transition">
    <Wrench className="mx-auto text-yellow-500 w-10 h-10 mb-3" />
    <h3 className="font-semibold text-gray-900">
      High-Quality Equipment
    </h3>
    <p className="text-gray-500 text-sm mt-2">
      We use top-notch tools and modern techniques to ensure reliable key making and lock repair services.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1 min-w-[220px] lg:max-w-[260px] hover:shadow-lg transition">
    <MessageSquare className="mx-auto text-yellow-500 w-10 h-10 mb-3" />
    <h3 className="font-semibold text-gray-900">
      Professional & Friendly Support
    </h3>
    <p className="text-gray-500 text-sm mt-2">
      Our customer support team is ready to assist with any locksmith emergencies and queries, anytime.
    </p>
  </div>
</div>

    </section>
  );
}

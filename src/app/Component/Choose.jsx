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
            src="/img/choosemee.webp" 
            alt="Taxi Service"
            width={600}
            height={500}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="xl:mb-16 xl:pb-16">
          <p className="text-[#ffd101] font-semibold mb-2 uppercase tracking-wide">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Your Trusted Taxi Partner for Safe & Comfortable Travel
          </h2>

          <p className="text-gray-600 mb-6">
            At Setia Tour and Travels, we ensure your journey is smooth, safe, and stress-free. 
            Whether it's a local ride, an outstation trip, or long-distance travel like 
            Chandigarh to Manali or Delhi, we offer reliable service with clean cars 
            and experienced drivers.
          </p>

          <button className="bg-[#ffd101] hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded transition-all duration-200">
            Learn More →
          </button>
        </div>
      </div>

      {/* BOTTOM FLEX CARDS */}
      <div className="flex flex-wrap justify-center gap-4 lg:justify-evenly xl:mt-[-100px] xl:pl-20 mt-12">

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1 min-w-[220px] lg:max-w-[260px] hover:shadow-lg transition">
          <KeyRound className="mx-auto text-[#ffd101] w-10 h-10 mb-3" />
          <h3 className="font-semibold text-gray-900">
            Reliable & On-Time Pickup
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            We respect your time. Our drivers always arrive promptly for a smooth and timely journey.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ffd101] shadow-md rounded-lg p-6 text-center text-white flex-1 min-w-[220px] lg:max-w-[260px] hover:bg-yellow-600 transition">
          <ShieldCheck className="mx-auto w-10 h-10 mb-3" />
          <h3 className="font-semibold">Clean & Comfortable Cars</h3>
          <p className="text-white/90 text-sm mt-2">
            Enjoy a safe, spacious, and comfortable ride in our well-maintained Sedans and SUVs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1 min-w-[220px] lg:max-w-[260px] hover:shadow-lg transition">
          <Wrench className="mx-auto text-[#ffd101] w-10 h-10 mb-3" />
          <h3 className="font-semibold text-gray-900">
            Affordable & Transparent Pricing
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            No hidden charges—only clear, budget-friendly fares for all routes and packages.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1 min-w-[220px] lg:max-w-[260px] hover:shadow-lg transition">
          <MessageSquare className="mx-auto text-[#ffd101] w-10 h-10 mb-3" />
          <h3 className="font-semibold text-gray-900">
            24/7 Support & Easy Booking
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Book anytime via call or WhatsApp. Our support team is available round the clock.
          </p>
        </div>

      </div>

    </section>
  );
}

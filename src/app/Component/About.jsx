'use client';

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden" id="about">

      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/img/aboutttbg.webp')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4 md:space-y-6 text-justify lg:text-left">

          {/* SMALL TITLE */}
          <p className="text-gray-900 font-semibold tracking-widest flex items-center gap-2 justify-start text-justify lg:justify-start">
            <span className="w-2 h-2 bg-yellow-500 rounded-sm"></span>
            <span className="w-4 h-2 bg-yellow-500 rounded-sm"></span>
            About Us
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug text-justify lg:text-left">
        Any Taxi, Any Time, Any Way 
            <br className="hidden md:block" /> All India Taxi Services 
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify">
           Setia Tour and Travels has been serving travelers with reliable and affordable taxi services across India. Our mission is to make your journey safe, comfortable, and enjoyable. From Chandigarh to Manali or Delhi, and anywhere across India, we ensure hassle-free travel.
          </p>

         {/* CALL + BUTTON */}
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-start gap-6 pt-4 w-full">

  {/* Phone Box */}
  <div className="flex items-center gap-3 text-justify w-full lg:w-auto">
    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
      <Phone size={22} className="text-white" />
    </div>

    <div className="w-full text-justify lg:text-left">
      <p className="text-gray-500 text-sm">Emergency Call Us</p>
      <p className="text-xl font-bold text-gray-900">+91-8847670935</p>
    </div>
  </div>

  {/* Button */}
  <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-4 flex justify-center items-center gap-2 shadow-md hover:bg-yellow-500 transition rounded-md w-max text-justify md:px-8 md:py-4">
    ABOUT MORE
    <ArrowRight size={18} />
  </button>

</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center">
          <div className="relative rounded-2xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/img/01.webp"
              alt="Car rental service"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
      id="about"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/img/aboutttbg.webp')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4 md:space-y-6 text-justify lg:text-left">

          {/* SMALL TITLE */}
          <p className="text-gray-900 font-semibold tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-sm" />
            <span className="w-4 h-2 bg-yellow-500 rounded-sm" />
            About Guru Nanak Tours & Travels
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
            Your Trusted Transport Partner Since 2005
          </h2>

          {/* DESCRIPTION */}
          <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              Guru Nanak Tours & Travels is a trusted name in the transport
              industry of Punjab. Since 2005, we have been providing safe,
              reliable and efficient transport solutions to Government
              Departments, Healthcare Institutions and Corporate Organizations.
            </p>

            <p>
              Our commitment to quality service, timely operations and customer
              satisfaction has made us a preferred transport partner for
              official and institutional requirements.
            </p>
          </div>

          {/* CALL + BUTTON */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 w-full">

            {/* Phone Box */}
            <a
              href="tel:+917973841893"
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-yellow-500 flex items-center justify-center">
                <Phone size={22} className="text-white" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Call For Enquiries
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-900">
                  +91-9876239897
                </p>
              </div>
            </a>

         

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center">
          <div className="relative rounded-2xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/img/about_driver.jpg"
              alt="Guru Nanak Tours and Travels transport services"
              width={600}
              height={650}
              className="object-cover w-full h-auto shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
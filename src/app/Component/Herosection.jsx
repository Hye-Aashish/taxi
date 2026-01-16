"use client";

import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white h-[65vh] md:h-[75vh] xl:h-[85vh] overflow-hidden" id="home">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/road.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-7 md:px-12 lg:px-20 xl:px-28 h-full flex flex-col lg:flex-row items-center lg:justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left mt-14 lg:mt-0 animate-fadeIn">

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-extrabold leading-tight drop-shadow-md">
            SETIA TOUR AND TRAVELS <br />
            <span className="text-[#ffd101]">Your Trusted Travel Partner</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-5 mb-8 text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Setia Tour and Travels provides safe, comfortable and affordable taxi services across India.
            Whether it's a city ride, airport drop, or outstation trip – our professional drivers and
            well-maintained cars ensure a smooth and enjoyable journey.
          </p>

          <button className="bg-[#ffd101] text-black font-semibold px-7 py-3 shadow-lg hover:bg-[#ffb301] transition flex items-center gap-2 mx-auto lg:mx-0 rounded-full">
            BOOK YOUR RIDE <ArrowUpRight size={20} />
          </button>
        </div>

        {/* RIGHT CAR IMAGE */}
        <div className="relative mt-10 lg:mt-0 animate-fadeUp">
          <img
            src="/img/herocar.webp"
            alt="Taxi Car"
            className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[520px] rounded-2xl shadow-2xl carFloat"
          />
        </div>
      </div>

      {/* Bottom Road Pattern */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img
          src="/img/pattern.webp"
          alt="Moving Road"
          className="w-full  h-full object-cover opacity-70"
        />
      </div>

      {/* Animations */}
      <style>{`
        .carFloat {
          animation: floatUpDown 3s ease-in-out infinite,
                     carSideMove 6s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }

        @keyframes carSideMove {
          0% { transform: translateX(15px); }
          50% { transform: translateX(-15px); }
          100% { transform: translateX(15px); }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 1.2s ease-out forwards;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </section>
  );
}

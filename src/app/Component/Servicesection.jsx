"use client";
import Image from "next/image";
import { FaTaxi, FaUserTie, FaMapMarkerAlt } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-16 lg:py-24">

      {/* BACKGROUND GRADIENT DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-yellow-500/10 rounded-full blur-3xl -top-10 -left-10" />
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-yellow-400/10 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      {/* SHAPE BACKGROUND */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/shape-6.webp')" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fadeIn text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug drop-shadow-md">
            Premium & Reliable{" "}
            <span className="text-yellow-400">Taxi Services</span>
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Enjoy safe, comfortable and on-time travel with our trusted taxi
            service. Whether it's a long trip, airport drop, or city ride — we
            deliver quality, convenience, and satisfaction on every journey.
          </p>

          {/* IMAGE */}
          <div className="relative group w-full flex justify-center">
            <img
              src="/img/choosemee.webp"
              width={650}
              height={380}
              className="rounded-2xl shadow-2xl w-full max-w-[550px] group-hover:scale-[1.02] transition-all duration-300"
              alt="Taxi Service"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-8 animate-slideUp">

          {[
            {
              id: "01",
              title: "Top Quality Cars",
              desc: "Clean, comfortable and well-maintained cars for every type of customer.",
              Icon: FaTaxi,
            },
            {
              id: "02",
              title: "Professional Drivers",
              desc: "Experienced and trained drivers ensuring a smooth, safe and stress-free ride.",
              Icon: FaUserTie,
            },
            {
              id: "03",
              title: "Service Across India",
              desc: "Available anytime with fast pickup and drop service in multiple cities.",
              Icon: FaMapMarkerAlt,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-7 md:p-10 
              border border-white/20 shadow-xl 
              hover:shadow-yellow-500/20 transition-all duration-300 
              hover:scale-[1.03] hover:bg-white/20"
            >
              <div className="flex items-start gap-5 md:gap-6">
                <div className="bg-yellow-400 p-4 md:p-5 rounded-full shadow-lg">
                  <item.Icon className="text-2xl md:text-3xl text-black" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* NUMBER TAG */}
              <span className="absolute right-6 top-6 text-yellow-400 text-4xl md:text-5xl font-extrabold opacity-30">
                {item.id}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

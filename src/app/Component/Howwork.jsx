"use client";

import {
  Binoculars,
  Target,
  ShieldCheck,
  Users,
  CarFront,
  Clock,
} from "lucide-react";

export default function Choose() {
  const visionPoints = [
    {
      icon: <Binoculars className="w-9 h-9 text-[#ffb21a]" />,
      title: "Our Vision",
      text: "To be the most trusted and preferred transport partner for individuals, government departments, and corporate organizations by delivering excellence, comfort, and reliability in every journey.",
    },
  ];

  const missionPoints = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ffb21a] shrink-0 mt-1" />,
      text: "Provide safe, reliable, and timely transportation services for every customer.",
    },
    {
      icon: <CarFront className="w-5 h-5 text-[#ffb21a] shrink-0 mt-1" />,
      text: "Maintain a clean, comfortable, and well-maintained fleet with professional drivers.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ffb21a] shrink-0 mt-1" />,
      text: "Ensure 24/7 availability, transparent pricing, and dependable customer support.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#ffb21a] shrink-0 mt-1" />,
      text: "Build long-term relationships through trust, customer satisfaction, and commitment to service excellence.",
    },
  ];

  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-white px-5 py-16 xl:pt-0 sm:px-8 md:py-20 lg:px-16 xl:px-24"
    >
      {/* Subtle background decoration */}
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#ffa41b]/5 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#00193d]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d99000]">
            Our Purpose & Commitment
          </p>

          <h2 className="text-3xl font-bold uppercase tracking-wide text-[#00193d] sm:text-4xl lg:text-5xl">
            Vision <span className="text-[#ffa41b]">&</span> Mission
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ffa41b]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Driving every journey with a clear vision, a strong mission,
            and an unwavering commitment to safe and reliable transportation.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Vision */}
          {visionPoints.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_35px_rgba(0,25,61,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,25,61,0.12)] sm:p-8 lg:p-10"
            >
              <div className="flex items-start gap-5 sm:gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00193d] shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-[#d99000] sm:text-2xl">
                    {item.title}
                  </h3>

                  <div className="mb-4 h-1 w-12 rounded-full bg-[#ffa41b]" />

                  <p className="text-sm leading-7 text-gray-700 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-5">
                <p className="text-sm font-medium italic text-[#00193d]">
                  Your journey, our commitment to excellence.
                </p>
              </div>
            </div>
          ))}

          {/* Mission */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_35px_rgba(0,25,61,0.07)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,25,61,0.12)] sm:p-8 lg:p-10">
            <div className="flex items-center gap-5 sm:gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00193d] shadow-lg sm:h-20 sm:w-20">
                <Target className="h-9 w-9 text-[#ffb21a]" />
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-[#d99000] sm:text-2xl">
                  Our Mission
                </h3>
                <div className="mt-3 h-1 w-12 rounded-full bg-[#ffa41b]" />
              </div>
            </div>

            <div className="mt-7 space-y-5">
              {missionPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.icon}

                  <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-xl bg-[#00193d] px-6 py-6 text-center sm:px-10">
          <h3 className="text-lg font-semibold text-white sm:text-xl">
            Every Mile Matters. Every Customer Counts.
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-300">
           We strive to build long-term relationships through trust, dedicated service, and dependable transportation solutions tailored to the unique needs of every client.
          </p>
        </div>
      </div>
    </section>
  );
}
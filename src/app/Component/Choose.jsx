"use client";

import {
  ShieldCheck,
  Clock,
  Users,
  CarFront,
  BadgeCheck,
  Star,
  FileCheck,
  Building2,
  Route,
  Headset,
  CalendarCheck,
  ClipboardCheck,
  BriefcaseBusiness,
} from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: CalendarCheck,
    title: "Reliable & On-Time Service",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Journeys",
  },
  {
    icon: Users,
    title: "Experienced Professional Team",
  },
  {
    icon: CarFront,
    title: "Well-Maintained Fleet",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Trained Drivers",
  },
  {
    icon: Clock,
    title: "Flexible Travel Solutions",
  },
  {
    icon: Route,
    title: "Local & Outstation Trips",
  },
];

const governmentServices = [
  {
    icon: FileCheck,
    title: "Long-Term Transport Contracts",
  },
  {
    icon: Building2,
    title: "Corporate & Institutional Travel",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Vehicle Arrangements",
  },
  {
    icon: Route,
    title: "Local, Intercity & Outstation Travel",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Official Transportation",
  },
  {
    icon: ClipboardCheck,
    title: "Professional Booking Management",
  },
];

export default function Choose() {
  return (
    <section
      id="why-choose-us"
      className="bg-white px-5 py-16 md:px-10 md:py-20 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#d9a441]" />

            <Image
              src="/img/choose_travel.jpg"
              alt="Guru Nanak Tours and Travels taxi and transportation services"
              width={700}
              height={600}
              priority
              className="relative z-10 h-[320px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px] lg:h-[500px]"
            />

            <div className="absolute -bottom-5 -right-3 z-20 rounded-xl bg-[#00193d] p-5 text-white shadow-xl sm:right-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-10 w-10 text-[#e6b74c]" />
                <div>
                  <p className="text-lg font-bold">
                    Travel With Confidence
                  </p>
                  <p className="text-sm text-white/80">
                    Comfort, safety & reliability
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-3xl border-b-4 border-l-4 border-[#d9a441]" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-4 lg:pt-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#d9a441]" />
              <p className="text-sm font-bold uppercase tracking-[2px] text-[#00193d]">
                Why Choose Us
              </p>
            </div>

            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#00193d] sm:text-4xl lg:text-[42px]">
              Your Trusted Partner for Comfortable & Reliable Travel
            </h2>

            <p className="mb-7 text-base leading-7 text-gray-600">
              Guru Nanak Tours & Travels is committed to providing safe,
              comfortable and dependable transportation solutions. From
              airport transfers and local taxi services to corporate travel
              and outstation journeys, we focus on professional service,
              punctual pickups and a smooth travel experience.
            </p>

            {/* WHY CHOOSE US LIST */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00193d] text-white transition-all duration-300 group-hover:bg-[#d9a441] group-hover:text-[#00193d]">
                      <Icon size={19} />
                    </div>

                    <p className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#00193d] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#d9a441] hover:text-[#00193d]"
            >
              Know More
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* SERVICE HIGHLIGHTS */}
        <div className="relative z-20 mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* CARD 1 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00193d] text-white transition-colors group-hover:bg-[#d9a441] group-hover:text-[#00193d]">
              <Clock size={27} />
            </div>

            <h3 className="mb-2 font-bold text-[#00193d]">
              On-Time Pickup
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              Punctual pickup and drop services designed around your travel
              schedule.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-xl border border-[#00193d] bg-[#00193d] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#00193d] transition-colors group-hover:bg-[#d9a441]">
              <ShieldCheck size={27} />
            </div>

            <h3 className="mb-2 font-bold text-white">
              Safety First
            </h3>

            <p className="text-sm leading-6 text-white/80">
              Comfortable journeys with a focus on responsible driving and
              vehicle upkeep.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00193d] text-white transition-colors group-hover:bg-[#d9a441] group-hover:text-[#00193d]">
              <CarFront size={27} />
            </div>

            <h3 className="mb-2 font-bold text-[#00193d]">
              Quality Fleet
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              Travel options to suit airport transfers, family trips,
              business travel and outstation journeys.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00193d] text-white transition-colors group-hover:bg-[#d9a441] group-hover:text-[#00193d]">
              <Headset size={27} />
            </div>

            <h3 className="mb-2 font-bold text-[#00193d]">
              Booking Assistance
            </h3>

            <p className="text-sm leading-6 text-gray-600">
              Get help with trip planning, vehicle selection and travel
              arrangements.
            </p>
          </div>
        </div>

        {/* GOVERNMENT & CORPORATE EXPERIENCE */}
        <div className="mt-20 grid grid-cols-1 gap-10 rounded-2xl bg-gray-50 p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-12">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#d9a441]" />
              <p className="text-sm font-bold uppercase tracking-[2px] text-[#00193d]">
                Transport Solutions
              </p>
            </div>

            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#00193d] sm:text-4xl">
              Government, Corporate & Institutional Travel
            </h2>

            <p className="mb-7 leading-7 text-gray-600">
              We offer flexible transportation arrangements for business
              organisations, institutions, official visits and group travel.
              Our focus is on organised bookings, dependable coordination
              and comfortable journeys tailored to each requirement.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {governmentServices.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 shrink-0 text-[#d9a441]">
                      <Icon size={20} />
                    </div>

                    <p className="text-sm font-medium leading-6 text-gray-700">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#00193d] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#d9a441] hover:text-[#00193d]"
            >
              Discuss Your Requirements
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <Image
              src="/img/choosemee.webp"
              alt="Professional travel and fleet transportation services"
              width={650}
              height={500}
              className="h-[300px] w-full rounded-xl object-cover shadow-lg sm:h-[400px]"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00193d] text-white">
                  <Star size={23} className="fill-[#d9a441] text-[#d9a441]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#00193d]">
                    Travel Made Simple
                  </h3>
                  <p className="text-sm text-gray-600">
                    Personal, business and group transportation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
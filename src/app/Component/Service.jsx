"use client";

import Link from "next/link";
import {
  Car,
  MapPin,
  Clock,
  Route,
  MessageSquare,
  Building2,
  Users,
  HeartPulse,
  Plane,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Government Vehicle Outsourcing",
    icon: Building2,
    image: "/taxiimg/front-left-side-47.webp",
    text: "Guru Nanak Tours & Travels provides dependable vehicle outsourcing services for government departments and public sector organizations. We offer well-maintained vehicles, professional drivers and reliable transportation support for daily official operations.",
  },
  {
    title: "Official Duty Vehicles",
    icon: ShieldCheck,
    image: "/taxiimg/2.webp",
    text: "Our official duty vehicle services are designed for government officers, departmental visits, inspections, meetings and administrative assignments. We focus on punctuality, passenger comfort and professional service.",
  },
  {
    title: "Employee Transportation",
    icon: Users,
    image: "/taxiimg/3.webp",
    text: "Ensure convenient and reliable employee transportation with flexible vehicle options for daily office commutes, staff pickup and drop-off, corporate travel and scheduled transportation requirements.",
  },
  {
    title: "Healthcare Transportation",
    icon: HeartPulse,
    image: "/taxiimg/front-left-side-47.webp",
    text: "We provide transportation support for healthcare institutions, hospital staff, administrative teams and scheduled institutional travel. Our focus is on dependable service, comfortable journeys and timely pickups.",
  },
  {
    title: "Airport Transfers",
    icon: Plane,
    image: "/taxiimg/2.webp",
    text: "Travel to and from the airport with convenient pickup and drop-off arrangements. Our airport transfer services are suitable for government officials, corporate travellers, families and individual passengers.",
  },
 
 
];

const whatsappNumber = "919876239897";

export default function Service() {
  return (
    <section className="bg-gray-100 py-16 md:py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#00193d]">
            Guru Nanak Tours & Travels
          </p>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Reliable Transport Solutions
            <span className="mt-2 block text-[#ffa41b]">
              For Every Requirement
            </span>
          </h2>

          <p className="text-sm leading-7 text-gray-600 md:text-base">
            Since 2005, Guru Nanak Tours & Travels has been providing
            transportation solutions for government departments, healthcare
            institutions, corporate organizations and individual travellers.
            Our services focus on safety, reliability, professional drivers
            and convenient travel arrangements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Card Header */}
                <div className="flex min-h-[76px] items-center gap-3 bg-[#00193d] p-4 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-5 w-5 text-[#ffa41b]" />
                  </div>

                  <h3 className="text-base font-bold leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Service Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-grow flex-col p-5">
                  <p className="flex-grow text-justify text-sm leading-7 text-gray-600">
                    {service.text}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4">
                    <Clock className="h-4 w-4 shrink-0 text-[#ffa41b]" />
                    <span className="text-xs font-medium text-gray-500">
                      Reliable • Professional • Convenient
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-gray-100 p-4">
                  <div className="flex gap-3">
                    <Link
                      href="#book-now"
                      className="flex flex-1 items-center justify-center rounded-lg bg-[#ffa41b] px-3 py-3 text-sm font-bold text-[#00193d] transition hover:bg-[#00193d] hover:text-white"
                    >
                      Enquire Now
                    </Link>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello Guru Nanak Tours & Travels, I would like to enquire about ${service.title}. Please share the details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${service.title} on WhatsApp`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      <MessageSquare className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Company Information */}
        <div className="mt-14 rounded-2xl bg-[#00193d] px-6 py-8 text-center text-white md:px-12 md:py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffa41b]">
            Your Trusted Transportation Partner
          </p>

          <h3 className="mb-5 text-2xl font-bold md:text-3xl">
            Reliable Service. Professional Travel. Since 2005.
          </h3>

          <p className="mx-auto mb-7 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
            Guru Nanak Tours & Travels is a trusted name in the transport
            industry of Punjab. Since 2005, we have been providing safe,
            reliable and efficient transport solutions to government
            departments, healthcare institutions, corporate organizations
            and individual customers. We aim to build long-term relationships
            through dependable service, comfortable vehicles and professional
            transportation management.
          </p>

          <Link
            href="#book-now"
            className="inline-flex items-center justify-center rounded-lg bg-[#ffa41b] px-7 py-3 font-bold text-[#00193d] transition hover:bg-white"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </div>
    </section>
  );
}
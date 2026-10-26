"use client";

import React from "react";
import Link from "next/link";
import {
  FaCar,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#00193d] sm:min-h-[580px] lg:min-h-[680px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner.webp')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-[#001329]/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001329]/95 via-[#001329]/75 to-transparent" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-16 text-center lg:py-24">
          <div className="w-full max-w-4xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-sm">
              <FaCar className="text-[#ffa41b]" />
              Trusted Transportation Partner Since 2005
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Reliable Transport Solutions for
              <span className="mt-2 block text-[#ffa41b]">
                Government & Corporate Needs
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-3xl px-2 text-base leading-7 text-gray-200 sm:text-lg md:text-xl">
              Guru Nanak Tours & Travels provides dependable vehicle
              outsourcing, official duty vehicles, employee transportation,
              healthcare transport and airport transfers. 
            </p>

            {/* Service Highlights */}
            <div className="mb-9 flex flex-wrap items-center justify-center gap-3 text-sm text-white sm:gap-5">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                Government Transport
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                Corporate Travel
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                Airport Transfers
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

              <Link
                href="#book-now"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#ffa41b] px-7 py-4 text-sm font-bold text-[#00193d] shadow-lg transition duration-300 hover:bg-white sm:px-9 sm:text-base"
              >
                Request a Transport Quote
                <FaArrowRight />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#00193d] sm:px-9 sm:text-base"
              >
                Explore Our Services
              </Link>

            </div>

      

          </div>
        </div>
      </div>
    </section>
  );
}
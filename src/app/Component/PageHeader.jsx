"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

export default function PageHeader({ title, subtitle, breadcrumb = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#00193d] py-16 md:py-24 text-white">
      {/* Background Image with Dark & Gradient Overlays */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/img/banner.webp')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001329] via-[#00193d]/90 to-[#001329]/80" />

      {/* Subtle Pattern & Accents */}
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#ffa41b]/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffa41b]/10 blur-3xl pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
          {title}
        </h1>

        {/* Accent bar */}
        <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#ffa41b]" />

        {/* Subtitle */}
        {subtitle && (
          <p className="mx-auto max-w-2xl text-base text-gray-200 sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs sm:text-sm font-medium backdrop-blur-md"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-gray-200 hover:text-[#ffa41b] transition-colors"
          >
            <FaHome className="text-sm" />
            <span>Home</span>
          </Link>

          {breadcrumb.map((item, idx) => {
            const isLast = idx === breadcrumb.length - 1;
            return (
              <React.Fragment key={idx}>
                <FaChevronRight className="text-[10px] text-gray-400" />
                {isLast || !item.href ? (
                  <span className="text-[#ffa41b] font-semibold">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-[#ffa41b] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}


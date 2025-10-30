"use client";

import Image from "next/image";

export default function LocksmithHero() {
  return (
   <section
      className="relative bg-cover bg-center bg-no-repeat h-[60vh] lg:min-h-[80vh]"
      style={{
        backgroundImage: "url('/gallery/img9.webp')", // replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/30"></div>

      {/* Content */}
      <div className="relative flex items-center justify-start min-h-[80vh] px-6 lg:px-16 xl:px-32">
        <div className="max-w-xl  backdrop-blur-sm text-white p-8  border border-white/10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Need a Locksmith?<br />Request Immediate Assistance!
          </h1>
          <p className="text-gray-300 mb-6">
            Comprehensive Locksmith Services for Home, Office, and Vehicle"          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition-all">
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}

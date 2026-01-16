"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../Component/Footer";

function Page() {
  const router = useRouter();

  return (
    <>
    <div className="relative lg:min-h-screen w-full bg-cover bg-center px-5 md:px-12 xl:px-32 py-12 md:py-16 bg-[url('/img/road.webp')]">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center pt-16 rounded-xl max-w-3xl mx-auto">

        {/* GIF */}
       

        <div className="space-y-4 mt-6">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-xl">
            🎉 Thank You!
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Your submission has been received successfully.
          </p>

          <p className="text-sm md:text-base text-gray-300 mt-2">
            We appreciate your time. Our team will get back to you shortly.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">

          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="bg-[#2a3992] cursor-pointer group px-6 sm:px-8 py-3 text-white font-semibold text-sm relative overflow-hidden inline-flex items-center rounded-lg shadow-lg"
          >
            <span className="w-8 bg-[#2a3992] group-hover:w-full group-hover:right-0 duration-300 transition-all skew-x-[-22deg] absolute inset-y-0 -right-4 opacity-40 group-hover:opacity-100 group-hover:skew-0"></span>
            <span className="relative z-10">Go Back</span>
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="text-white border border-[#2a3992] hover:bg-[#2a3992] hover:text-white font-medium text-sm px-6 py-3 rounded-lg transition duration-300 shadow-lg"
          >
            Go Home
          </Link>

        </div>
      </div>
    </div>
 

    </>
  );
}

export default Page;

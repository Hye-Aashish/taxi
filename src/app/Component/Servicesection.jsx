"use client";
import Image from "next/image";
import { Award } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-white xl:my-20 relative h-full  mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SECTION - Images */}
        <div className="relative grid grid-cols-2 gap-4">
          {/* Left Image (Shorter) */}
          <div className="relative flex flex-col justify-end">
            {/* Badge */}
            <div className="absolute -top-4 xl:-top-6 left-1/2 -translate-x-1/2 bg-[radial-gradient(at_top_center,#0a3d62_0%,#1e5799_100%)] text-center w-[90%] sm:w-[80%] lg:w-full py-3 sm:py-4 xl:py-5 rounded-lg shadow-lg flex items-center justify-center gap-3 px-2 text-justify">
              <Award className="w-10 h-10 sm:w-10 sm:h-10 text-white" />
              <div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl text-lg font-semibold text-white leading-none">15+</h3>
                <p className="text-white font-medium text-[10px] sm:text-xs mt-1 tracking-wide">
                  YEARS  EXPERIENCE
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mt-12 lg:mt-10 h-[250px] sm:h-[300px] md:h-[350px]">
              <img
                src="/gallery/img3.webp"
                alt="Locksmith working"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image (Taller) */}
          <div className="rounded-lg overflow-hidden h-[320px] sm:h-[400px] md:h-[480px] self-end">
            <img
              src="/gallery/img4.webp"
              alt="Lock installation"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SECTION - Text & Features */}
        <div className="flex flex-col space-y-6">
          <p className="text-yellow-500 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-gray-800 leading-tight">
           Reliable Locksmith Services: Keys, Locks, <br /> 
            <span className="text-gray-800">Ignition, Security, Emergency Solutions</span>
          </h2>

          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
           K.K All Keys Maker offers reliable, fast, and expert locksmith services, including key duplication, lock installation, ignition repair, emergency lockout solutions, and advanced security systems, ensuring safety and convenience for all customers.
          </p>

          <hr className="border-gray-200" />

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-[#ffa41b] p-3 sm:p-4 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354l1.76 3.562 3.94.572-2.85 2.78.673 3.923L12 13.77l-3.523 1.857.673-3.923-2.85-2.78 3.94-.572L12 4.354z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Fast Emergency Response</h3>
                <p className="text-gray-500 text-sm">
                 24/7 lockout and ignition repair services.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-[#ffa41b] p-3 sm:p-4 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h4m-2 0v12m6-6H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Expert Key & Lock Solutions</h3>
                <p className="text-gray-500 text-sm">
                 Accurate key duplication and lock installation.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-[#ffa41b] p-3 sm:p-4 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">High-Security Systems</h3>
                <p className="text-gray-500 text-sm">
                 Advanced locks and smart security solutions for homes, offices, and vehicles.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

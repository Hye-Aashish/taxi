"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  const services = [
    { title: "Car Lockout", href: "/" },
    { title: "Lock Rekeying", href: "/" },
    { title: "Lock Installation", href: "/" },
    { title: "Key Duplication", href: "/" },
    { title: "Ignition Repair", href: "/" },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="relative">
        <div className="hero-slider">
          <div className="slider-item">
            <div className="relative bg-image h-[150px] md:h-[300px] lg:h-[400px]">
              <img
                className="animated w-full h-full object-cover"
                src="/gallery/img8.webp"
                alt="Banner"
              />
             
            </div>
            <div className="absolute top-[30%] lg:top-[40%] px-5 md:px-28 w-full text-center">
              <h2 className="text-4xl font-medium text-[#ff7236]">Our Services</h2>
              <h3 className="xl:text-xl md:text-[50px] mt-4 leading-none text-white font-bold">
                K.K All Keys Maker: Reliable Locksmith & Vehicle Security Solutions
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-5 md:px-20 lg:px-32 py-20 lg:flex justify-center gap-10">
        {/* Left Column */}
        <div className="lg:order-1 order-2 text-[#003f72] w-full space-y-5 mb-8 lg:mt-0">
          <img
            src="/gallery/img9.webp"
            alt="Professional Locksmith Services"
            width={800}
            height={390}
            className="w-full h-auto md:h-[390px] object-cover rounded-[40px]"
          />

          <h1 className="font-bold text-xl md:text-2xl lg:text-[26px]">
            Fast & Secure Locksmith Services for Homes, Offices, & Vehicles
          </h1>
          <p className="text-base text-gray-500 leading-relaxed text-justify">
            At K.K All Keys Maker, we provide professional locksmith services ensuring security, convenience, and peace of mind. Our expert team handles lock repairs, key duplication, ignition repairs, and installations efficiently.
          </p>

          <p className="text-base text-gray-500 leading-relaxed text-justify">
            Reliable Solutions for Any Lock & Key Challenge
          </p>

          <div className="flex items-center gap-8">
            <img
              src="/img/img.webp"
              alt="Locksmith at Work"
              width={400}
              height={250}
              className="w-full md:w-[300px] lg:w-[400px] h-auto md:h-[250px] rounded-[40px] object-cover"
            />
            <img
              src="/img/img1.webp"
              alt="Locksmith Equipment"
              width={400}
              height={250}
              className="hidden md:block w-[300px] lg:w-[400px] h-[250px] rounded-[40px] object-cover"
            />
          </div>

          <p className="text-base text-gray-500 leading-relaxed text-justify">
            We take care of every lock and key with precision, using the latest tools and techniques to ensure fast, safe, and professional service.
          </p>

          <div>
            <h2 className="font-bold text-xl md:text-2xl lg:text-[26px] mb-5">
              Why Choose K.K All Keys Maker?
            </h2>
            <p className="text-base text-gray-500 leading-relaxed text-justify mb-5">
              Trusted by hundreds of customers, K.K All Keys Maker delivers top-quality locksmith services. We provide rapid response, reliable solutions, and exceptional customer support for homes, offices, and vehicles.
            </p>
            <ul className="text-base font-semibold space-y-4 mt-2">
              {[
                "Fast and reliable car & home lockout solutions",
                "Expert ignition repair and key duplication services",
                "Professional lock installation and security upgrades",
                "24/7 emergency locksmith services",
                "Residential, commercial, and automotive expertise",
                "Certified and experienced locksmith professionals"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Sticky Services */}
        <div className="grid grid-cols-1 lg:sticky top-28 h-max space-y-4 rounded-lg lg:w-1/2">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="flex items-center justify-between rounded-lg px-6 py-3 group bg-slate-50 hover:bg-[#ff6900] transition-all duration-300"
            >
              <h3 className="group-hover:text-white text-[#003f72] text-base font-semibold tracking-wide">
                {service.title}
              </h3>
              <div className="relative flex items-center justify-center rounded-full bg-white text-[#003f72] group-hover:bg-[#ff6900] group-hover:text-white px-4 py-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

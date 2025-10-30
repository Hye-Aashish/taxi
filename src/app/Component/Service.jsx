"use client";
import Image from "next/image";
import { Lock, Car, Key, Wrench, Copy, Cog } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "House Lockout",
    icon: <Lock className="w-5 h-5 text-[#ffa41b]" />,
    image: "/gallery/img8.webp",
    text: "Locked out of your home? K.K All Keys Maker provides fast, reliable house lockout services, ensuring safe entry anytime, anywhere.",
  },
  {
    title: "Car Lockout",
    icon: <Car className="w-5 h-5 text-[#ffa41b]" />,
    image: "/gallery/img7.webp",
    text: "Locked out of your car? K.K All Keys Maker provides fast, reliable, 24/7 car lockout assistance to get you back inside safely.",
  },
  {
    title: "Lock Rekeying",
    icon: <Key className="w-5 h-5 text-[#ffa41b]" />,
    image: "/gallery/img1.webp",
    text: "K.K All Keys Maker provides professional lock rekeying services, enhancing security by changing lock configurations without replacing the entire lock.",
  },
  {
    title: "Lock Installation",
    icon: <Wrench className="w-5 h-5 text-[#ffa41b]" />,
    image: "/img/img1.webp",
    text: "K.K All Keys Maker provides professional lock installation services, ensuring your home, office, or vehicle stays secure and protected.",
  },
  {
    title: "Key Duplication",
    icon: <Copy className="w-5 h-5 text-[#ffa41b]" />,
    image: "/img/img2.webp",
    text: "K.K All Keys Maker offers precise, fast key duplication for homes, offices, and vehicles, ensuring secure, reliable, and convenient access.",
  },
  {
    title: "Ignition Repair",
    icon: <Cog className="w-5 h-5 text-[#ffa41b]" />,
    image: "/img/img.webp",
    text: "Expert ignition repair services for cars, motorcycles, and scooters. Quick, reliable, and professional solutions to get your vehicle starting smoothly.",
  },
];

export default function Service() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-yellow-500 font-semibold uppercase text-sm mb-2">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Partner with K.K All Keys Maker  <br />for a Stronger Connection.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              {/* Header */}
              <div className="bg-[radial-gradient(at_top_center,#0a3d62_0%,#1e5799_100%)] p-4 flex items-center gap-2 text-white font-semibold">
                {service.icon}
                <span>{service.title}</span>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-justify flex-grow">
                <p className="text-gray-600 text-sm opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {service.text}
                </p>
              </div>

              {/* Button (Always visible on mobile, hover on larger screens) */}
           <Link href="/detail-service"> <div
                className="border-t border-gray-200 p-4 text-justify 
                opacity-100 translate-y-0 
                sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-5 sm:group-hover:translate-y-0 
                transition-all duration-500"
              >
                <button className="w-full sm:w-auto px-4 py-2 bg-[#ffa41b] text-gray-800 font-medium text-sm rounded-md hover:bg-yellow-500 transition">
                  Learn More →
                </button>
              </div></Link> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

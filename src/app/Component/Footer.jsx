"use client";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full font-sans text-white ">
      {/* Top Contact Section */}
      <div className="bg-[#F9C643] text-black flex flex-col lg:flex-row lg:justify-between lg:items-center px-5 md:px-10 lg:px-16 xl:px-32 py-6 gap-5 transition-all duration-300 ">
        {/* Email Support */}
        <div className="flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
          <div className="bg-[#0E1D2C] p-3 rounded-md shadow-md flex items-center justify-center">
            <FaEnvelope className="text-[#F9C643] text-lg md:text-xl" />
          </div>
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase">
              Email Support
            </p>
            <p className="text-sm md:text-lg font-medium">
             harshsetia140@gmail.com
            </p>
          </div>
        </div>

        {/* Customer Support */}
        <div className="flex items-center gap-3 bg-[#0E1D2C] px-6 md:px-10 py-4 rounded-md shadow-lg hover:bg-[#162B41] transition-all duration-300">
          <div className="p-3 rounded-md">
            <FaPhoneAlt className="text-white text-lg md:text-xl" />
          </div>
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase text-white">
              Customer Support
            </p>
            <p className="text-sm md:text-lg font-medium text-white">
              +91 88476 70935
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
          <div className="bg-[#0E1D2C] p-3 rounded-md shadow-md flex items-center justify-center">
            <FiMapPin className="text-[#F9C643] text-lg md:text-xl" />
          </div>
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase">
              Address
            </p>
            <p className="text-sm md:text-lg font-medium">
              62, Thanisandra, Bengaluru, Karnataka 560064
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#0E1D2C] px-5 md:px-10 lg:px-16 xl:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="">
              <img src="/logo.webp" alt="footerlogo" className="rounded-md w-38 xl:w-full" />
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Setia Tour and Travels offers premium taxi and travel services across India.
              Comfortable, safe, and reliable rides for city, airport, and outstation trips.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F9C643] hover:bg-[#ffa41b] text-[#0E1D2C] p-2 rounded-md shadow-md transition-all duration-300 hover:scale-110"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#F9C643]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {["Home", "About", "Services", "Blog", "Contact"].map((item, i) => (
                <li key={i} className="hover:text-[#F9C643] cursor-pointer transition-all">
                  <Link href={`#`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#F9C643]">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "City Taxi",
                "Airport Pickup & Drop",
                "Outstation Trips",
                "Package Tours",
                "Luxury Cars",
                "Tour Guides",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#F9C643] cursor-pointer transition-all">
                  <Link href={`/services`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#F9C643]">
              Support
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {["Help Center", "Send Ticket", "FAQ", "Travel Guide"].map(
                (item, i) => (
                  <li key={i} className="hover:text-[#F9C643] cursor-pointer transition-all">
                    <Link href={`/support`}>{item}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F9C643]">
              Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for latest offers, updates, and travel tips from Setia Tour and Travels.
            </p>
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-black bg-white rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none mb-3 sm:mb-0"
              />
              <button className="bg-[#F9C643] text-[#0E1D2C] text-sm font-semibold px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md flex items-center justify-center gap-2 hover:bg-[#ffa41b] transition-all duration-300 text-nowrap">
                <FaEnvelope /> SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col items-center text-gray-400 text-xs md:text-sm text-center gap-3 ">
          <p>
            Copyright © 2025 Setia Tour and Travels — Design by{" "}
            <a
              href="https://www.futuretouch.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F9C643] hover:underline"
            >
              Future IT Touch Pvt. Ltd ❤️
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

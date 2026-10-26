"use client";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full font-sans text-white">
      <div className="bg-[#0E1D2C] px-5 md:px-10 lg:px-16 xl:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <h2>
              <img src="/img/logo.png" alt="footerlogo" className="rounded-md w-42" />
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Guru Nanak Tours & Travels offers premium taxi and travel services across India.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white  text-[#0E1D2C] p-2 rounded-md shadow-md transition-all duration-300 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {["Home", "About", "Services", "Blog", "Contact"].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-all">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Government Vehicle Outsourcing",
                "Official Duty Vehicles",
                "Employee Transportation",
                "Healthcare Transportation",
                "Airport Transfers",
                
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-all">
                  <Link href={`#`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              Support
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {["Help Center", "Send Ticket", "FAQ", "Travel Guide"].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-all">
                  <Link href={`#`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
          

            {/* Email Subscription */}
            <div className="flex flex-col sm:flex-row w-full mb-6">
          <h3 className="text-lg md:text-xl font-semibold mb-0 text-white">
              Our Address
            </h3>
            </div>

            {/* Contact Info */}
         <div className="text-gray-300 space-y-2">
  <p className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-white" /> HL-460, Phase-9, Mohali, Punjab
  </p>
  <p className="flex items-center gap-2">
    <FaPhoneAlt className="text-white" /> 
    <a href="tel:+91-9876239897" className="hover:underline">+91-9876239897</a>
  </p>
  <p className="flex items-center gap-2">
    <FaEnvelope className="text-white" /> 
    <a href="mailto:gntt97@gmail.com" className="hover:underline">gntt97@gmail.com</a>
  </p>
</div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col items-center text-gray-400 text-xs md:text-sm text-center gap-3">
          <p>
            Copyright © 2025 Guru Nanak Tours & Travels {" "}
          
          
          </p>
        </div>
      </div>
    </footer>
  );
}

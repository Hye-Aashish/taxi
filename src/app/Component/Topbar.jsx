"use client";

import React from "react";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between bg-[#0B1D2E] text-white px-6 py-2 xl:px-32 text-sm">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiClock className="text-yellow-500" />
            <span>08:00 - 16:00</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-yellow-500" />
            <span>63977 54903</span>
          </div>
        </div>

        {/* Right section - Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-yellow-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaGoogle />
          </a>
        </div>
      </div>
    </>
  );
};

export default Topbar;

"use client";

import React from "react";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between bg-[#00193d] text-white px-6 py-2 xl:px-32 text-sm">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiClock className="text-white" />
            <span>08:00 - 16:00</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-white" />
            <span>+91-9876239897</span>
          </div>
        </div>

        {/* Right section - Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaGoogle />
          </a>
        </div>
      </div>
    </>
  );
};

export default Topbar;

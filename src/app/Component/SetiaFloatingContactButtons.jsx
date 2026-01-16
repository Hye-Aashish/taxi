"use client";

import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function SetiaFloatingContactButtons() {
  const phoneNumber = "+918847670935";
  const whatsappLink = `https://wa.me/918847670935?text=${encodeURIComponent(
    "Hello Setia Tour and Travels, I need travel assistance."
  )}`;

  return (
    <div aria-hidden={false}>
      {/* Container: fixed to bottom-right */}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 items-end">
        {/* Call button */}
        <a
          href={`tel:${phoneNumber}`}
          className="group flex items-center gap-3 bg-white text-gray-900 shadow-lg rounded-full hover:shadow-2xl transform transition-all duration-200 ease-in-out"
          aria-label={`Call ${phoneNumber}`}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-400 to-green-500 text-white shadow-md">
            <FaPhoneAlt size={22} />
          </span>
      
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center gap-3 bg-white text-gray-900 shadow-lg rounded-full  hover:shadow-2xl transform transition-all duration-200 ease-in-out"
          aria-label={`Chat on WhatsApp ${phoneNumber}`}
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-600 to-green-700 text-white shadow-md">
            <FaWhatsapp size={30} />
          </span>
    
        </a>

     
      </div>
    </div>
  );
}


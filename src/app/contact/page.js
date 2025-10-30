'use client';

import React, { useState } from 'react';
import SupportSection from '../Component/Supportsection';
import { FaArrowRight, FaEnvelopeOpen, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail, FiPhone, FiServer, FiUser, FiUserPlus } from 'react-icons/fi';

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Message submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Banner */}
    <section className="relative">
  <div className="hero-slider">
    <div className="slider-item relative">
      <div className="relative bg-image h-[150px] md:h-[300px] lg:h-[400px]">
        <img
          className="animated w-full h-full object-cover"
          src="/gallery/img8.webp"
          alt="Banner"
        />

        {/* Black Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <img
          src=""
          
          className="absolute top-0 left-0 md:-left-[72px] z-0 w-full h-[150px] md:h-full lg:h-[400px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="absolute top-[30%] lg:top-[40%] px-5 md:px-28 w-full z-[2]">
        <div className="text-white text-center relative">
          <h2 className="text-lg font-medium text-[#ff7236]">Contact Us</h2>
          <h3 className="text-2xl md:text-[50px] mt-4 leading-none text-white font-bold">
            Contact
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Support Section */}
      <SupportSection />

      {/* Contact Info + Form */}
      <div className="w-full px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-start">
          {/* Left Info Section */}
          <div>
            <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <span className="text-[#FD5523] font-semibold flex items-center gap-2 text-sm md:text-base">

                CONTACT FORM
              </span>
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Get in <span className="text-yellow-500">touch</span>
            </h2>

            <div className="space-y-6 mt-6">
              {/* Phone */}
              <div className="bg-[#002D3D] p-6 rounded-xl flex items-center gap-5 text-white">
                <div className="bg-white text-yellow-500 p-3 rounded-full text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm">Call To Question</p>
                  <p className="font-bold text-lg">
                    <a href="tel:063977 54903" className="hover:underline">
                      063977 54903
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#002D3D] p-6 rounded-xl flex items-center gap-5 text-white">
                <div className="bg-white text-yellow-500 p-3 rounded-full text-xl">
                  <FaEnvelopeOpen />
                </div>
                <div>
                  <p className="text-sm">Send E–Mail</p>
                  <p className="font-bold text-lg break-all">
                    kkallkeysmaker@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-[#002D3D] p-6 rounded-xl flex items-center gap-5 text-white">
                <div className="bg-white text-yellow-500 p-3 rounded-full text-xl">
                  <FaMapMarkedAlt />
                </div>
                <div>
                  <p className="text-sm">Visit Anytime</p>
                  <p className="font-bold text-lg">
                 62, Thanisandra Main Rd, Sri Balaji Krupa Layout, Yelahanka Hobli, Bengaluru, Karnataka 560064
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send message <span className="text-yellow-500">with us</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 outline-none"
                  />
                  <FiUserPlus className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 outline-none"
                  />
                  <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 outline-none"
                  />
                  <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 outline-none"
                  />
                  <FiPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Select Service */}
              {/* <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 outline-none appearance-none text-gray-700"
                >
                  <option value="">Select a Service</option>
                  <option value="xcfvgjhkjl">rdfghu</option>

                </select>
                <FiServer className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div> */}

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Message"
                required
                className="w-full border border-gray-300 rounded-md py-3 px-4 outline-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold hover:bg-yellow-600 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Message'} <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full px-4 py-10">
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299314!3d12.953945614011557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1751623275594!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Page;

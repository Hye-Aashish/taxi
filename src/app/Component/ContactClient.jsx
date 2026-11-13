"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaUser,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";
import { CheckCircle2, ShieldCheck, Car, HelpCircle } from "lucide-react";

const servicesOptions = [
  "Government Vehicle Outsourcing",
  "Official Duty Vehicles",
  "Employee & Corporate Transportation",
  "Healthcare Transportation",
  "Airport Transfers (Mohali / Delhi)",
  "Outstation & Intercity Travel",
  "Local City Taxi Service",
  "Other / Custom Requirement",
];

const tripTypeOptions = [
  "Daily Official Duty",
  "Long-term Monthly Contract",
  "One-Way Trip",
  "Round Trip",
  "Airport Pickup / Drop",
  "Multi-Day Outstation Tour",
];

export default function ContactClient() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: prefilledService || "",
    tripType: "",
    message: "",
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
  }, [prefilledService]);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    const payload = {
      company: "Guru Nanak Tours & Travels",
      company_name: "Guru Nanak Tours & Travels",

      name: formData.name,
      email: formData.email,
      phone: formData.phone,

      serviceType: formData.serviceType || "Taxi / Transport Service",
      moveType: formData.tripType || "Official / Personal Travel",

      message: `[Trip Type: ${formData.tripType || "General"}] - ${formData.message}`,
      mail_to: "raptocab@gmail.com",
    };

    try {
      const response = await fetch(
        "https://mail.futuretouch.org/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        window.location.href = "/thankyou/";
      } else {
        setStatusMessage({
          type: "error",
          text: data?.message || "Failed to submit request. Please call us directly.",
        });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please call or WhatsApp us for instant booking.",
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = "919872632396";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Guru Nanak Tours & Travels, I need assistance with travel/vehicle booking."
  )}`;

  return (
    <div className="bg-white">
      {/* 4 Quick Info Cards */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center mb-4 group-hover:bg-[#ffa41b] group-hover:text-[#00193d] transition-colors">
                <FaPhoneAlt size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#00193d] mb-1">Call Us 24/7</h3>
              <p className="text-xs text-gray-500 mb-3">For instant booking & quotes</p>
              <div className="space-y-1 text-sm font-bold text-gray-800">
                <a href="tel:+919872632396" className="block hover:text-[#ffa41b] transition">
                  +91-9872632396
                </a>
                <a href="tel:+918728888181" className="block hover:text-[#ffa41b] transition">
                  +91-8728888181
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                <FaWhatsapp size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#00193d] mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-gray-500 mb-3">Instant chat & fare estimates</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <span>→</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center mb-4 group-hover:bg-[#ffa41b] group-hover:text-[#00193d] transition-colors">
                <FaEnvelope size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#00193d] mb-1">Email Inquiries</h3>
              <p className="text-xs text-gray-500 mb-3">For tenders & corporate queries</p>
              <a
                href="mailto:gntt97@gmail.com"
                className="text-sm font-bold text-gray-800 hover:text-[#ffa41b] transition block break-all"
              >
                gntt97@gmail.com
              </a>
            </div>

            {/* Address Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center mb-4 group-hover:bg-[#ffa41b] group-hover:text-[#00193d] transition-colors">
                <FaMapMarkerAlt size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#00193d] mb-1">Our Location</h3>
              <p className="text-xs text-gray-500 mb-1">Punjab Headquarters</p>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                HL-460, Phase-9, Mohali, Punjab
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
              <div className="mb-8">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffa41b]">
                  Send Us a Message
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00193d] mt-1">
                  Book a Vehicle or Request a Quote
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  Fill in your details below and our dispatch coordinator will connect with you
                  within 15 minutes.
                </p>
              </div>

              {statusMessage.text && (
                <div
                  className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                    statusMessage.type === "error"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#00193d] focus:ring-2 focus:ring-[#00193d]/20 outline-none text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-3.5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#00193d] focus:ring-2 focus:ring-[#00193d]/20 outline-none text-sm transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-3.5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. yourname@domain.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#00193d] focus:ring-2 focus:ring-[#00193d]/20 outline-none text-sm transition"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#00193d] focus:ring-2 focus:ring-[#00193d]/20 outline-none text-sm transition cursor-pointer"
                    >
                      <option value="">Select a Service</option>
                      {servicesOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Trip / Requirement Type */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                    Trip / Contract Type
                  </label>
                  <select
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#00193d] focus:ring-2 focus:ring-[#00193d]/20 outline-none text-sm transition cursor-pointer"
                  >
                    <option value="">Select Trip / Contract Type (Optional)</option>
                    {tripTypeOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                    Your Requirements / Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please specify pickup location, drop location, travel date/time, vehicle preference, or contract details..."
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#00193d] focus:ring-2 focus:ring-[#00193d]/20 outline-none text-sm transition resize-none"
                  />
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00193d] px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-[#ffa41b] hover:text-[#00193d] transition-all disabled:opacity-60 cursor-pointer"
                  >
                    <FaPaperPlane />
                    <span>{loading ? "Submitting Request..." : "Send Booking Inquiry"}</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-green-700 transition-all"
                  >
                    <FaWhatsapp size={18} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  🔒 Your information is completely secure. We never share your data.
                </p>
              </form>
            </div>

            {/* Map & Office Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Working Hours & Address Card */}
              <div className="bg-[#00193d] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ffa41b]">
                  Visit or Connect
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">Head Office</h3>

                <div className="mt-5 space-y-4 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#ffa41b] mt-1 shrink-0" size={16} />
                    <div>
                      <p className="font-semibold text-white">Address:</p>
                      <p>HL-460, Phase-9, Mohali, Punjab - 160062</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaClock className="text-[#ffa41b] mt-1 shrink-0" size={16} />
                    <div>
                      <p className="font-semibold text-white">Hours:</p>
                      <p>Office: 08:00 AM - 04:00 PM</p>
                      <p className="text-[#ffa41b] font-medium">
                        Fleet Operations: 24 Hours / 7 Days Available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-[#ffa41b] mt-1 shrink-0" size={16} />
                    <div>
                      <p className="font-semibold text-white">Direct Dispatch:</p>
                      <p>+91-9872632396 / +91-8728888181</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[360px] sm:h-[420px]">
                <iframe
                  title="Guru Nanak Tours & Travels Office Location"
                  className="w-full h-full border-0"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13725.578313608801!2d76.72742240377514!3d30.679172443758556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHL-460%2C%20Phase-9%2C%20Mohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1793025595404!5m2!1sen!2sin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Booking Support */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ffa41b]">
              Seamless Experience
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#00193d]">
              Why Clients Rely on Guru Nanak Tours & Travels
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#ffa41b]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-10 h-10 text-[#ffa41b] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Instant Response</h4>
              <p className="text-xs text-gray-600">
                Quotes and confirmations provided within minutes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <ShieldCheck className="w-10 h-10 text-[#ffa41b] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Verified Drivers</h4>
              <p className="text-xs text-gray-600">
                Courteous, background-checked professional chauffeurs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Car className="w-10 h-10 text-[#ffa41b] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">Pristine Fleet</h4>
              <p className="text-xs text-gray-600">
                Clean, serviced, air-conditioned vehicles with full permits.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <HelpCircle className="w-10 h-10 text-[#ffa41b] mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">24/7 Helpline</h4>
              <p className="text-xs text-gray-600">
                Round-the-clock coordinator on-call for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


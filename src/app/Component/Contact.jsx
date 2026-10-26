"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    serviceType: "",
    moveType: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      company: "futuretouch",
      company_name: "Future Touch",

      name: formData.name,
      email: formData.email,
      phone: formData.phone,

      serviceType: formData.serviceType || "local-shifting",
      moveType: formData.moveType || "Household",

      message: formData.message,
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
        window.location.href = "/thankyou";
      } else {
        alert(data?.message || "Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT FORM CARD */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 lg:p-12">

          <h2 className="text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-2">
            Fill the form and our team will contact you shortly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* NAME */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-4 text-gray-400" />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="relative md:col-span-2">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* SERVICE */}
            <div className="relative md:col-span-2">
              <FaBriefcase className="absolute left-4 top-4 text-gray-400" />
              <input
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                type="text"
                placeholder="Service Type (Packing, Shifting...)"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              className="md:col-span-2 w-full p-4 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-[#00193d] text-white font-semibold py-3 rounded-lg hover:scale-[1.02] transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

        {/* RIGHT MAP CARD */}
        <div className="rounded-2xl overflow-hidden shadow-xl h-[550px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13725.578313608801!2d76.72742240377514!3d30.679172443758556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHL-460%2C%20Phase-9%2C%20Mohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1793025595404!5m2!1sen!2sin"
          />
        </div>

      </div>
    </section>
  );
}

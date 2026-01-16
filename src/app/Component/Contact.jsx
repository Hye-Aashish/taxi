"use client";

import { useState } from "react";

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
      mail_to: "harshsetia140@gmail.com",
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
        // Redirect
        window.location.href = "/thankyou";

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          serviceType: "",
          moveType: "",
        });
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE FORM */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
              className="bg-gray-100 p-4 outline-none"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone"
              required
              className="bg-gray-100 p-4 outline-none"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
              className="bg-gray-100 p-4 outline-none md:col-span-2"
            />

            <input
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              type="text"
              placeholder="Service Type"
              className="bg-gray-100 p-4 outline-none md:col-span-2"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              required
              className="bg-gray-100 p-4 outline-none resize-none md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#042441] text-white font-semibold px-8 py-4 w-fit hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="w-full h-[650px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299314!3d12.953945614011557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1765531962826!5m2!1sen!2sin"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { Calendar, User } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    img: "/taxiimg/front-left-side-47.webp",
    author: "Setia Tour & Travels",
    date: "January 15, 2025",
    title: "Why Choosing Professional Taxi Service Makes Your Trip Safer",
  },
  {
    img: "/taxiimg/2.webp",
    author: "Setia Tour & Travels",
    date: "January 20, 2025",
    title: "Chandigarh to Manali – Complete 4-Day Trip Guide & Pricing",
  },
  {
    img: "/taxiimg/3.webp",
    author: "Setia Tour & Travels",
    date: "January 29, 2025",
    title: "How to Book Affordable One-Way Taxi Anytime, Anywhere",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 w-full bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <p className="text-yellow-500 font-semibold uppercase tracking-widest">
          Our Blog
        </p>
        <h2 className="text-4xl font-bold mt-2 mb-3">
          Latest Travel Tips & Taxi Updates
        </h2>
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mb-10"></div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {blogs.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-56">
                <img
                  src={item.img}
                  alt="Blog"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                
                {/* Author + Date */}
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-yellow-500" />
                    {item.author}
                  </span>

                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-yellow-500" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg leading-relaxed mb-4">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="px-5 py-2 bg-[#f9c643] text-black rounded-full font-semibold hover:bg-yellow-600 transition flex items-center gap-2">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

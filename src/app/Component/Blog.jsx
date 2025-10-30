"use client";
import Image from "next/image";

const posts = [
  {
    image: "/gallery/img11.webp",
    category: "VEHICLE SECURITY",
    title: "Why You Should Always Have a Trusted Locksmith Near You",
    desc: "Losing your keys or getting locked out can happen to anyone, anytime. That’s why having a reliable locksmith like K.K All Keys Maker is essential. Whether it’s your home, office, or car, we ensure quick, safe, and professional key-making and lock-repair services — available 24/7 to get you back inside without any damage or delay.",
    date: "February 16, 2025",
    comments: "No Comments",
  },
  {
    image: "/gallery/img6.webp",
    category: "EMERGENCY SITUATIONS",
    title: "Professional Key Duplication & Lock Repair Services",
    desc: "At K.K All Keys Maker, we specialize in key duplication, lock installation, car key programming, and digital lock solutions. Using advanced tools and technology, we provide accurate key cutting and secure locking systems for all types of doors and vehicles. Our technicians are trained to handle modern smart locks and high-security systems with precision.",
    date: "February 16, 2025",
    comments: "No Comments",
  },
  {
    image: "/gallery/img9.webp",
    category: "MAINTENANCE",
    title: "Emergency Locksmith Services Anytime, Anywhere",
    desc: "Locked out in the middle of the night or lost your car key? Don’t panic — just call K.K All Keys Maker. We provide fast response emergency locksmith services to help you in critical situations. Our mobile team reaches your location quickly, ensuring you get reliable assistance when you need it the most.",
    date: "February 16, 2025",
    comments: "No Comments",
  },
];

export default function BlogCards() {
  return (
    <section className="py-12 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#F9C643] text-black text-xs font-medium px-3 py-1 rounded-md shadow-md uppercase">
                  {post.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B2951] leading-snug mb-3 hover:text-[#F9C643] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.desc}
                </p>

                {/* Footer Info */}
                <div className="border-t pt-3 text-gray-500 text-xs flex items-center gap-2">
                  <span>{post.date}</span>
                  <span className="text-gray-400">•</span>
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

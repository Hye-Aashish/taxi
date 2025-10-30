"use client";

import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Reliable Locksmith",
    desc: "Our certified technicians provide fast and professional key making, lock repairs, and ignition services you can trust.",
    color: "from-[#1E3C72] to-[#2A5298]",
  },
  {
    title: "Transparent Pricing",
    desc: "We offer clear and upfront pricing for all services, with no hidden charges, ensuring complete customer satisfaction.",
    color: "from-[#FBD786] to-[#f7797d]",
    highlight: true,
  },
  {
    title: "Local & Trusted",
    desc: "Serving the community with dependable locksmith solutions, we are your neighborhood experts for home, office, and vehicle security.",
    color: "from-[#1E3C72] to-[#2A5298]",
  },
  {
    title: "24/7 Availability",
    desc: "Locked out or need emergency locksmith services? We are available round-the-clock for urgent key and lock assistance.",
    color: "from-[#1E3C72] to-[#2A5298]",
  },
];


export default function HeroSection() {
  return (
    <section className="relative w-full h-full text-white h-[60vh] xl:h-[80vh] xl:mb-9 xl:pb-9 xl:px-6 xl:mb-22">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-black/10  xl:h-[80vh] h-[55vh] " // <-- Changed /80 to /50
        style={{
          backgroundImage: "url('/gallery/img7.webp')", // Update to your actual image path
        }}
      >
      <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Overlay */}
      <div className="relative z-10 px-6 py-24 md:py-32 xl:px-24 lg:px-16 pb-0">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Keeps your lives <br /> safe and secure
          </h1>
          <p className="text-gray-300 mb-4 max-w-2xl">
           K.K All Keys Maker provides fast, reliable, and professional locksmith services. From key making and lock repairs to ignition services and advanced security solutions, we ensure safety and peace of mind.
          </p>
          <button className="bg-[#F5B841] text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#f1ae23] transition">
            DISCOVER MORE
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:mt-16 mt-26 relative">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-md"
            >
              <div
                className={`flex items-center justify-between px-5 py-4 bg-gradient-to-r ${
                  feature.highlight
                    ? "from-[#FBD786] to-[#f7797d]"
                    : "from-[#1E3C72] to-[#2A5298]"
                }`}
              >
                <h3 className="font-semibold xl:text-2xl text-lg">
                  {feature.title}
                </h3>
                <ArrowUpRight size={18} />
              </div>
              <div className="bg-white text-gray-600 px-5 py-6">
                <p className="text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

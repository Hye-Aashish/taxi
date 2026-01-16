"use client";
import Image from "next/image";
import { Car, MapPin, Clock, Route, PhoneCall, MessageSquare } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Chandigarh to Delhi – ₹3500",
    icon: <Car className="w-5 h-5 text-[#ffa41b]" />,
    image: "/taxiimg/front-left-side-47.webp",
    text: "Affordable Chandigarh to Delhi taxi service with clean cars, professional drivers, and on-time pickup.",
  },
  {
    title: "Chandigarh to Manali Trip – 4 Days ₹18,000",
    icon: <MapPin className="w-5 h-5 text-[#ffa41b]" />,
    image: "/taxiimg/2.webp",
    text: "Enjoy a comfortable 4-day Manali tour package including sightseeing, safe travel & experienced drivers.",
  },
  {
    title: "All Types of Cars Available",
    icon: <Route className="w-5 h-5 text-[#ffa41b]" />,
    image: "/taxiimg/3.webp",
    text: "Sedan, SUV, Innova, Tempo Traveller – choose any car according to your comfort and budget.",
  },
  {
    title: "All India Taxi Service",
    icon: <Clock className="w-5 h-5 text-[#ffa41b]" />,
    image: "/taxiimg/6.webp",
    text: "We provide taxi services across all major Indian cities with reliable, safe and comfortable rides.",
  },
  {
    title: "Daily One-Way Taxi",
    icon: <PhoneCall className="w-5 h-5 text-[#ffa41b]" />,
    image: "/taxiimg/7.webp",
    text: "Book one-way taxi at the lowest price. No return charges. Fast service available 24/7.",
  },
];

export default function Service() {
  return (
    <section className="bg-gray-100 py-20" id="services">
      <div className="xl:px-32 px-4 text-center">
        <p className="text-[#ffd101] font-semibold uppercase text-sm mb-2">
          Our Taxi Services
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Premium Taxi Service for Every Route <br /> At Best Prices
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#ffd101] p-4 flex items-center gap-2 text-white font-semibold">
                {service.icon}
                <span>{service.title}</span>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Description */}
              <div className="p-5 text-justify flex-grow">
                <p className="text-gray-600 text-sm">
                  {service.text}
                </p>
              </div>

              {/* Buttons Always Visible */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center justify-between gap-3">

                  {/* Book Now */}
                  <Link href="#book-now">
                    <button className="w-full px-4 py-2 bg-[#ffa41b] text-gray-900 font-medium text-sm rounded-md hover:bg-[#ffd101] transition flex-1">
                      Book Now
                    </button>
                  </Link>

                  {/* WhatsApp or Call */}
                  <a
                    href="https://wa.me/+918847670935"
                    target="_blank"
                    className="flex-1"
                  >
                    <button className="w-full px-4 py-2 bg-green-500 text-white font-medium text-sm rounded-md hover:bg-green-600 transition flex items-center justify-center gap-1">
                      <MessageSquare className="w-4 h-4" /> WhatsApp
                    </button>
                  </a>

                  {/* Call Button Alternative (If you want instead of WhatsApp)
                  <a href="tel:+91XXXXXXXXXX" className='flex-1'>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-1">
                      <PhoneCall className="w-4 h-4" /> Call
                    </button>
                  </a> 
                  */}

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

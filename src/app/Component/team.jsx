"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "vishal kumar",
    role: "Founder",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&s",
  },
  {
    name: "John Doe",
    role: "Master Locksmith",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&s",
  },
  {
    name: "Michael Brown",
    role: "Locksmith Technician",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&s",
  },
  {
    name: "Sarah Smith",
    role: "Security Consultant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&s",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 xl:mt-9 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-amber-600 font-semibold mb-3">
          Meet Our Team
        </p>
        <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-slate-800 mb-12">
          Meet Our Expert Locksmiths <br className="hidden md:block" />
          and Security Professionals
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-[30vh] w-full aspect-[4/5]">
                <img
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-0 top-0 h-full w-[60px] bg-[radial-gradient(at_top_center,#0a3d62_0%,#1e5799_100%)] flex items-center justify-center rotate-180">
                  <span className="text-white font-semibold rotate-90 text-sm tracking-wide">
                    {member.role}
                  </span>
                </div>
              </div>
              <div className="py-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {member.name}
                </h3>
                <div className="flex justify-center gap-3 mt-4">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white hover:from-blue-600 hover:to-blue-800 transition-all"
                      >
                        <Icon size={14} />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

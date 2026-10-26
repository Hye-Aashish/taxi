
"use client";

import { Calendar, User, ArrowRight } from "lucide-react";

const blogs = [
  {
    img: "/taxiimg/front-left-side-47.webp",
    author: "Guru Nanak Tours & Travels",
    date: "January 15, 2026",
    title: "Why Reliable Transportation Is Essential for Government Departments",
  },
  {
    img: "/taxiimg/2.webp",
    author: "Guru Nanak Tours & Travels",
    date: "January 20, 2026",
    title: "Corporate Transportation Services: Safety, Comfort & Punctuality",
  },
  {
    img: "/taxiimg/3.webp",
    author: "Guru Nanak Tours & Travels",
    date: "January 29, 2026",
    title: "The Importance of Reliable Transport for Healthcare Institutions",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20" id="blog">
      <div className="mx-auto max-w-7xl px-5 md:px-6 text-center">

        {/* Heading */}
        <p className="font-semibold uppercase tracking-widest text-yellow-500">
          Guru Nanak Tours & Travels Blog
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#00193d] md:text-4xl">
          Transport Insights, Travel Tips & Industry Updates
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-7">
          Explore useful insights on transportation, fleet management,
          corporate travel and reliable transport solutions for government
          departments, healthcare institutions and businesses.
        </p>

        <div className="mx-auto mb-10 mt-6 h-[3px] w-20 bg-yellow-500" />

        {/* Blog Cards */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item, idx) => (
            <article
              key={idx}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">

                {/* Author + Date */}
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <User size={16} className="shrink-0 text-yellow-500" />
                    Guru Nanak Tours
                  </span>

                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="shrink-0 text-yellow-500" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-0 min-h-[74px] text-xl font-bold leading-7 text-[#00193d] transition-colors group-hover:text-yellow-600">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-7 text-gray-600">
                  Discover how professional transportation services help
                  organizations improve safety, maintain punctuality and
                  manage their daily travel requirements efficiently.
                </p>

             
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

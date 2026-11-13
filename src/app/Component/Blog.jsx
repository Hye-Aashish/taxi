"use client";

import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blogs";

export default function BlogSection() {
  const displayPosts = blogPosts.slice(0, 3);

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
          {displayPosts.map((item, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#00193d]/90 text-[#ffa41b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {item.category}
                  </div>
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
                  <h3 className="mb-3 min-h-[58px] text-xl font-bold leading-7 text-[#00193d] transition-colors group-hover:text-yellow-600">
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-sm text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="p-6 pt-0 border-t border-gray-50 mt-4">
                <Link
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00193d] group-hover:text-[#ffa41b] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-[#00193d] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#ffa41b] hover:text-[#00193d] transition-all"
          >
            <span>Explore All Blog Articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

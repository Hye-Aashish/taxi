import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock, Tag, Phone } from "lucide-react";
import PageHeader from "../Component/PageHeader";
import { blogPosts } from "../../data/blogs";

export const metadata = {
  title: "Blog & Travel Insights | Guru Nanak Tours & Travels",
  description:
    "Read the latest articles on fleet outsourcing, corporate travel, healthcare transport, and travel tips across Punjab and North India by Guru Nanak Tours & Travels.",
};

export default function BlogListingPage() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Our Blog & Insights"
        subtitle="Transport Insights, Corporate Fleet Tips & North India Travel Guides"
        breadcrumb={[{ label: "Blog" }]}
      />

      {/* Main Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#ffa41b]">
              Knowledge Hub
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#00193d]">
              Latest News, Articles & Travel Guides
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ffa41b]" />
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore expert perspectives on official fleet management, safe employee transit,
              healthcare mobility, and the best travel routes from Mohali and Chandigarh.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#00193d]/90 backdrop-blur-sm text-[#ffa41b] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#ffa41b]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[#ffa41b]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#00193d] group-hover:text-yellow-600 transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 sm:p-7 pt-0 border-t border-gray-50">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00193d] group-hover:text-[#ffa41b] transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-[#00193d] py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ffa41b]">
            Need Transportation Assistance?
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">
            Book Safe & Punctual Cabs for Any Requirement
          </h3>
          <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Available 24/7 across Punjab, Chandigarh, and North India.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ffa41b] px-7 py-3 text-sm sm:text-base font-bold text-[#00193d] hover:bg-white transition"
            >
              <span>Contact Us Today</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919876239897"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3 text-sm sm:text-base font-bold text-white hover:bg-white hover:text-[#00193d] transition"
            >
              <Phone size={16} />
              <span>+91-9876239897</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


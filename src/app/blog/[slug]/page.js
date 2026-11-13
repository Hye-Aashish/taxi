import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Share2,
  Car,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import PageHeader from "../../Component/PageHeader";
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from "../../../data/blogs";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Guru Nanak Tours & Travels",
    };
  }

  return {
    title: `${post.title} | Guru Nanak Tours & Travels`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find index for Next & Prev navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Other related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const whatsappNumber = "919872632396";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Guru Nanak Tours & Travels, I read your article "${post.title}" and would like to enquire about transport services.`
  )}`;

  return (
    <main className="bg-white">
      {/* Header Banner with Breadcrumb */}
      <PageHeader
        title={post.title}
        subtitle={`${post.category} • Published on ${post.date}`}
        breadcrumb={[
          { label: "Blog", href: "/blog" },
          { label: post.title.slice(0, 30) + "..." },
        ]}
      />

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Blog Content (8 Cols) */}
            <article className="lg:col-span-8 bg-white">
              {/* Meta information bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-8">
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#00193d] bg-yellow-500/10 text-yellow-700 px-3 py-1 rounded-full border border-yellow-500/20">
                    {post.category}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <User size={15} className="text-[#ffa41b]" />
                    <span className="font-medium text-gray-700">{post.author}</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-[#ffa41b]" />
                    <span>{post.date}</span>
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-[#ffa41b]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-green-700 hover:text-green-800 transition"
                >
                  <FaWhatsapp size={16} />
                  <span>Share on WhatsApp</span>
                </a>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-lg mb-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lead Intro Paragraph */}
              <div className="rounded-2xl bg-gray-50 border-l-4 border-[#ffa41b] p-6 mb-8 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                {post.content.intro}
              </div>

              {/* Body Sections */}
              <div className="space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
                {post.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00193d] tracking-tight pt-2">
                      {section.heading}
                    </h2>

                    {section.body.map((pText, pIdx) => (
                      <p key={pIdx} className="text-gray-600 leading-relaxed">
                        {pText}
                      </p>
                    ))}

                    {/* Optional Feature Checklist inside section */}
                    {section.list && (
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-3 my-4">
                        {section.list.map((listItem, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-[#ffa41b] shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base font-medium text-gray-800">
                              {listItem}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Pull Quote */}
                {post.content.quote && (
                  <blockquote className="my-10 rounded-2xl bg-[#00193d] p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 text-white/5 text-9xl font-serif select-none pointer-events-none">
                      “
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold italic leading-relaxed text-[#ffa41b]">
                      "{post.content.quote}"
                    </p>
                    <footer className="mt-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-300">
                      — Guru Nanak Tours & Travels Management
                    </footer>
                  </blockquote>
                )}

                {/* Key Takeaways Box */}
                {post.content.takeaways && (
                  <div className="rounded-2xl border-2 border-dashed border-[#ffa41b]/40 bg-[#fffdf7] p-6 sm:p-8 my-8">
                    <h3 className="text-xl font-bold text-[#00193d] mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffa41b]" />
                      Key Takeaways & Summary
                    </h3>
                    <ul className="space-y-2.5">
                      {post.content.takeaways.map((item, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tags Section */}
              <div className="border-t border-b border-gray-100 py-6 my-10 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-gray-500 mr-2">
                  <Tag size={15} className="text-[#ffa41b]" />
                  Article Tags:
                </span>
                {post.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-[#00193d] hover:text-white transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Box */}
              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100">
                <div className="w-20 h-20 rounded-2xl bg-[#00193d] text-[#ffa41b] flex items-center justify-center text-3xl font-black shadow-md shrink-0">
                  <Car size={36} />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h4 className="text-lg font-bold text-[#00193d]">{post.author}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ffa41b]">
                    Official Fleet & Transport Specialists • Since 2005
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Guru Nanak Tours & Travels is a trusted name providing safe, reliable, and
                    punctual mobility solutions for government departments, healthcare institutions,
                    corporate clients, and individual travelers across Punjab and North India.
                  </p>
                </div>
              </div>

              {/* Prev & Next Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="p-5 rounded-xl border border-gray-100 bg-white hover:border-[#ffa41b] hover:shadow-md transition-all group"
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#ffa41b]">
                      <ArrowLeft size={14} /> Previous Post
                    </span>
                    <p className="text-sm font-bold text-[#00193d] mt-1 line-clamp-2">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="p-5 rounded-xl border border-gray-100 bg-white hover:border-[#ffa41b] hover:shadow-md transition-all text-left sm:text-right group"
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#ffa41b]">
                      Next Post <ArrowRight size={14} />
                    </span>
                    <p className="text-sm font-bold text-[#00193d] mt-1 line-clamp-2">
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            </article>

            {/* Right Column: Sticky Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8 sticky top-24">
              {/* Quick Booking Widget */}
              <div className="rounded-3xl bg-[#00193d] p-6 sm:p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ffa41b]">
                  Instant Fleet Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">Need a Vehicle Now?</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  Book official duty cabs, airport transfers, or corporate transport with guaranteed
                  on-time pickup.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+919872632396"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#ffa41b] px-4 py-3.5 text-sm font-bold text-[#00193d] shadow-md hover:bg-white transition"
                  >
                    <FaPhoneAlt />
                    <span>Call +91-9872632396</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-600 px-4 py-3.5 text-sm font-bold text-white shadow-md hover:bg-green-700 transition"
                  >
                    <FaWhatsapp size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white hover:text-[#00193d] transition"
                  >
                    <span>Request Full Proposal</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Related / Recent Posts */}
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#00193d] pb-3 border-b border-gray-100 flex items-center justify-between">
                  <span>Recent Articles</span>
                  <span className="h-1.5 w-10 rounded-full bg-[#ffa41b]" />
                </h3>

                <div className="space-y-5 mt-5">
                  {relatedPosts.map((rPost, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${rPost.slug}`}
                      className="group flex gap-4 items-center"
                    >
                      <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={rPost.image}
                          alt={rPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] font-bold text-[#ffa41b] uppercase">
                          {rPost.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#ffa41b] transition-colors line-clamp-2 mt-0.5">
                          {rPost.title}
                        </h4>
                        <span className="text-[11px] text-gray-400 mt-1 block">
                          {rPost.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why Choose Us Badge Box */}
              <div className="rounded-3xl bg-gray-50 p-6 border border-gray-200">
                <h4 className="text-base font-bold text-[#00193d] mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-[#ffa41b]" size={20} />
                  <span>The Guru Nanak Advantage</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#ffa41b] shrink-0" />
                    <span>Serving Punjab Since 2005</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#ffa41b] shrink-0" />
                    <span>Specialized Government Outsourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#ffa41b] shrink-0" />
                    <span>Verified & Disciplined Drivers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#ffa41b] shrink-0" />
                    <span>24/7 Operations Helpdesk</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Related Posts Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ffa41b]">
                Continue Reading
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00193d] mt-1">
                More Articles & Travel Insights
              </h3>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00193d] hover:text-[#ffa41b] transition"
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rel, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-white overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#ffa41b] uppercase">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-[#00193d] group-hover:text-yellow-600 transition-colors mt-2 line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mt-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50">
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00193d] group-hover:text-[#ffa41b] transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#00193d] py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Experience Stress-Free Travel?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Contact Guru Nanak Tours & Travels today for reliable taxi bookings, corporate fleet
            packages, and official duty vehicles.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ffa41b] px-7 py-3 text-sm sm:text-base font-bold text-[#00193d] shadow-md hover:bg-white transition"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919872632396"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3 text-sm sm:text-base font-bold text-white hover:bg-white hover:text-[#00193d] transition"
            >
              <Phone size={16} />
              <span>+91-9872632396</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


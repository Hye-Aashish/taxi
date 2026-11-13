"use client";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { title: "Government Vehicle Outsourcing", href: "/services" },
    { title: "Official Duty Vehicles", href: "/services" },
    { title: "Employee Transportation", href: "/services" },
    { title: "Healthcare Transportation", href: "/services" },
    { title: "Airport Transfers", href: "/services" },
    { title: "Outstation Travel", href: "/services" },
  ];

  return (
    <footer className="w-full font-sans text-white">
      <div className="bg-[#0E1D2C] px-5 md:px-10 lg:px-16 xl:px-32 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img src="/img/logo.png" alt="Guru Nanak Tours & Travels" className="rounded-md w-44" />
            </Link>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Guru Nanak Tours & Travels offers premium fleet outsourcing, official duty vehicles, and trusted travel services across Punjab and North India since 2005.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social Link"
                  className="bg-white/10 hover:bg-[#ffa41b] text-white hover:text-[#0E1D2C] p-2.5 rounded-lg shadow-md transition-all duration-300 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffa41b] uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-[#ffa41b] transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffa41b] uppercase tracking-wider text-sm">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              {serviceLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-[#ffa41b] transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Sectors */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffa41b] uppercase tracking-wider text-sm">
              Key Sectors
            </h3>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              <li className="hover:text-[#ffa41b] transition-colors">
                <Link href="/services">Government Transport</Link>
              </li>
              <li className="hover:text-[#ffa41b] transition-colors">
                <Link href="/services">Corporate Fleet Tie-ups</Link>
              </li>
              <li className="hover:text-[#ffa41b] transition-colors">
                <Link href="/services">Healthcare Staff Transit</Link>
              </li>
              <li className="hover:text-[#ffa41b] transition-colors">
                <Link href="/services">Airport Pick & Drop</Link>
              </li>
              <li className="hover:text-[#ffa41b] transition-colors">
                <Link href="/about">Why Choose Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ffa41b] uppercase tracking-wider text-sm">
              Head Office
            </h3>

            <div className="text-gray-300 space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#ffa41b] mt-1 shrink-0" />
                <span>HL-460, Phase-9, Mohali, Punjab</span>
              </p>

              <div className="flex items-start gap-2.5">
                <FaPhoneAlt className="text-[#ffa41b] mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919872632396" className="hover:text-[#ffa41b] transition font-medium">
                    +91-9872632396
                  </a>
                  <a href="tel:+918728888181" className="hover:text-[#ffa41b] transition font-medium">
                    +91-8728888181
                  </a>
                </div>
              </div>

              <p className="flex items-center gap-2.5">
                <FaEnvelope className="text-[#ffa41b] shrink-0" />
                <a
                  href="mailto:gntt97@gmail.com"
                  className="hover:text-[#ffa41b] transition break-all"
                >
                  gntt97@gmail.com
                </a>
              </p>

              <div className="pt-2">
                <span className="inline-block bg-[#ffa41b]/20 text-[#ffa41b] px-3 py-1 rounded-full text-xs font-semibold border border-[#ffa41b]/30">
                  24/7 Operations Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs md:text-sm text-center gap-3">
          <p>© {new Date().getFullYear()} Guru Nanak Tours & Travels. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition">About Us</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

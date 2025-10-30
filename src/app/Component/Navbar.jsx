"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
    { title: "Contact us", link: "/contact" },
  ];

  return (
    <>
      
      <header
        className={`${
          fixed ? "fixed top-0 shadow-md" : "relative"
        } w-full bg-white flex items-center justify-between px-6 md:px-16 lg:px-28 py-3 z-[9999] transition-all duration-300`}
      >
      
        <Link href="/">
          <img src="/img/logo.png" alt="Logo" className="w-32 md:w-36" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 relative">
          {links.map(({ title, link }) => (
            <Link
              key={title}
              href={link}
              className={`font-semibold text-[17px] ${
                pathname === link
                  ? "text-[#ffa41b]"
                  : "text-[#1a2a3b] hover:text-[#ffa41b]"
              }`}
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <Link href="/contact">
          <button className="hidden lg:block bg-[#ffa41b] hover:bg-[#e4ac2c] text-[#1a2a3b] font-medium text-sm px-6 py-3 rounded-md transition-all">
            FREE CONSULTATION
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <FaBars
            className="text-2xl text-[#1a2a3b] cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-[10000] shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/img/logo.png" alt="GoLock Logo" className="w-28" />
          <FaTimes
            className="text-2xl text-[#1a2a3b] cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        <ul className="flex flex-col p-6 space-y-4">
          {links.map(({ title, link }) => (
            <li key={title}>
              <Link
                href={link}
                onClick={() => setIsSidebarOpen(false)}
                className="block text-[#1a2a3b] font-semibold hover:text-[#ffa41b]"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <Link href="/contact">
            <button className="w-full bg-[#ffa41b] hover:bg-[#e4ac2c] text-[#1a2a3b] font-medium py-3 rounded-md">
              FREE CONSULTATION
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[9999]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}

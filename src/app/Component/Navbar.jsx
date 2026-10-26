"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "Home", link: "#home" },
    { title: "About us", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Blog", link: "#blog" },
    { title: "Contact us", link: "#contact" },
  ];

  return (
    <>
      <header
        className={`${
          fixed ? "fixed top-0 shadow-md" : "relative"
        } w-full bg-white flex items-center justify-between px-6 md:px-16 lg:px-28  z-[9999] transition-all duration-300`}
      >
        {/* Logo */}
        <a href="#home">
          <img src="/img/logo.png" alt="Logo" className="w-36 py-4"  />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 relative">
          {links.map(({ title, link }) => (
            <a
              key={title}
              href={link}
              className="font-semibold text-[18px] text-[#1a2a3b] hover:text-[#ffa41b]"
            >
              {title}
            </a>
          ))}
        </nav>

        {/* Button */}
        <a href="#contact">
          <button className="hidden lg:block bg-[#00193d] text-white font-medium text-sm px-6 py-3 transition-all">
            FREE CONSULTATION
          </button>
        </a>

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
        className={`fixed top-0 left-0 w-64 h-full bg-[#fdf4e2] z-[10000] shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/img/logo.png" alt="Logo" className="w-28" />
          <FaTimes
            className="text-2xl text-[#1a2a3b] cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        <ul className="flex flex-col p-6 space-y-4">
          {links.map(({ title, link }) => (
            <li key={title}>
              <a
                href={link}
                onClick={() => setIsSidebarOpen(false)}
                className="block text-[#1a2a3b] font-semibold hover:text-[#ffa41b]"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <a href="#contact">
            <button className="w-full bg-[#ffa41b] hover:bg-[#e4ac2c] text-white font-medium py-3 rounded-md">
              FREE CONSULTATION
            </button>
          </a>
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

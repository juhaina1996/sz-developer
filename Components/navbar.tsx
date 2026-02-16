"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 md:px-12 py-5">

          {/* Logo */}
          <div className="text-xl font-semibold tracking-wide">
            LOGO
            {/* Replace with Image later */}
            {/* <Image src="/logo.svg" alt="Logo" width={120} height={40} /> */}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col justify-center items-center gap-1 group"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>

        </div>
      </nav>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center">

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-8 text-3xl font-light tracking-wide">

            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </div>

        </div>
      )}
    </>
  );
}

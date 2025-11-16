import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LEFT MENU – Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-10 font-medium text-white">
          <li><a className="hover:text-pink-400 transition" href="#weddings">Weddings</a></li>
          <li><a className="hover:text-pink-400 transition" href="#seminars">Seminars</a></li>
          <li><a className="hover:text-pink-400 transition" href="#about">About Us</a></li>
        </ul>

        {/* CENTER LOGO */}
        <div className="flex flex-col items-center mx-2 sm:mx-4">
          <img
            src="/l1.png"
            alt="RoyalEvents Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                       object-cover rounded-full shadow-md"
          />
          <h1
            className="text-lg sm:text-xl md:text-2xl text-white mt-1"
            style={{
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: "2px",
            }}
          >
            RoyalEvents
          </h1>
        </div>

        {/* RIGHT MENU – Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-10 font-medium text-white">
          <li><a className="hover:text-pink-400 transition" href="#exhibitions">Exhibitions</a></li>
          <li><a className="hover:text-pink-400 transition" href="#clients">Our Clients</a></li>
          <li><a className="hover:text-pink-400 transition" href="#contact">Contact</a></li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-between w-7 h-5"
        >
          {/* Top bar */}
          <span
            className={
              "block h-[3px] bg-white rounded-full transition-all duration-300 " +
              (open ? "-translate-x-1 rotate-45 translate-y-2" : "translate-x-0")
            }
          ></span>

          {/* Middle bar */}
          <span
            className={
              "block h-[3px] bg-white rounded-full transition-all duration-300 " +
              (open ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0")
            }
          ></span>

          {/* Bottom bar */}
          <span
            className={
              "block h-[3px] bg-white rounded-full transition-all duration-300 " +
              (open ? "-translate-x-1 -rotate-45 -translate-y-2" : "translate-x-0")
            }
          ></span>
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-white text-center py-6 space-y-4">

          <a href="#weddings" className="block text-lg hover:text-pink-400 transition" onClick={() => setOpen(false)}>
            Weddings
          </a>

          <a href="#seminars" className="block text-lg hover:text-pink-400 transition" onClick={() => setOpen(false)}>
            Seminars
          </a>

          <a href="#about" className="block text-lg hover:text-pink-400 transition" onClick={() => setOpen(false)}>
            About Us
          </a>

          <a href="#exhibitions" className="block text-lg hover:text-pink-400 transition" onClick={() => setOpen(false)}>
            Exhibitions
          </a>

          <a href="#clients" className="block text-lg hover:text-pink-400 transition" onClick={() => setOpen(false)}>
            Our Clients
          </a>

          <a href="#contact" className="block text-lg hover:text-pink-400 transition" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

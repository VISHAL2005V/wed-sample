import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT MENU (Desktop Only) */}
        <ul className="hidden md:flex gap-10 font-medium text-white">
          <li>
            <a className="hover:text-pink-400 transition duration-300" href="#weddings">
              Weddings
            </a>
          </li>
          <li>
            <a className="hover:text-pink-400 transition duration-300" href="#seminars">
              Seminars
            </a>
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="flex flex-col items-center mx-4">
          <img
            src="/l1.png"
            alt="RoyalEvents Logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-full shadow-lg"
          />
          <h1
            className="text-xl md:text-2xl text-white mt-1"
            style={{
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: "2px",
            }}
          >
            RoyalEvents
          </h1>
        </div>

        {/* RIGHT MENU (Desktop Only) */}
        <ul className="hidden md:flex gap-10 font-medium text-white">
          <li>
            <a className="hover:text-pink-400 transition duration-300" href="#exhibitions">
              Exhibitions
            </a>
          </li>
          <li>
            <a className="hover:text-pink-400 transition duration-300" href="#contact">
              Get in Touch
            </a>
          </li>
        </ul>

        {/* MOBILE HAMBURGER ICON */}
       <button
  onClick={() => setOpen(!open)}
  className="md:hidden flex flex-col justify-between w-7 h-5 group"
>
  {/* Top bar */}
  <span
    className={
      "block h-[3px] bg-white rounded transition-all duration-300 " +
      (open
        ? "-translate-x-1 rotate-45 translate-y-2"
        : "translate-x-0")
    }
  ></span>

  {/* Middle bar */}
  <span
    className={
      "block h-[3px] bg-white rounded transition-all duration-300 " +
      (open ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0")
    }
  ></span>

  {/* Bottom bar */}
  <span
    className={
      "block h-[3px] bg-white rounded transition-all duration-300 " +
      (open
        ? "-translate-x-1 -rotate-45 -translate-y-2"
        : "translate-x-0")
    }
  ></span>
</button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-md text-white text-center py-6 space-y-4">
          <a
            href="#weddings"
            className="block text-lg hover:text-pink-400 transition"
            onClick={() => setOpen(false)}
          >
            Weddings
          </a>

          <a
            href="#seminars"
            className="block text-lg hover:text-pink-400 transition"
            onClick={() => setOpen(false)}
          >
            Seminars
          </a>

          <a
            href="#exhibitions"
            className="block text-lg hover:text-pink-400 transition"
            onClick={() => setOpen(false)}
          >
            Exhibitions
          </a>

          <a
            href="#contact"
            className="block text-lg hover:text-pink-400 transition"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}

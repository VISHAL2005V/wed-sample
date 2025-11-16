import { useEffect, useRef, useState } from "react";

export default function Clients() {
  const clients = [
    { name: "Mahendra Wedding Hall", logo: "/a1.jpeg" },
    { name: "Royal Palace Events", logo: "/a2.jpg" },
    { name: "Golden Orchid", logo: "/a3.jpg" },
    { name: "Classic Convention Center", logo: "/a4.jpg" },
  ];

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h2
          className={`
            text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 drop-shadow-md 
            transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Trusted Clients
        </h2>

        <p
          className={`
            text-gray-600 max-w-xl mx-auto mt-3 text-sm sm:text-base 
            transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          We proudly collaborate with premium brands, luxury wedding halls, and top event partners.
        </p>

        {/* Grid */}
        <div
          className={`
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12
            transition-all duration-700 delay-300
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center p-6 rounded-2xl shadow-lg 
                bg-white/60 backdrop-blur-lg border border-white/40
                hover:scale-105 hover:shadow-2xl 
                transition-all duration-300 cursor-pointer relative
              "
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-40 
                              bg-pink-200 transition-all duration-300"></div>

              {/* Logo */}
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md"
              />

              {/* Name */}
              <p className="mt-3 text-gray-700 font-medium text-xs sm:text-sm">
                {client.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

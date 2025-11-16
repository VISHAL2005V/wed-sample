import { useEffect, useRef, useState } from "react";

export default function Exhibitions() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      id="exhibitions"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2
          className={`
            text-4xl sm:text-5xl font-bold text-center text-purple-700 mb-6 
            transition-all duration-700 
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "2px",
          }}
        >
          Wedding Exhibitions
        </h2>

        {/* Subtitle */}
        <p
          className={`
            text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-center text-gray-600 mb-12 
            transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Explore luxury wedding décor, floral artistry, and premium exhibition
          designs crafted to elevate your dream event.
        </p>

        {/* Card Layout – 2 cards on top row, 1 card in second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div
            className={`
              p-6 rounded-2xl shadow-md border border-purple-100 bg-white
              hover:scale-[1.04] transition-all duration-300 
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="text-purple-600 text-4xl mb-3">✨</div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Luxury Decor Themes
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Royal, floral, pastel, and modern décor themes crafted to elevate
              your wedding ambiance.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`
              p-6 rounded-2xl shadow-md border border-purple-100 bg-white
              hover:scale-[1.04] transition-all duration-300 
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="text-purple-600 text-4xl mb-3">🌸</div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Floral Art & Concepts
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Elegant flower walls, garlands, and premium floral arrangements
              adding beauty and romance.
            </p>
          </div>

          {/* Card 3 – FULL ROW */}
          <div
            className={`
              p-6 rounded-2xl shadow-md border border-purple-100 bg-white 
              hover:scale-[1.04] transition-all duration-300 sm:col-span-2
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="text-purple-600 text-4xl mb-3">🎇</div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Stage & Lighting Designs
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Creative stage setups, luxury lighting themes, and premium
              presentation concepts for unforgettable celebrations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

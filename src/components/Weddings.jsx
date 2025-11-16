import { useEffect, useRef, useState } from "react";

export default function Weddings() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation on scroll
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
    <section
      id="weddings"
      ref={sectionRef}
      className="relative h-auto py-12 md:py-0 md:h-screen w-full overflow-hidden"
    >

      {/* Overlay with animated text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 
                      text-white text-center px-3 sm:px-4 bg-gradient-to-b from-black/60 via-black/40 to-black/60">

        {/* Heading */}
        <h2
          className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold mb-2 md:mb-3 drop-shadow-xl transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          Wedding Events
        </h2>

        {/* Paragraph */}
        <p
          className={`
            text-xs sm:text-sm md:text-base lg:text-lg 
            max-w-xs sm:max-w-sm md:max-w-xl 
            drop-shadow-lg transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          From traditional ceremonies to luxurious modern weddings, we create 
          celebrations filled with elegance, beauty, and unforgettable emotions.
        </p>
      </div>

      {/* IMAGES GRID — Smaller & Animated */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[60vh] sm:h-[70vh] md:h-full w-full">

        {/* Image 1 */}
        <div
          className={`
            w-full h-full transition-all duration-[1200ms]
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        >
          <img
            src="/w5.jpg"
            className="w-full h-full object-cover"
            alt="Wedding 1"
          />
        </div>

        {/* Image 2 */}
        <div
          className={`
            w-full h-full transition-all duration-[1500ms]
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        >
          <img
            src="/w2.jpg"
            className="w-full h-full object-cover"
            alt="Wedding 2"
          />
        </div>

        {/* Image 3 */}
        <div
          className={`
            w-full h-full hidden md:block transition-all duration-[1800ms]
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        >
          <img
            src="/w4.jpg"
            className="w-full h-full object-cover"
            alt="Wedding 3"
          />
        </div>

      </div>
    </section>
  );
}

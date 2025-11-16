import { useEffect, useRef, useState } from "react";

export default function About() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  /** COUNT ANIMATION */
  const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const end = parseInt(target);
      const increment = end / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);

      return () => clearInterval(counter);
    }, [startCount, target, duration]);

    return count;
  };

  const years = useCounter(10);
  const weddings = useCounter(300);
  const events = useCounter(500);

  /** OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-pink-600"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Us
        </h2>

        <p
          className="text-center max-w-xl sm:max-w-2xl mx-auto text-gray-700 mb-10 sm:mb-12 
                     text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          We specialize in crafting unforgettable wedding experiences, luxurious ceremonies, 
          exhibitions, and premium corporate events filled with elegance and emotion.
        </p>

        {/* TWO RESPONSIVE IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 mb-16">

          {/* Image 1 */}
          <div className="relative group">
            <img
              src="/q1.jpeg"
              alt="Royal Events"
              className="w-full h-64 sm:h-80 md:h-[26rem] object-cover rounded-3xl shadow-xl 
                         group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Image 2 – unique shape */}
          <div className="relative group">
            <img
              src="/q2.jpg"
              alt="Royal Events Team"
              className="w-full h-64 sm:h-80 md:h-[26rem] object-cover 
                         rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-xl 
                         group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        {/* COUNTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center mb-16">

          <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 hover:scale-105 transition duration-300">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600">
              {years}+
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">Years Experience</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 hover:scale-105 transition duration-300">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600">
              {weddings}+
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">Weddings Planned</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 hover:scale-105 transition duration-300">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600">
              {events}+
            </h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base font-medium">Events Organized</p>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-700 mb-3 sm:mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crafting Memories With Passion
          </h3>

          <p
            className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            With a dedicated team and innovative creativity, RoyalEvents has become one of the most 
            trusted names in premium event planning. We bring dreams to life with perfection and heart.
          </p>

          <a
            href="#contact"
            className="inline-block mt-4 px-6 sm:px-7 py-3 bg-pink-600 text-white 
                       text-sm sm:text-base md:text-lg rounded-full shadow-lg
                       hover:bg-pink-700 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

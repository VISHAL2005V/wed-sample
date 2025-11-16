import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/a1.jpeg", "/a2.jpg", "/a3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Smooth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Left-Aligned Content */}
      <div
        className="
          relative z-10 h-full flex flex-col justify-center 
          items-start text-left 
          px-4 sm:px-8 md:px-16 
          animate-[fadeIn_1.5s_ease-in-out]
        "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold text-white leading-tight drop-shadow-xl
          "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Creating Magical <br /> Moments
        </h1>

        {/* Subheading */}
        <p
          className="
            text-sm sm:text-base md:text-lg 
            max-w-xs sm:max-w-md md:max-w-xl 
            text-white/90 mt-3 sm:mt-4 mb-6 leading-relaxed drop-shadow-lg
          "
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Turning your special celebrations into unforgettable experiences with 
          elegant design, stunning visuals, and premium event management.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">

          {/* Plan Event */}
          <a
            href="#contact"
            className="
              px-5 py-2.5 sm:px-8 sm:py-3 
              text-sm sm:text-base font-medium
              text-white bg-white/20 backdrop-blur-lg 
              border border-white/30 rounded-full 
              shadow-lg hover:bg-white/30 hover:scale-105
              transition-all duration-300
            "
          >
            Plan Your Event
          </a>

          {/* Watch Reel */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="
              px-5 py-2.5 sm:px-8 sm:py-3 
              flex items-center justify-center gap-2
              text-sm sm:text-base font-medium
              bg-pink-600/80 text-white rounded-full shadow-lg
              hover:bg-pink-700 hover:scale-105 transition-all duration-300
            "
          >
            <span className="text-lg sm:text-xl">▶</span>
            Watch Reel
          </a>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-5 sm:bottom-7 w-full flex justify-center gap-2 sm:gap-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
              idx === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Floating Buttons - WhatsApp + Contact */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8072439647"
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full 
                     flex items-center justify-center shadow-xl 
                     hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl sm:text-3xl text-white">💬</span>
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-600 rounded-full 
                     flex items-center justify-center shadow-xl 
                     hover:scale-110 transition-all duration-300 text-white text-xl"
        >
          ✉
        </a>
      </div>

    </section>
  );
}

import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/a1.jpeg", "/a2.jpg", "/a3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">

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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        
        <h1 
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold mb-4 drop-shadow-xl text-white
          "
        >
          Crafting Magical Moments
        </h1>

        <p 
          className="
            text-base sm:text-lg md:text-xl 
            max-w-lg sm:max-w-xl md:max-w-2xl 
            px-2 sm:px-4 text-white/90 drop-shadow-lg
          "
        >
          We create unforgettable weddings, corporate seminars, and exhibitions with premium event management.
        </p>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-5 sm:bottom-8 w-full flex justify-center gap-2 sm:gap-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

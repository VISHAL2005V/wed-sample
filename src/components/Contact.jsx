import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when contact section comes into view
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
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-pink-50"
    >
      <div
        className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#c86b85",
            letterSpacing: "1px",
          }}
        >
          Get in Touch
        </h2>

        {/* Form Container */}
        <form
          className="max-w-xl mx-auto p-6 sm:p-8 bg-white/60 backdrop-blur-lg rounded-2xl 
                     shadow-xl border border-pink-100 space-y-7 animate-[fadeIn_1s_ease]"
        >
          {/* Floating Label Group */}
          <div className="relative group">
            <input
              type="text"
              required
              className="w-full p-4 rounded-xl bg-white/60 border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-pink-400 peer transition"
            />
            <label
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all 
                         peer-focus:-translate-y-5 peer-focus:text-pink-600 
                         peer-valid:-translate-y-5 peer-valid:text-pink-600
                         bg-pink-50 px-2 rounded-full"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              required
              className="w-full p-4 rounded-xl bg-white/60 border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-pink-400 peer transition"
            />
            <label
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all 
                         peer-focus:-translate-y-5 peer-focus:text-pink-600 
                         peer-valid:-translate-y-5 peer-valid:text-pink-600
                         bg-pink-50 px-2 rounded-full"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-white/60 border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-pink-400 peer transition"
            ></textarea>

            <label
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all
                         peer-focus:-translate-y-5 peer-focus:text-pink-600 
                         peer-valid:-translate-y-5 peer-valid:text-pink-600
                         bg-pink-50 px-2 rounded-full"
            >
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            className="w-full bg-pink-600 text-white p-4 rounded-xl text-lg font-medium 
                       shadow-lg hover:bg-pink-700 transition-all hover:scale-105
                       active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

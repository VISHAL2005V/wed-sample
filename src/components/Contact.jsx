export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

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
        <form className="max-w-xl mx-auto p-6 sm:p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-pink-100 space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
          ></textarea>

          {/* Button */}
          <button
            className="w-full bg-pink-600 text-white p-4 rounded-xl text-lg font-medium hover:bg-pink-700 transition-all shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

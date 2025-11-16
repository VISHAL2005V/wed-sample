export default function Seminars() {
  return (
    <section
      id="seminars"
      className="relative h-[90vh] md:h-screen w-full overflow-hidden"
    >
      {/* Overlay Text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-black/40">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "2px",
          }}
        >
          Wedding Functions & Celebrations
        </h2>

        <p
          className="text-sm sm:text-base md:text-xl max-w-lg sm:max-w-xl md:max-w-2xl text-white/90 drop-shadow-lg leading-relaxed"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          From colorful Haldi moments to vibrant Sangeet nights and elegant
          engagement evenings, we create unforgettable celebrations filled
          with style, décor, music, and joy.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">

        {/* Left: Tall Image */}
        <div className="h-[40vh] md:h-full">
          <img
            src="/s1.jpg"
            alt="Haldi Ceremony"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle: Two stacked images */}
        <div className="flex flex-col h-[40vh] md:h-full">
          <img
            src="/s2.jpg"
            alt="Sangeet Event"
            className="w-full h-1/2 object-cover"
          />
          <img
            src="/s4.jpg"
            alt="Engagement Ceremony"
            className="w-full h-1/2 object-cover"
          />
        </div>

        {/* Right: Tall Image */}
        <div className="h-[40vh] md:h-full">
          <img
            src="/s3.jpg"
            alt="Wedding Reception"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

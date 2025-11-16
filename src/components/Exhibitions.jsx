export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2
          className="text-5xl font-bold text-center text-purple-700 mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "2px",
          }}
        >
          Wedding Exhibitions
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg max-w-3xl mx-auto text-center text-gray-600 mb-14"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Experience our elegant exhibition setups featuring luxury décor, floral themes,
          lighting designs, and stunning wedding presentation concepts — crafted to inspire 
          your dream celebration.
        </p>

        {/* Modern Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="p-8 rounded-2xl shadow-lg border border-purple-100 bg-white hover:scale-105 transition-transform duration-300">
            <div className="text-purple-600 text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Luxury Decor Themes
            </h3>
            <p className="text-gray-600">
              Explore beautifully curated décor themes including royal, floral, pastel, and
              contemporary designs that elevate every wedding setup.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl shadow-lg border border-purple-100 bg-white hover:scale-105 transition-transform duration-300">
            <div className="text-purple-600 text-5xl mb-4">🌸</div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Floral Art & Concepts
            </h3>
            <p className="text-gray-600">
              From handcrafted garlands to premium flower walls, our floral artistry brings
              elegance and romance to every wedding exhibition.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl shadow-lg border border-purple-100 bg-white hover:scale-105 transition-transform duration-300">
            <div className="text-purple-600 text-5xl mb-4">🎇</div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Stage & Lighting Designs
            </h3>
            <p className="text-gray-600">
              A showcase of creative stage setups, ambient lighting, and premium visual
              concepts designed for luxury wedding celebrations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

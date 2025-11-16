export default function Weddings() {
  return (
    <section
      id="weddings"
      className="relative h-[90vh] md:h-screen w-full overflow-hidden"
    >

      {/* Text Over Images */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4 md:px-6 bg-black/40">

        {/* Responsive Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg"
        >
          Wedding Events
        </h2>

        {/* Responsive Paragraph */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl md:max-w-2xl drop-shadow-lg"
        >
          From traditional ceremonies to luxurious modern weddings, we design events 
          that celebrate love with style and elegance.
        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full w-full">

        {/* Image 1 */}
        <img
          src="/w5.jpg"
          alt="Wedding 1"
          className="w-full h-full object-cover"
        />

        {/* Image 2 */}
        <img
          src="/w2.jpg"
          alt="Wedding 2"
          className="w-full h-full object-cover"
        />

        {/* Image 3 */}
        <img
          src="/w4.jpg"
          alt="Wedding 3"
          className="w-full h-full object-cover hidden sm:block"
        />
      </div>

    </section>
  );
}

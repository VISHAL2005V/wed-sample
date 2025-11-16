import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Weddings from "./components/Weddings";
import Seminars from "./components/Seminars";
import Exhibitions from "./components/Exhibitions";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero / Landing */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Wedding / Events Sections */}
      <Weddings />
      <Seminars />
      <Exhibitions />

      {/* Clients Section */}
      <Clients />

      {/* Contact Us */}
      <Contact />
    </>
  );
}

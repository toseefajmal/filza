import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
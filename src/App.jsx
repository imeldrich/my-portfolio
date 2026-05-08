import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-linear-to-b from-blue-950 to-gray-900 text-white min-h-screen font-mono space-y-10 select-none">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-linear-to-b from-blue-950 to-gray-900 text-white min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;

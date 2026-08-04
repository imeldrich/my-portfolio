import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="bg-linear-to-b from-blue-950 to-gray-900 text-white min-h-screen w-full font-mono select-none">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />

      <ScrollToTop />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;

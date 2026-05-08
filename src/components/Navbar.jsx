import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 w-full text-white bg-linear-to-br from-blue-950 to-blue-900 border-b border-white/10 px-4 sm:px-6">
        <nav className="flex items-center justify-between py-4 max-w-7xl mx-auto">
          <h1 className="font-bold text-lg sm:text-xl">Eldrich Salonga</h1>

          <ul className="hidden md:flex gap-8 uppercase tracking-wider">
            <li>
              <a
                href="#hero"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contacts
              </a>
            </li>
          </ul>

          <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
            ☰
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1e293b] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-2xl text-white"
        >
          ✕
        </button>

        <div className="flex flex-col gap-8 mt-20 px-8 text-white uppercase tracking-wider">
          <a onClick={() => setOpen(false)} href="#hero">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#contacts">
            Contacts
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full text-white bg-linear-to-br from-blue-950 to-blue-900 border-b border-white/10 px-4 sm:px-6">
        <nav className="flex items-center justify-between py-4 max-w-7xl mx-auto">
          <h1 className="font-bold text-lg sm:text-xl">
            Eldrich Salonga
          </h1>

          <ul className="hidden md:flex gap-8 uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
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
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-2xl text-white"
        >
          ✕
        </button>

        <div className="flex flex-col gap-8 mt-20 px-8 text-white uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
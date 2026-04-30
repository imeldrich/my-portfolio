const Navbar = () => {
  return (
    <header className="sticky top-0 text-white border-b border-white/10 min-w-2xl">
      <nav className="flex items-center justify-between px-6 py-4">
        <h1 className="text-white font-bold text-xl">Eldrich Salonga</h1>

        <ul className=" flex gap-8 text-white uppercase tracking-wider">
          <li className="hover:text-gray-300 transition">
            <a
              href="#hero"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li className="hover:text-gray-300 transition">
            <a
              href="#about"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li className="hover:text-gray-300 transition">
            <a
              href="#projects"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li className="hover:text-gray-300 transition">
            <a
              href="#contacts"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contacts
            </a>
          </li>
        </ul>

        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
          Let's Talk
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

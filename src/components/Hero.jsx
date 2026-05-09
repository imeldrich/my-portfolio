import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="hero" className="grid lg:grid-cols-2 mx-auto items-center py-5 px-4 gap-16 lg:max-w-7xl">
      <img
        src="/eldrich.png"
        alt="Eldrich's photo"
        className="rounded-full mx-auto lg:order-2"
      />

      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Eldrich!</span>
        </h1>

        <p className="text-blue-300 mt-2 text-lg">Frontend Developer</p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Hi, I’m an aspiring frontend developer passionate about creating
          simple, user-friendly, and responsive web applications using React and
          Tailwind CSS.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Projects
          </a>

          <a href='#contacts' className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors">
            Hire me
          </a>
        </div>

        <div className="flex gap-5 mt-6 text-xl">
          <a
            href="https://github.com/imeldrich"
            target="_blank"
            className="hover:text-gray-300 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/eldrich-salonga-3602aa342"
            target="_blank"
            className="hover:text-gray-300 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/imeldrich"
            target="_blank"
            className="hover:text-gray-300 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

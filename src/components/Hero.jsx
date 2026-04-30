import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid lg:grid-cols-2 mx-auto items-center py-5 gap-16 lg:max-w-7xl"
    >
      <img
        src="/eldrich.png"
        alt="Eldrich's photo"
        className="rounded-full mx-auto lg:order-2"
      />

      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Eldrich!</h1>

        <p className="text-blue-300 mt-2 text-lg">Frontend Developer</p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Hi, I’m an aspiring frontend developer passionate about creating
          simple, user-friendly, and responsive web applications using React and
          Tailwind CSS.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
            Projects
          </button>

          <button className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors">
            Hire me
          </button>
        </div>

        <div className="flex gap-5 mt-6 text-xl">
          <a
            href="https://github.com/imeldrich"
            className="hover:text-gray-300 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/eldrich-salonga-3602aa342/"
            className="hover:text-gray-300 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

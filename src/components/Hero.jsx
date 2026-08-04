import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid lg:grid-cols-2 mx-auto items-center py-20 px-4 gap-16 lg:max-w-7xl"
    >
      <img
        src="/eldrich.png"
        alt="Eldrich Salonga"
        className="rounded-full mx-auto lg:order-2"
      />

      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm{" "}
          <span className="text-blue-400 uppercase">
            <TypeAnimation
              sequence={["Eldrich!", 2000]}
              wrapper="span"
              speed={40}
              cursor={true}
              repeat={0}
            />
          </span>
        </h1>

        <p className="text-blue-300 mt-2 text-lg h-8">
          <span className="inline-block min-w-70">
            <TypeAnimation
              sequence={[
                "Computer Science Graduate",
                2000,
                "Full-Stack Developer",
                2000,
                "IT Support",
                2000,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={Infinity}
            />
          </span>
        </p>
        
        <p className="mt-4 text-gray-300 leading-relaxed">
          I build responsive web applications using React, TypeScript, Node.js,
          Express.js, and MongoDB. I also have hands-on experience in IT
          support, including computer troubleshooting, software installation,
          and basic network configuration.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="#projects"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

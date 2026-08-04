const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <h2 className="text-lg text-blue-400 font-semibold tracking-widest uppercase text-center mb-6">
        About Me
      </h2>

      <div className="bg-[#1e293b] p-6 sm:p-10 rounded-2xl shadow-lg border border-slate-700 space-y-5 leading-relaxed text-gray-300">
        <p>
          Hi! I'm{" "}
          <span className="font-semibold text-white">
            Eldrich Salonga
          </span>
          , a Computer Science graduate passionate about technology, problem
          solving, and building reliable software solutions.
        </p>

        <p>
          I build responsive web applications using{" "}
          <span className="text-white">
            React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, and
            REST APIs
          </span>
          . I enjoy developing both frontend interfaces and backend services
          while writing clean, maintainable, and scalable code.
        </p>

        <p>
          My projects include developing RESTful APIs for user authentication,
          product management, and user processing, integrating the frontend
          with a Node.js, Express.js, and MongoDB backend.
        </p>

        <p>
          During my IT Technician internship, I gained hands-on experience in
          computer troubleshooting, operating system installation, software
          configuration, hardware maintenance, and basic LAN network setup,
          strengthening both my technical and problem-solving skills.
        </p>

        <p>
          I'm always eager to learn new technologies, improve my skills, and
          take on new challenges. I'm currently seeking opportunities in{" "}
          <span className="font-semibold text-white">
            IT Support, Technical Support, or Junior Software Development
          </span>{" "}
          where I can contribute, continue learning, and grow professionally.
        </p>
      </div>
    </section>
  );
};

export default About;
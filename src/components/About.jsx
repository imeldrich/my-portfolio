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
          , a Computer Science graduate with hands-on experience in IT support,
          troubleshooting, and basic networking.
        </p>

        <p>
          During my IT Technician internship, I gained practical experience in
          <span className="text-white">
            {" "}computer hardware and software troubleshooting, Windows
            installation and configuration, software installation, preventive
            maintenance, and basic LAN setup.
          </span>
        </p>

        <p>
          I also have knowledge of{" "}
          <span className="text-white">
            TCP/IP, DNS, DHCP, and Windows networking commands
          </span>{" "}
          such as <span className="text-white">ipconfig, ping, tracert,</span>{" "}
          and <span className="text-white">nslookup</span>. I enjoy
          troubleshooting technical problems and learning how systems and
          networks work.
        </p>

        <p>
          In addition to IT support, I have experience in{" "}
          <span className="text-white">
            frontend and backend web development
          </span>{" "}
          using React, TypeScript, Tailwind CSS, Node.js, Express.js, and
          MongoDB. I have applied these skills in building full-stack projects
          with RESTful APIs and authentication.
        </p>

        <p>
          I'm a fast learner who is willing to improve and develop my technical
          skills. I'm currently seeking opportunities in{" "}
          <span className="font-semibold text-white">
            IT Support or Technical Support
          </span>{" "}
          where I can contribute, gain experience, and grow professionally.
        </p>
      </div>
    </section>
  );
};

export default About;
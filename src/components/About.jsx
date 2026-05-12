const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <h2 className="text-lg text-blue-400 font-semibold tracking-widest uppercase text-center mb-6">
        Get to Know Me
      </h2>

      <div className="bg-[#1e293b] p-6 sm:p-10 rounded-2xl shadow-lg border border-slate-700 space-y-4 leading-relaxed text-gray-300">
        <p>
          Hi! I’m Eldrich Salonga, an aspiring frontend developer focused on
          building responsive, accessible, and user-friendly web applications.
        </p>

        <p>
          I enjoy crafting clean and modern interfaces using React and Tailwind
          CSS, with a strong focus on usability, performance, and smooth user
          experience.
        </p>

        <p>
          My current skills include HTML, CSS, JavaScript, React, and Tailwind
          CSS. I’m continuously improving my knowledge in modern web
          development, exploring best practices, and building real-world
          projects to sharpen my skills.
        </p>

        <p>
          My goal is to grow into a full-stack developer and contribute to
          impactful applications that solve real problems and create meaningful
          user experiences.
        </p>

        <p>
          I’m currently open to learning opportunities, collaborations, and
          projects that will help me grow as a developer and improve my craft.
        </p>
      </div>
    </section>
  );
};

export default About;

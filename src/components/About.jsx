const About = () => {
  return (
    <section className="flex flex-col p-6 sm:p-10 max-w-6xl mx-auto">
      <h2 id="about" className="text-2xl font-bold text-center mb-6">
        Get to Know Me
      </h2>

      <div className="bg-[#1e293b] p-6 sm:p-10 rounded-2xl shadow-lg border border-slate-700 space-y-4 leading-relaxed text-gray-300">
        <p>
          Hi! I’m Eldrich Salonga, a frontend developer focused on building
          responsive and user-friendly web applications.
        </p>

        <p>
          I enjoy creating clean and modern interfaces using React and Tailwind
          CSS, with a strong focus on usability and performance.
        </p>

        <p>
          My current skills include HTML, CSS, JavaScript, React, and Tailwind
          CSS. I’m continuously improving my knowledge in modern web development
          and best practices.
        </p>

        <p>
          My goal is to become a full-stack developer and build real-world
          applications that solve meaningful problems.
        </p>
      </div>
    </section>
  );
};

export default About;

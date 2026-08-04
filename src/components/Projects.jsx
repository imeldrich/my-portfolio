import projects from "../projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <h2 className="text-lg text-blue-400 font-semibold tracking-widest uppercase text-center mb-10">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-3">{proj.name}</h3>

              <p className="text-gray-300 leading-relaxed mb-5">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.techstack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-slate-700 border border-slate-600 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-500 transition-colors py-3 rounded-lg font-semibold"
                >
                  🌐 Live Demo
                </a>

                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-slate-500 hover:bg-slate-700 transition-colors py-3 rounded-lg font-semibold"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
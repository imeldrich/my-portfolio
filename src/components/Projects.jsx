import projects from "../projects";

const Projects = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-10">
      <h2 id="projects" className="text-2xl font-bold text-center mb-6">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((proj) => {
          return (
            <div
              key={proj.id}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold">{proj.name}</h3>

                <p className="text-gray-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex gap-3.5 flex-wrap">
                  {proj.techstack.map((tech, id) => {
                    return (
                      <div
                        key={id}
                        className="bg-gray-600 hover:bg-gray-500 transition-colors px-4 py-1 rounded-full"
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-500 rounded-full transition-colors py-3 px-5 w-full font-semibold text-center"
                  >
                    View Project
                  </a>
                  <a
                    href={proj.repo}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-500 rounded-full transition-colors py-3 px-5 w-full font-semibold text-center"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

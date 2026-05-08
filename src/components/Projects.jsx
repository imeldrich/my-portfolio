import tenzies from "../images/tenzies.png";
import todolist from "../images/todo-list.png";

const Projects = () => {
  return (
    <section className="py-10 px-10">
      <h2 id="projects" className="text-2xl font-bold text-center mb-6">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300">
          <img src={tenzies} alt="" className="w-full h-64 object-cover" />

          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold">Tenzies App</h3>

            <p className="text-gray-300 leading-relaxed">
              A fun and interactive dice game built with React that demonstrates
              state management, conditional rendering, and dynamic gameplay.
            </p>

            <a
              href="https://eldrich-tenzies-app.netlify.app"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors py-3 font-semibold text-center"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:scale-105 transition-transform duration-300">
          <img src={todolist} alt="" className="w-full h-64 object-cover" />

          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold">To-do List App</h3>

            <p className="text-gray-300 leading-relaxed">
              A responsive task management app that lets users add, edit,
              complete, and delete tasks with local storage support for saving
              data.
            </p>

            <a
              href="https://todo-list-eldrich.vercel.app"
              target="_blank"
              className="bg-blue-600  hover:bg-blue-500  rounded-lg transition-colors py-3 font-semibold text-center"
            >
              View Project
            </a>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Projects;

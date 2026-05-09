import tenzies from "./images/tenzies.png";
import todolist from "./images/todo-list.png";

const projects = [
  {
    id: 1,
    name: "Tenzies App",
    img: tenzies,
    description:
      " A fun and interactive dice game built with React that demonstrates state management, conditional rendering, and dynamic gameplay.",
    techstack: ["react", "css"],
    link: "https://eldrich-tenzies-app.netlify.app",
    repo: "https://github.com/imeldrich/tenzies-app",
  },
  {
    id: 2,
    name: "To-do List App",
    img: todolist,
    description:
      "A fun and interactive dice game built with React that demonstrates state management, conditional rendering, and dynamic gameplay.",
    techstack: ["react", "tailwind css", 'local storage'],
    link: "https://todo-list-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/todo-list",
  },
];

export default projects;

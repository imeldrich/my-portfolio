import tenzies from "./images/tenzies.png";
import todolist from "./images/todo-list.png";
import assembly from "./images/assembly.png";

let nextProjId = 1

const projects = [
  {
    id: nextProjId++,
    name: "Tenzies App",
    img: tenzies,
    description:
      " A fun and interactive dice game built with React that demonstrates state management, conditional rendering, and dynamic gameplay.",
    techstack: ["react", "css"],
    link: "https://eldrich-tenzies-app.netlify.app",
    repo: "https://github.com/imeldrich/tenzies-app",
  },
  {
    id: nextProjId++,
    name: "To-do List App",
    img: todolist,
    description:
      "A responsive to-do list application built with React and Tailwind CSS that allows users to add, edit, delete, and save tasks using LocalStorage.",
    techstack: ["react", "tailwind css", 'local storage'],
    link: "https://todo-list-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/todo-list",
  },
  {
    id: nextProjId++,
    name: "Assembly Game",
    img: assembly,
    description:
      "Assembly: Endgame is a React, TypeScript, and CSS word-guessing game where players try to guess the hidden word before running out of attempts.",
    techstack: ["react", "typescript", 'css'],
    link: "https://assembly-game-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/assembly-game",
  },
];

export default projects;

import tenzies from "./images/tenzies.png";
import todolist from "./images/todo-list.png";
import foodcart from "./images/foodcart.png";

let nextProjId = 1;

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
    techstack: ["react", "tailwind css", "local storage"],
    link: "https://todo-list-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/todo-list",
  },
  {
    id: nextProjId++,
    name: "Food Cart",
    img: foodcart,
    description:
      "A full-stack restaurant ordering system built with React, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB. Features product management, REST APIs, JWT authentication, and a responsive user interface.",
    techstack: ["react", "typescript", "tailwind css", "express js", "mongodb"],
    link: "https://ordering-system-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/ordering-system",
  },
];

export default projects;

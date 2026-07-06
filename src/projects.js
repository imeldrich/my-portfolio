import tenzies from "./images/tenzies.png";
import todolist from "./images/todo-list.png";
import assembly from "./images/assembly.png";
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
    name: "Assembly Game",
    img: assembly,
    description:
      "Assembly: Endgame is a word-guessing game built with React, TypeScript, and CSS. The project was already built in JavaScript, and I converted it to TypeScript to practice static typing by adding types for props and state while resolving type errors.",
    techstack: ["react", "typescript", "css"],
    link: "https://assembly-game-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/assembly-game",
  },
  {
    id: nextProjId++,
    name: "Food Cart",
    img: foodcart,
    description:
      "A React, TypeScript, and Tailwind CSS shopping cart application where users can add products, adjust quantities, remove items, and view a dynamically updated total price in a responsive sliding cart interface.",
    techstack: ["react", "typescript", "tailwind css", "express js"],
    link: "https://ordering-system-eldrich.vercel.app",
    repo: "https://github.com/imeldrich/ordering-system",
  },
];

export default projects;

const header = document.createElement("header");
const h1 = document.createElement("h1");
const toDoSection = document.createElement("section");
const toDoAdd = document.createElement("div");
const input = document.createElement("input");
const btn = document.createElement("button");

const toDoList = document.createElement("ol");
// let toDoArr = [];

h1.textContent = "To Do List";

toDoSection.classList.add("todo-section");

toDoAdd.classList.add("todo-section__todo-add");

input.classList.add("todo-section__input");
input.type = "text";
input.placeholder = "Введите текст...";
input.name = "input";

btn.classList.add("todo-section__btn");
btn.innerText = "add";

document.body.prepend(header, toDoSection);

header.prepend(h1);
toDoSection.prepend(toDoAdd);
toDoAdd.prepend(input);
toDoAdd.append(btn);
toDoSection.append(toDoList);

// document.addEventListener
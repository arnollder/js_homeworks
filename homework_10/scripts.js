const header = document.createElement("header");
const toDoSection = document.createElement("section");
const toDoAdd = document.createElement("div");
const input = document.createElement("input");
const btn = document.createElement("button");

header.className = "header";
header.innerHTML = "<h1>To Do List</h1>";

toDoSection.classList.add("todo-section");

toDoAdd.classList.add("todo-section__todo-add");

input.classList.add("my-input");
input.type = "text";
input.placeholder = "Введите текст...";
input.name = "input";

btn.classList.add("todo-section__btn");
btn.innerText = "add";

document.body.prepend(header, toDoSection);

toDoSection.prepend(toDoAdd);
toDoAdd.prepend(input);
toDoAdd.append(btn);

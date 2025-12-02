const header = document.createElement("header");
const h1 = document.createElement("h1");
const toDoSection = document.createElement("section");
const toDoAdd = document.createElement("div");
const input = document.createElement("input");
const btn = document.createElement("button");

let toDoList = document.createElement("ol");

let toDoArr = [];

h1.textContent = "To Do List";

toDoSection.classList.add("todo-section");

toDoAdd.classList.add("todo-section__todo-add");

input.classList.add("todo-section__input");
input.type = "text";
input.placeholder = "Введите текст...";
input.name = "input";
input.id = "textInput";

btn.id = "addBtn";
btn.innerText = "add";

document.body.prepend(header, toDoSection);

header.prepend(h1);
toDoSection.prepend(toDoAdd);
toDoAdd.prepend(input);
toDoAdd.append(btn);
toDoSection.append(toDoList);

// заполнение списка
const addBtn = document.getElementById("addBtn");
const textInput = document.getElementById("textInput");


// Работает без localStorage
addBtn.addEventListener("click", () => {
    const text = textInput.value.trim();

    if (text != "") {
        toDoArr.push(text);
        textInput.value = "";
        console.log(toDoArr);
    }

    toDoArr.forEach((toDo) => {
        toDoArr = [];

        const toDoItem = document.createElement("li");
        toDoItem.textContent = toDo;
        toDoList.append(toDoItem);
    });
});


// let toDoArr = localStorage.getItem(key);
// toDoArr.forEach((item) => {

// }
// )

//     // Получить существующий массив или создать новый
//     const getArrayFromStorage = (key) => {
//         const item = localStorage.getItem(key);
//         return item ? JSON.parse(item) : [];
//     };
  
//     // Добавить новый элемент в массив
//     const key = 'myArray';
//     const existingArray = getArrayFromStorage(key);
//     existingArray.push(text);
  
//     // Сохранить обновленный массив
//     localStorage.setItem(key, JSON.stringify(existingArray));
//     console.log(existingArray)

//     window.location.reload();

// Object.keys(localStorage).forEach((key) => {
//     // toDoArr = [];
//     const toDoItem = document.createElement("li");
//     toDoItem.textContent = localStorage.getItem(key);
//     toDoList.append(toDoItem);

// toDoArr.forEach((toDo) => {
//     // toDoArr = [];
//     const toDoItem = document.createElement("li");
//     toDoItem.textContent = toDo;
//     toDoList.append(toDoItem);
// });

// });

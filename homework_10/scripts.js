const header = document.createElement("header");
const h1 = document.createElement("h1");
const toDoSection = document.createElement("section");
const toDoAdd = document.createElement("div");
const input = document.createElement("input");
const btn = document.createElement("button");

const toDoList = document.createElement("ol");
let toDoArr = [];

h1.textContent = "To Do List";

toDoSection.classList.add("todo-section");

toDoAdd.classList.add("todo-section__todo-add");

input.classList.add("todo-section__input");
input.type = "text";
input.placeholder = "Введите текст...";
input.name = "input";
input.id = "textInput";

// btn.classList.add("todo-section__btn");
btn.id = "addBtn";
btn.innerText = "add";

document.body.prepend(header, toDoSection);

header.prepend(h1);
toDoSection.prepend(toDoAdd);
toDoAdd.prepend(input);
toDoAdd.append(btn);
toDoSection.append(toDoList);

// заполнение списка
// const addBtn = document.getElementById("addBtn");
const textInput = document.getElementById("textInput");

document.getElementById("addBtn").addEventListener("click", () => {
    const text = textInput.value.trim();

    if (text != "") {
        toDoArr.push(text);
        textInput.value = "";
    }
});

console.log(toDoArr)

// <script>
//     const textArray = []; // Наш массив
//     const addButton = document.getElementById('addBtn');
//     const textInput = document.getElementById('textInput');
//     const resultDiv = document.getElementById('result');

//     addButton.addEventListener('click', function() {
//         const text = textInput.value.trim();

//         if (text !== '') {
//             textArray.push(text); // Добавляем текст в массив
//             textInput.value = ''; // Очищаем поле ввода
//             updateDisplay(); // Обновляем отображение
//         }
//     });

//     function updateDisplay() {
//         resultDiv.innerHTML = `
//             <h3>Содержимое массива:</h3>
//             <p>${textArray.join(', ')}</p>
//             <p>Всего элементов: ${textArray.length}</p>
//         `;
//     }
// </script>

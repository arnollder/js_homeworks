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

// Функция для получения массива из localStorage
const getArrayFromStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
};

// Функция для отображения списка дел
const renderToDoList = () => {
    const key = "myArray";
    toDoArr = getArrayFromStorage(key);

    // Очищаем текущий список
    toDoList.innerHTML = "";

    // Создаем элементы списка из массива
    toDoArr.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;

        // Добавляем кнопку для удаления
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            removeItemFromArray(index);
        });

        listItem.append(deleteBtn);
        toDoList.append(listItem);
    });
};

// Функция для удаления элемента из массива
const removeItemFromArray = (index) => {
    const key = "myArray";
    toDoArr = getArrayFromStorage(key);

    // Удаляем элемент по индексу
    toDoArr.splice(index, 1);

    // Сохраняем обновленный массив
    localStorage.setItem(key, JSON.stringify(toDoArr));

    // Перерисовываем список
    renderToDoList();
};

// Заполнение списка
const addBtn = document.getElementById("addBtn");
const textInput = document.getElementById("textInput");

addBtn.addEventListener("click", () => {
    const text = textInput.value.trim();

    if (text === "") {
        alert("Пожалуйста, введите текст!");
        return;
    }

    const key = "myArray";
    toDoArr = getArrayFromStorage(key);
    toDoArr.push(text);

    // Сохранить обновленный массив
    localStorage.setItem(key, JSON.stringify(toDoArr));

    // Очистить поле ввода
    textInput.value = "";

    // Обновить отображение списка
    renderToDoList();
});

// Добавляем возможность добавления по нажатию Enter
textInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// Загружаем и отображаем список при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    renderToDoList();
});

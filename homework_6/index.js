// =============================================================
// 1. Преобразовать строку в массив слов. Напишите функцию
// stringToArray(str), которая преобразует строку в массив слов.
// =============================================================

// метод split

const stringToArray = (str) => str.split(" ");
console.log(stringToArray("новый массив"));

// Цикл for
{
    const stringToArray = (str) => {
        let targetArray = [];
        let tempArray = [];
        let tempStr = "";

        for (i of str) {
            if (i != " ") {
                tempArray = [...tempArray, i];
                tempStr = tempArray.join("");
            } else {
                targetArray = [...targetArray, tempStr];
                tempStr = "";
                tempArray = [];
            }
        }
        targetArray = [...targetArray, tempStr];

        return targetArray;
    };
    console.log(stringToArray("новый массив"));
}

// =============================================================
// 2. Напишите функцию deleteCharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества
// символов.
// =============================================================


const deleteCharacters = (str, length) => str.slice(0, length);
console.log(deleteCharacters("Это очень длинный текст, который нужно обрезать", 23));


// =============================================================
// 3. Напишите функцию insertDash(str), которая принимает строку
// str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в
// верхний регистр.
// =============================================================

{
    const insertDash = (str) => {
        const regex = new RegExp(/\s/g);
        return str.toUpperCase().replace(regex, " - ");
    };

    console.log(insertDash("Разделяем слова с помощью тире"));
}

// =============================================================
// 4. Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки из
// нижнего регистра в верхний.
// =============================================================

// Обращение по индексу, метод substring и конкатенация

const firstSymbToUpperCase = (str) => {
    return str[0].toUpperCase() + str.slice(1); //str.substring(1, Infinity)
};

console.log(firstSymbToUpperCase("первый символ в верхнем регистре"));

// Через регулярное выражение
{
    const firstSymbToUpperCase = (str) => {
        return str.replace(/^./, (firstSymb) => firstSymb.toUpperCase());
    };
    console.log(firstSymbToUpperCase("первый символ в верхнем регистре"));
}
// =============================================================
// 5. Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы.
// =============================================================

// Работа с массивом и метод .join()
const capitalize = (str) => {
    let tempList = [];
    strList = stringToArray(str);
    for (word of strList) {
        tempList.push(firstSymbToUpperCase(word));
    }
    return tempList.join(" ");
};

console.log(capitalize("каждое слово с заглавной буквы"));

// Работа со строкой
{
    const capitalize = (str) => {
        let newStr = "";
        strList = stringToArray(str);
        for (word of strList) {
            newStr = newStr + firstSymbToUpperCase(word) + " ";
        }
        return newStr;
    };

    console.log(capitalize("каждое слово с заглавной буквы"));
}

// =============================================================
// 6. Напишите функцию changeRegister(str), которая принимает в
// качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».
// =============================================================

// С помощью методов
{
    // чекаем регистр
    const isUpperCase = (char) => (char === char.toUpperCase() ? true : false);
    // основная функция
    const changeRegister = (str) => {
        let result = [];
        for (char of str) {
            isUpperCase(char) ? result.push(char.toLowerCase()) : result.push(char.toUpperCase());
        }
        return result.join("");
    };
    console.log(changeRegister("КаЖдЫй ОхОтНиК"));
}

// С помощью определения кодов символов
{
    // чекаем регистр
    const isUpperCase = (char) =>
        char.charCodeAt() >= 1040 && char.charCodeAt() <= 1071 ? true : false;
    // основная функция
    const changeRegister = (str) => {
        let result = [];
        for (char of str) {
            isUpperCase(char)
                ? result.push(String.fromCharCode(char.charCodeAt() + 32))
                : result.push(String.fromCharCode(char.charCodeAt() - 32));
        }
        return result.join("");
    };
    console.log(changeRegister("КаЖдЫй ОхОтНиК"));
}

// Регулярные выражения
{
    // чекаем регистр
    const isUpperCase = (char) => {
        const regex = new RegExp(/\p{Lu}/u);
        return regex.test(char);
    };
    // основная функция
    const changeRegister = (str) => {
        let result = [];
        for (char of str) {
            isUpperCase(char) ? result.push(char.toLowerCase()) : result.push(char.toUpperCase());
        }
        return result.join("");
    };
    console.log(changeRegister("КаЖдЫй ОхОтНиК eVeRy HuNtEr"));
}

// =============================================================
// 7. Напишите функцию removeChar(str), которая возвращает
// строку, очищенную от всех не буквенно-цифровых символов.
// =============================================================

// Регулярное выражение
{
    const checkChar = (char) => {
        const regex = new RegExp(/[\p{L}\p{N}]/u);
        console.log(regex.test(char));
        return regex.test(char);
    };

    const removeChar = (str) => {
        let result = [];
        for (char of str) {
            checkChar(char) ? result.push(char) : false;
        }
        return result.join("");
    };
    console.log(removeChar("Эта_строка_о-ч-и-щ!е???на от $$$вССсего-лишнего..152."));
}

// =============================================================
// 8. Напишите функцию zeros(num, len), которая дополняет нулями
// до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого
// аргумента.
// =============================================================

const checkPositivity = (num) => {
    if (num == 0) {
        return String("0");
    }
    return num > 0 ? String("+") : String("-");
};

const zeros = (num, len) => {
    let result = [checkPositivity(num)];
    for (i = 0; i < len - 2; i++) {
        result.push(0);
    }
    result.push(Math.abs(num));
    return result.join("");
};
console.log(zeros(5, 3));

// =============================================================
// 9. Напишите функцию comparison(str1, str2), которая сравнивает
// строки без учёта регистра символов.
// =============================================================

// Самое очевидное решение через приведение к единому регистру
{
    const comparison = (str1, str2) => (str1.toLowerCase() === str2.toLowerCase() ? true : false);
    console.log(comparison("СРАВНИВАЕМ СТРОКИ", "сравниваем строки"));
}

// Регулярное выражение
{
    const comparison = (str1, str2) => {
        const regex = new RegExp(`^${str1}$`, "i");
        return regex.test(str2);
    };
    console.log(comparison("СРАВНИВАЕМ СТРОКИ", "сравниваем строки"));
}

// =============================================================
// 10. Напишите функцию insensitiveSearch(str1, str2), которая
// осуществляет поиск подстроки str2 в строке str1 без учёта
// регистра символов.
// =============================================================

// Метод includes с приведением к общему регистру
{
    const insensitiveSearch = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());

    console.log(insensitiveSearch("ПоИСК подстроки", "пОиск"));
}

// Регулярное выражение
{
    const insensitiveSearch = (str1, str2) => {
        const regex = new RegExp(`${str2}`, "i");
        return str1.match(regex) ? true : false;
    };
    console.log(insensitiveSearch("ПоиСКк подстроки", "пОиск"));
}

// =============================================================
// 11. Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое
// слово внутри строки пишется с заглавной буквы.
// =============================================================

// Воспользуемся ранее написанными функциями:
//      stringToArray(): Преобразует строку в массив слов
//      capitalize(str): Возвращает строку, в которой каждое слово начинается с заглавной буквы

const initCap = (str) => stringToArray(capitalize(str)).join("");
console.log(initCap("it is camel case style"));

// =============================================================
// 12. Напишите функцию initSnake(str), которая преобразует
// стиль написания составных слов строки из CamelCase в
// snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с
// маленькой буквы.
// =============================================================

{
    const initSnake = (str) => {
        let tempString = "";
        for (let char of str.slice(1)) {
            if (char === char.toLowerCase()) {
                tempString += char;
            } else {
                tempString = tempString + "_" + char.toLowerCase();
            }
        }
        return str[0].toLowerCase() + tempString;
    };
    console.log(initSnake("SnakeCaseVersion-1"));
}

{
    const initSnake = (str) => {
        let tempList = [];
        let tempString = "";
        for (let char of str.slice(1)) {
            if (char === char.toLowerCase()) {
                tempString += char;
            } else {
                tempList.push(tempString);
                tempString = char.toLowerCase();
            }
        }
        tempList.push(tempString);
        return str[0].toLowerCase() + tempList.join("_");
    };
    console.log(initSnake("SnakeCaseVersion-2"));
}

// =============================================================
// 13. Напишите функцию repeatStr(str, n), которая возвращает
// строку повторяемую определённое количество раз.
// =============================================================

// Метод .repeat()
{
    const repeatStr = (str, n) => str.repeat(n);
    console.log(repeatStr("1", 3));
}

// Работа с массивом
{
    const repeatStr = (str, n) => Array(n).fill(str).join("");
    console.log(repeatStr("1", 3));
}

// Цикл for
{
    const repeatStr = (str, n) => {
        result = "";
        for (let i = 0; i < n; i++) {
            result += str;
        }
        return result;
    };
    console.log(repeatStr("1", 3));
}

// =============================================================
// 14. Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из
// полного пути к файлу.
// =============================================================

{
    const path = (pathname) => {
        pathnameReverse = pathname.split("").reverse().join("");
        let tempString = "";
        console.log(pathnameReverse);
        for (char of pathnameReverse) {
            if (char != "\\") {
                tempString += char;
            } else {
                return tempString.split("").reverse().join("");
            }
        }
        return tempString.split("").reverse().join("");
    };
    console.log(path("home\\arnold\\soft\\gtc"));
}

// =============================================================
// 15. Создайте функцию endsWith(), который сравнивает
// подстроку str1 с окончанием исходной строки str и определяет
// заканчивается ли строка символами подстроки.
// =============================================================

const endsWith = (str, str1) => {
    const regex = new RegExp(`${str}$`, "i");
    return regex.test(str1);
};
console.log(endsWith("строки", "окончание строки"));

// =============================================================
// 16. Напишите функцию getSubstr(str, char, pos), которая
// возвращает часть строки, расположенную после или до
// указанного символа char в зависимости от параметра pos.
// =============================================================

const getSubstr = (str, char, pos) => {
    let result;
    if (pos == "до") {
        result = str.substr(0, char);
    } else if (pos == "после") {
        result = str.substr(char);
    } else {
        result = `Неверный аргумент: ${pos}`;
    }
    return result;
};
console.log(getSubstr("Обрезать строку до указанного символа", 18, "до"));
console.log(getSubstr("Обрезать строку после", 9, "после"));
console.log(getSubstr("Обрезать строку", 13, "парампампам"));

// =============================================================
// 17. Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str. По
// умолчанию подстрока вставляется в начало строки.
// =============================================================

{
    const insert = (str, substr, pos) => str.substring(0, pos) + substr + ' ' + str.substring(pos);
    console.log(insert("Вставить сюда", "подстроку", 9));
}

// =============================================================
// 18. Напишите функцию limitStr(str, n, symb), которая обрезает
// строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...»
// (если не задан параметр symb) или заданным символом symb.
// =============================================================

const limitStr = (str, n, symb='...') => str.length > n ? deleteCharacters(str, n) + symb : str
console.log(limitStr('Очень длинная строка', 12))

// =============================================================
// 19. Напишите функцию count(str, stringsearch), которая
// возвращает количество символов stringsearch в строке str.
// =============================================================

// =============================================================
// 20. Напишите функцию strip(str), которая удаляет все лишние
// пробелы из строки str.
// =============================================================

// =============================================================
// 21. Напишите функцию cutString(str, n), которая удаляет лишние
// слова из строки str, оставив в ней n слов.
// =============================================================

// =============================================================
// 22. Напишите функцию findWord(word, str), которая проверяет,
// существует ли в строке str слова word.
// ============================================================

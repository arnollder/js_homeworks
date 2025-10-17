// ====== Глобальные переменные =====

const isTrue = "Верно";
const isFalse = "Неверно";

// Работа с if-else

console.log("Работа с if-else");

// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("Задача 1");

// console.time()
{
    let a = 0;
    if (a === 0) {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}
// console.timeEnd()

// console.time()
{
    const a = 0 === 0 ? isTrue : isFalse;
    console.log(a);
}
// console.timeEnd()

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("Задача 2");

{
    let a = 0;
    if (a > 0) {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = 0 > 0 ? isTrue : isFalse;
    console.log(a);
}

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("Задача 3");

{
    let a = 0;
    if (a < 0) {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = 0 < 0 ? isTrue : isFalse;
    console.log(a);
}

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("Задача 4");

{
    let a = 0;
    if (a >= 0) {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = 0 >= 0 ? isTrue : isFalse;
    console.log(a);
}

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("Задача 5");

{
    let a = 0;
    if (a <= 0) {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = 0 <= 0 ? isTrue : isFalse;
    console.log(a);
}

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log("Задача 6");

{
    let a = 0;
    if (a != 0) {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = 0 != 0 ? isTrue : isFalse;
    console.log(a);
}

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.

console.log("Задача 7");

{
    let a = 0;
    if (a === "test") {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = "test" === "test" ? isTrue : isFalse;
    console.log(a);
}

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.
//  Проверьте работу скрипта при a, равном '1', 1, 3.

console.log("Задача 8");

{
    let a = 1;
    if (a === "1") {
        a = isTrue;
    } else {
        a = isFalse;
    }
    console.log(a);
}

{
    const a = "1" === "1" ? isTrue : isFalse;
    console.log(a);
}

// Работа с логическими переменными

console.log("Работа с логическими переменными");

// 1. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

console.log("Задача 1");

{
    const test = true ? isTrue : isFalse;
    console.log(test);
}

{
    let test = true;
    if (test == true) {
        test = isTrue;
    } else {
        test = isFalse;
    }
    console.log(test);
}

// 2. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

console.log("Задача 2");

{
    const test = false != true ? isTrue : isFalse;
    console.log(test);
}

{
    let test = false;
    if (test != true) {
        test = isTrue;
    } else {
        test = isFalse;
    }
    console.log(test);
}

// Работа с && (и) и || (или)

console.log("Работа с && (и) и || (или)");

// 1. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.

console.log("Задача 1");

// console.time();
{
    const a = 2;
    const result = a > 0 && a < 5 ? isTrue : isFalse;
    console.log(result);
}
// console.timeEnd();

// console.time();
{
    let a = 2;

    if (a > 0 && a < 5) {
        a = isTrue;
    } else {
        a = isFalse;
    }

    console.log(a);
}
// console.timeEnd();

// 2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
// Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

console.log("Задача 2");

{
    let a = 0;
    const result =
        a == 0 || a == 2 ? (a = a + 2) : (a = a / 10);
    console.log(a);
}

{
    let a = 5;
    if (a == 0 || a == 2) {
        a = a + 2;
    } else {
        a = a / 10;
    }
    console.log(a);
}

// 3. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

console.log("Задача 3");

{
    const a = 1;
    const b = 3;

    const result = a <= 1 && b >= 3 ? a + b : a - b;
    console.log(result);
}

{
    let result;
    const a = 1;
    const b = 3;

    if (a <= 1 && b >= 3) {
        result = a + b;
    } else {
        result = a - b;
    }
    console.log(result);
}

// 4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'.

console.log("Задача 4");

{
    const a = 0;
    const b = 0;

    const result =
        (a > 2 && a < 11) || (b >= 6 && b < 14)
            ? isTrue
            : isFalse;
    console.log(result);
}

{
    let result;
    const a = 2;
    const b = 6;

    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        result = isTrue;
    } else {
        result = isFalse;
    }
    console.log(result);
}

// На switch-case
// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
// то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
// Решите задачу через switch-case.

console.log("Задача на switch-case");

{
    let result;
    const num = 1;

    switch (num) {
        case 1:
            result = "зима";
            break;
        case 2:
            result = "весна";
            break;
        case 3:
            result = "лето";
            break;
        case 4:
            result = "осень";
            break;
        default:
            result =
                "ошибка: значение вне диапазона от 1 до 4";
    }
    console.log(result);
}

// Общие задачи

console.log("Общие задачи");

// 1. В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

console.log("Задача 1");

{
    const day = 12;
    let decade;

    if (day >= 1 && day <= 10) {
        decade = "первая декада";
    } else if (day >= 11 && day <= 20) {
        decade = "вторая декада";
    } else if (day >= 21 && day <= 31) {
        decade = "третья декада";
    } else {
        decade =
            "ошибка: значение вне диапазона от 1 до 31";
    }
    console.log(decade);
}

// 2. В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

console.log("Задача 2");

{
    const month = 11;
    let season;

    if (month == 12 || month <= 2) {
        season = "зима";
    } else if (month >= 3 && month <= 5) {
        season = "весна";
    } else if (month >= 6 && month <= 8) {
        season = "лето";
    } else if (month >= 9 && month <= 11) {
        season = "осень";
    } else {
        season =
            "ошибка: значение вне диапазона от 1 до 12";
    }
    console.log(season);
}

// 3. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

console.log("Задача 3");

// не сразу смекнул, что стоит найти способ в рамках пройденного материала

{
    const myString = "abcde";
    const controlChar = "a";
    let result;

    for (const char of myString) {
        if (char === controlChar) {
            result = "да";
        } else {
            result = "нет";
        }
        break;
    }
    console.log(result);
}

// а вот так без боли в глазах!! )))

{
    const myString = "abcde";

    if (myString[0] == "a") {
        result = "да";
    } else {
        result = "нет";
    }
    console.log(result);
}

{
    const myString = "abcde";
    const result =
        Array.from(myString)[0] == "a" ? "да" : "нет";
    console.log(result);
}

// Циклы while и for

console.log("Циклы while и for");

// Решите эти задачи сначала через цикл while, а затем через цикл for.
// 1. Выведите столбец чисел от 1 до 100.

console.log("Задача 1 - while");
{
    let i = 0;

    while (i != 100) {
        i++;
        console.log(i);
    }
}

console.log("Задача 1 - do while");

{
    let i = 0;

    do {
        i++;
        console.log(i);
    } while (i < 100);
}

console.log("Задача 1 - for");

{
    for (let i = 1; i != 101; i++) {
        console.log(i);
    }
}

// 2. Выведите столбец чисел от 11 до 33.

console.log("Задача 2 - while");
{
    let i = 10;

    while (i != 33) {
        i++;
        console.log(i);
    }
}

console.log("Задача 2 - do while");

{
    let i = 10;

    do {
        i++;
        console.log(i);
    } while (i < 33);
}

console.log("Задача 2 - for");

{
    for (let i = 11; i != 34; i++) {
        console.log(i);
    }
}

// 3. Выведите столбец четных чисел в промежутке от 0 до 100.

console.log("Задача 3 - while");
// можно так
{
    let i = 0;

    while (i != 100) {
        i = i + 2;
        console.log(i);
    }
}
// но лучше вот так
{
    let i = 0;

    while (i != 100) {
        i++;
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

{
    let i = 0;

    while (i != 100) {
        i++;
        i % 2 == 0 ? console.log(i) : false;
    }
}

console.log("Задача 3 - do while");

{
    let i = 0;

    do {
        i++;
        if (i % 2 == 0) {
            console.log(i);
        }
    } while (i < 100);
}

console.log("Задача 3 - for");

{
    for (let i = 1; i != 101; i++) {
        i % 2 == 0 ? console.log(i) : false;
    }
}

// 4. С помощью цикла найдите сумму чисел от 1 до 100.

console.log("Задача 3 - while");

{
    let i = 0;
    let count = 0;

    while (i != 100) {
        i++;
        count = count + i;
    }
    console.log(count);
}

console.log("Задача 3 - do while");

{
    let i = 0;
    let count = 0;

    do {
        i++;
        count = count + i;
    } while (i != 100);
    console.log(count);
}

console.log("Задача 3 - for");

{
    let count = 0;
    for (let i = 1; i < 101; i++) {
        count = count + i;
    }
    console.log(count);
}

// Задачи общие.

console.log("Задачи общие");

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num

{
    let n = 1000;
    let num = 0;

    while (n > 50) {
        n = n / 2;
        num++;
    }
    console.log("Итогое число:", n);
    console.log("Количество итераций:", num);
}

{
    let n = 1000;
    let num = 0;
    for (n; n > 50; n / 2) {
        n = n / 2;
        num++;
    }
    console.log("Итогое число:", n);
    console.log("Количество итераций:", num);
}

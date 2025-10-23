// ===========
// проверка типа всех переменных на число
let errorMessage;

function checkNums(...args) {
    for (let value of args) {
        if (typeof value != "number") {
            errorMessage = "Допустимо только числовое значение!";
            return false;
        }
    }
    return true;
}
// проверка номера дня недели
function checkDayOfWeek(num) {
    if (num < 1 || num > 7) {
        errorMessage = "Допустимо только число в диапазоне от 1 до 7!";
        return false;
    }
    return true;
}

// =============================================================
// 1. Сделайте функцию, которая возвращает квадрат числа. Число
// передается параметром.
// =============================================================

{
    function square(num) {
        return num ** 2;
    }
    console.log(square(2));
}

{
    const square = function (num) {
        return num ** 2;
    };
    console.log(square(2));
}

{
    const square = (num) => num ** 2;
    console.log(square(2));
}

// Дальше я решил повыпендриваться и добавил проверку по типу переменной
{
    function square(num) {
        if (checkNums(num)) {
            return num ** 2;
        } else return errorMessage;
    }
    console.log(square(2));
}

// Если return нельзя использовать внутри тернарного оператора, то я решил использовать тернарный оператор внутри return
{
    const square = function (num) {
        return checkNums(num) ? num ** 2 : errorMessage;
    };
    console.log(square(2));
}

// Вот так вообще круто, но тяжело к прочтению.......
{
    const square = (num) => (checkNums(num) ? num ** 2 : errorMessage);
    console.log(square(2));
}

// ==========================================================
// 2. Сделайте функцию, которая возвращает сумму двух чисел.
// ==========================================================

{
    function sum(a = 0, b = 0) {
        return checkNums(a, b) ? a + b : errorMessage;
    }
    console.log(sum(1, 9));
}

{
    const sum = function (a = 0, b = 0) {
        return checkNums(a, b) ? a + b : errorMessage;
    };
    console.log(sum(1, 9));
}

{
    const sum = (a = 0, b = 0) => (checkNums(a, b) ? a + b : errorMessage);
    console.log(sum(1, 9));
}

// =================================================================================
// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// =================================================================================

{
    const myCalc = function (a, b, c) {
        return checkNums(a, b, c) ? (a - b) / c : errorMessage;
    };
    console.log(myCalc(10, 1, 3));
}

{
    const myCalc = (a, b, c) => (checkNums(a, b, c) ? (a - b) / c : errorMessage);
    console.log(myCalc(10, 1, 3));
}

// =============================================================
// 4. Сделайте функцию, которая принимает параметром число от 1
// до 7, а возвращает день недели на русском языке.
// =============================================================

{
    const dayOfWeek = function (num) {
        if (checkNums(num) && checkDayOfWeek(num)) {
            const listDays = [
                "Понедельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Суббота",
                "Воскресенье",
            ];
            return listDays[num - 1];
        } else return errorMessage;
    };
    console.log(dayOfWeek(5));
}

{
    const listDays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ];
    const dayOfWeek = (num) =>
        checkNums(num) && checkDayOfWeek(num) ? listDays[num - 1] : errorMessage;

    console.log(dayOfWeek(6));
}

// =============================================================
// 5. Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не
// равны - false.
// =============================================================

// Не уверен, что не перемудрил, поэтому реализовал с проверкой на число (isEqual) и без (mainEqual)

const mainEqual = (a = 0, b = 0) => (a === b ? true : false);
console.log(mainEqual(1, "1"));

{
    const isEqual = function (a = 0, b = 0) {
        if (checkNums(a, b)) {
            return mainEqual(a, b);
        } else return errorMessage;
    };
    console.log(isEqual(1, "2"));
}

{
    const isEqual = (a = 0, b = 0) => (checkNums(a, b) ? mainEqual(a, b) : errorMessage);
    console.log(isEqual(1, "2"));
}

// =============================================================
// 6. Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то -
// false.
// =============================================================

{
    const comparison = (a = 0, b = 0) => (a + b > 10 ? true : false);
    console.log(comparison(3, 3));
}

{
    const comparison = function (a = 0, b = 0) {
        return a + b > 10 ? true : false;
    };
    console.log(comparison(3, 3));
}

// =============================================================
// 7. Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет. Если отрицательное -
// пусть функция вернет true, а если нет - false.
// =============================================================

{
    const isNegative = function (num) {
        return num < 0 ? true : false;
    };
    console.log(isNegative(3));
}

{
    const isNegative = (num) => (num >= 0 ? true : false);
    console.log(isNegative(3));
}

// =============================================================
// 8. Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше
// 10. Если это так - пусть функция возвращает true, если не так -
// false.
// =============================================================

{
    const isNumberInRange = (num) => (num > 0 && num < 10 ? true : false);
    console.log(isNumberInRange(0));
}

{
    const isNumberInRange = function (num) {
        return num > 0 && num < 10 ? true : false;
    };
    console.log(isNumberInRange(9));
}

// =============================================================
// 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его
// цифр.
// =============================================================

// с помощью остатка от деления на 10

const getDigitsSum = function (digit = 123, sum = 0) {
    while (digit) {
        sumDigit = digit % 10;
        digit = (digit - sumDigit) / 10;
        sum += sumDigit;
    }
    return sum;
};
console.log(getDigitsSum(22222));

// преобразование в строку и обращение по индексу
{
    const getDigitsSum = function (digit, sum = 0) {
        digit = String(digit);
        for (value in digit) {
            sum += +digit[value];
        }
        return sum;
    };
    console.log(getDigitsSum(123));
}

// методы мы не проходили, но с ними чуть проще

{
    const getDigitsSum = function (digit = 123, sum = 0) {
        while (digit) {
            sum += digit % 10;
            digit = Math.floor(digit / 10);
        }
        return sum;
    };
    console.log(getDigitsSum(333));
}

// ================================================================
// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна 13.
// Для этого используйте вспомогательную функцию getDigitsSum
// из предыдущей задачи.
// ================================================================

{
    const yearSumThirteen = function (a, b) {
        let yearSumThirteenList = [];
        for (i = a; i <= b; i++) {
            getDigitsSum(i) === 13 ? yearSumThirteenList.push(i) : false;
        }
        return yearSumThirteenList;
    };
    console.log(yearSumThirteen(1, 2020));
}

// ===========================================================
// 11. Сделайте функцию isEven() (even - это четный), которая
// параметром принимает целое число и проверяет: четное оно
// или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.
// ===========================================================

// Метод остатка от деления на 2
{
    const isEven = (num) => (num % 2 === 0 ? true : false);
    console.log(isEven(112));
}

// С помощью побитового оператора.
// (если честно, так и не понял до конца, как именно это работает, но этот способ
// гораздо быстрее предыдущего, поэтому просто оставлю это здесь)
{
    const isEven = (num) => ((num & 1) === 0 ? true : false);
    console.log(isEven(111));
}

// ==========================================================
// 12. *Дано число. Сложите его цифры. Если сумма получилась
// более 9-ти, опять сложите его цифры. И так, пока сумма не
// станет однозначным числом (9 и менее). Можно использовать
// функцию getDigitsSum из 9 задачи
// ==========================================================

{
    const untilTheEnd = function (num) {
        while (num > 9) {
            num = getDigitsSum(num);
        }
        return num;
    };
    console.log(untilTheEnd(1111111111));
}

// 13. * Напишите стрелочную функцию, которая будет
// возвращать true если строка является палиндромом и false в
// противном случае.

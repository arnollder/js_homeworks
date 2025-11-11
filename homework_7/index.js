// 1. Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.

const sourceArray = ["исходный", "массив", "строк"];
const newArray = sourceArray.map((el) => el.length);
console.log(newArray);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
// 19]. Использую метод reduce() напишите функцию
// currentSums(numbers), которая возвращает новый массив из
// такого же числа элементов, в котором на каждой позиции
// будет находиться сумма элементов массива numbers до этой
// позиции включительно.

const currentSums = (numbers) => {
    let sum = 0;
    tempList = [];
    numbers.reduce((acc, value) => {
        sum += value;
        tempList.push(sum);
    }, []);
    return tempList;
};

numbers = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.

// метод forEach()
{
    const sevenFunc = (sourceArray) => {
        const newArray = [];
        sourceArray.forEach((el) => newArray.push([el, 7 - el]));
        return newArray;
    };
    console.log(sevenFunc([0, 4, 3, 7, 15, 112]));
}
// метод map()
{
    const sevenFunc = (sourceArray) => sourceArray.map((el) => [el, 7 - el]);
    console.log(sevenFunc([0, 4, 3, 7, 15, 112]));
}

// 4. Напишите код, создающий массив, который будет состоять из
// первых букв слов строки str.

const firstChar = (str) => str.split(" ").map((el) => el[0]);
console.log(firstChar("первые буквы этой строки"));

// 5. Напишите код, создающий массив, который будет состоять из
// строк, состоящих из предыдущего, текущего и следующего
// символа строки str.

{
    const threeChar = (str) => {
        strArr = str.split("");
        return strArr.map((el, i) => {
            if (i === 0) {
                return strArr[i] + strArr[i + 1];
            } else if (i == strArr.length - 1) {
                return strArr[i - 1] + strArr[i];
            } else {
                return strArr[i - 1] + strArr[i] + strArr[i + 1];
            }
        });
    };
    console.log(threeChar("жестоко!!"));
}

// 6. Напишите код, преобразующий массив цифр, которые
// располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.

const unorderedArray = [12, 5, 8, 7, 3, 5, 1];
console.log();

// 7. Напишите код, объединяющий три массива цифр, и
// располагающий цифры, в полученном массиве, в порядке
// убывания их значений через пробел.

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
// [6]]. Найдите сумму элементов этого массива. Массив, конечно
// же, может быть произвольным.

const twoDimensional = [[1, 2, 3], [4, 5], [6]];
console.log(twoDimensional.flat(Infinity).reduce((acc, val) => acc + val));

// 9. Дан массив с числами. Не используя метода reverse
// переверните его элементы в обратном порядке.

const reverseArray = (arr) =>
    arr
        .map((el) => el.toString())
        .reduceRight((acc, val) => acc + val)
        .split("")
        .map((el) => Number(el));

console.log(reverseArray([12, 5, 8, 7, 3, 5, 1]));

// 10. Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше
// 10-ти.

// 11. Напишите функцию arrayFill, которая будет заполнять
// массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример:
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

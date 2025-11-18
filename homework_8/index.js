// 1. Что выведет функция?
// function f() {
//     alert(this);
// }
// let user = {
//     g: f.bind(null),
// };
// user.g();

// Функция вернёт глобальный объект "[object Window]"

// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();

// Не можем, т.к. она уже определена первым вызовом bind

// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind?
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );

// Значение не изменится, но оно не будет скопировано в новую функцию, поэтому alert( bound.test ); вернёт underfined

// 4. Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'Вася',
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk, user.loginFail);

// 5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
// askPassword(?, ?);

// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = {value: ‘Привет’}
// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }
// //Тут напишите конструкцию с bind()
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов
// Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров
// Петр'

// 7. Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c

// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.

console.log(3 < 2 ?? 2 < 1);

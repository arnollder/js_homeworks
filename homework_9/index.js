// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамилия работника.

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        console.log(this.rate * this.days);
    }
    getFullName() {
        console.log(this.name + ` ` + this.surname);
    }
}

const doctor = new Worker("Ай", "Болит", 2000, 7);

doctor.getFullName();
doctor.getSalary();

// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker из прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

// Полное наследование класса
class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers;
        // console.log(rate, days, workers);
    }
    getTotalSalary() {
        console.log(this.rate * this.days * this.workers);

        // console.log('rate:', this.rate, 'days:', this.days, 'workers:', this.workers);
        // console.log('Types:', typeof this.rate, typeof this.days, typeof this.workers);
        // console.log(this.rate * this.days * this.workers);
    }
}

const boss = new Boss("Ай", "Болит", 2000, 7, 2);
boss.getTotalSalary();

// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

{
    class Worker {
        constructor(name, surname, rate, days) {
            this.name = name;
            this.surname = surname;
            this.rate = rate;
            this.days = days;
        }
        getSalary() {
            console.log(this.rate * this.days);
        }
        getFullName() {
            console.log(this.name + ` ` + this.surname);
        }

        set rate(value) {
            this._rate = value;
        }
        get rate() {
            return this._rate;
        }

        set days(value) {
            this._days = value;
        }
        get days() {
            return this._days;
        }
    }

    const doctor = new Worker("Ай", "Болит", 2000, 7);
    console.log(doctor.rate, doctor.days);
}

// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

class MyString {
    constructor(str) {
        this.str = str;
    }
    reverse() {
        return [...this.str].reverse().join("");
    }
    ucFirst() {
        return this.str.charAt(0).toUpperCase() + this.str.slice(1);
    }
    ucWords() {
        return this.str
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
}

const str = new MyString("панама бой");
console.log(str.reverse());
console.log(str.ucFirst());
console.log(str.ucWords());

// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

class Validator {
    isEmail(value) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
    }
    isDomain(value) {
        const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/;
        return domainRegex.test(value);
    }
    isDate(value) {
        const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
        return dateRegex.test(value);
    }
    isPhone(value) {
        const cleanPhone = value.replace(/\s/g, "");
        const phoneRegex = /^(\+7|8)?\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/;
        return phoneRegex.test(cleanPhone);
    }
}

const validator = new Validator();

console.log(validator.isEmail("test@example.com"));
console.log(validator.isDomain("testexample.cm"));
console.log(validator.isDate("03.11.1990"));
console.log(validator.isPhone("+7 999 777 33 33"));

// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse() {
        const today = new Date();
        const currentYear = today.getFullYear();
        if ((currentYear - this.year) < 1 || (currentYear - this.year) > 5) {
            return 'Некорректный год поступления'
        }
        return currentYear - this.year
        
    }
}

const student = new Student('Илья', 'Морозов', 2022);

console.log(student.getFullName())
console.log(student.getCourse())

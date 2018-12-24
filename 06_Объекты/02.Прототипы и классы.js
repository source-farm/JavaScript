
//------------------------------------------------------------------------------
// Прототипы
//------------------------------------------------------------------------------

// Рассмотрим следующий код:
let empty = {};
console.log(empty.toString);   // [Function: toString]
console.log(empty.toString()); // [object Object]
console.log();

// Хотя мы объявили связывание empty как пустое, можно видеть, что в нём
// откуда-то взялось свойство toString. Такое стало возможным благодаря
// механизму прототипов JavaScript. Прототип - это объект, в котором происходит
// поиск свойства, если в текущем объекте оно не найдено. При отсутствии
// свойства у объекта поиск этого свойства продолжается в прототипе этого
// объекта и если не найден в прототипе, то дальше поиск идёт в прототипе
// прототипа и т.д. В корне этого поиска всегда находится объект
// Object.prototype:
console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype));       // null
console.log();

// Object.prototype имеет несколько методов, среди которых есть и toString.
// Именно к нему мы и обратились в связывании empty.

// Многие объекты не связаны напрямую с Object.prototype. Например, для функций
// прототипом является Function.prototype, а для массивов Array.prototype:
console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // true
console.log(Object.getPrototypeOf([]) == Array.prototype);          // true
console.log();

// Эти прототипы сами тоже имеют прототипы, часто Object.prototype:
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype); // true
console.log();

// С помощью Object.create можно создать объект с явным указанием его
// прототипа:
let protoRabbit = {
    speak: function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

// Связывание killerRabbit указывает на объект, прототипом которого является
// protoRabbit.
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!"); // speak был найден в protoRabbit.
console.log();

// protoRabbit получается неким контейнером для общих свойств всех зайцев.

//------------------------------------------------------------------------------
// Классы до ES 2015
//------------------------------------------------------------------------------

// Благодаря прототипам в JavaScript можно реализовать что-то наподобие классов
// из других языков. В прототип объекта можно включить методы класса, но также
// можно определять и данные объекта. Например, это можно сделать с помощью
// следующей функции:
function makeRabbit(type) {
    // Указываем protoRabbit как прототип для rabbit.
    let rabbit = Object.create(protoRabbit);
    // Определяем данные объекта.
    rabbit.type = type;
    return rabbit;
}

let r = makeRabbit("funny");
r.speak("Ha-Ha");
console.log();

// JavaScript упрощает создание такого рода объектов благодаря благодаря
// налачию ключевого слова new. Если перед вызовом функции поставить new, то
// происходит следующее:
//
// 1. Создаётся новый пустой объект и внутри вызываемой функции this указывает
//    именно на этот объект.
//
// 2. Прототипом этого нового объекта становится объект <название функции>.prototype.
//    Все функции автоматически получают свойство prototype, которое хранит
//    пустой объект, прототипом которого является Object.prototype. Также важно
//    понять, что свойство prototype функции и прототип функции это разные
//    объекты: свойство prototype получают все функции при создании; прототипом
//    всех функций как мы уже говорили является объект Function.prototype.
//
// Благодаря такому поведению JavaScript позволяет создавать
// функции-конструкторы. Принято называть такие функции с большой буквы.
// Пример:

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let richRabbit = new Rabbit("rich");
richRabbit.speak("cash");
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(richRabbit) == Rabbit.prototype);
console.log();

//------------------------------------------------------------------------------
// Классы после ES 2015
//------------------------------------------------------------------------------

// Современный JavaScript позволяет создавать конструкторы и более удобным
// способом с помощью ключевого слова class:
class Hare {
    // Конструктор.
    constructor(type) {
        this.type = type;
    }

    // Методы класса.
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let hare = new Hare("brave");
hare.speak("I'm not coward");
console.log();

//------------------------------------------------------------------------------
// Перекрывание свойств(overriding)
//------------------------------------------------------------------------------

// Если какой-то объект определяет такое же свойство, которое есть и в его
// цепочке прототипов, то это новое свойство будет иметь преимущество при
// обращении к нему:
function Bear(color) {
    this.color = color;
}

let bear = new Bear("red");
console.log(bear.color);
bear.color = "brown";
// Теперь свойство color есть уже и самого объекта bear, поэтому нет смысла
// обращаться к цепочке прототипов.
console.log(bear.color);

// То же самое можно делать с методами.
console.log(bear.toString()); // toString из Object.prototype.
bear.toString = function () {
    return `Bear: ${this.color}`;
};
console.log(bear.toString());


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
let photoRabbit = {
    speak: function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

// Связывание killerRabbit указывает на объект, прототипом которого является
// photoRabbit.
let killerRabbit = Object.create(photoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!"); // speak был найден в photoRabbit.

// photoRabbit получается неким контейнером для общих свойств всех зайцев.

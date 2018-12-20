
// В JavaScript метод - это свойство объекта, которое указывает на функцию:

let rabbit = {
    speak: function(line) {
        console.log(`The rabbit says '${line}'`);
    }
};

rabbit.speak("I'm alive");

// При вызове методу всегда доступно связывание this, которое указывает на
// объект, для которого был вызван метод:
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {
    type: "white",
    speak // Создаётся свойство speak, значение которого равно speak из глобальной области видимости.
          // По-другому можно было сделать так: "speak: speak".
};

let hungryRabbit = {
    type: "hungry",
    speak
};

whiteRabbit.speak("How late it's getting");
hungryRabbit.speak("I could use a carrot right now");

// Можно также явным образом указать чему будет равен this:
speak.call(hungryRabbit, "Burp!");

// В этом коде вызывается функция speak с установкой this равным hungryRabbit.

// Если внутри метода объявить вложенную функцию с помощью ключевого слова
// function, то из вложенной функции нельзя обратиться к this метода, т.к.
// у этой функции есть свой this. Исключением из этого являются стрелочные
// функции:
function normalize() {
    console.log(this.coords.map(n => n/this.length)); // Стрелочная функция использует this функции normalize.
}

let point = {
    coords: [1, 2, 1, 4],
    length: 10
};

normalize.call(point);

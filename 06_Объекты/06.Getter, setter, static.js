
//------------------------------------------------------------------------------
// Геттеры, сеттеры и static
//------------------------------------------------------------------------------

// В JavaScript обращение к свойству объекта не всегда означает, что
// возвращается непосредственно значение, на которое указывает это свойство.
// Возвращаемое значение может быть вычислено динамически:
let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
console.log(varyingSize.size);
console.log(varyingSize.size);
console.log();

// Для получения таких динамически вычисляемых значений используются так
// называемые геттеры: перед названием метода в литерале объекта или внутри
// класса нужно ставить слово get. В нашем примере получается, что когда будет
// будет идти обращение к свойству size на самом деле будет вызвана функция,
// которая вернёт случайное число.

// Есть также в JavaScript и сеттеры:
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    // Геттер.
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    // Сеттер.
    set fahrenheit(value) {
        this.celsius = (value - 32)/1.8;
    }

    // Статическая функция.
    static fromFahrenheit(value) {
        return new Temperature((value - 32)/1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86; // Вызов сеттера.
console.log(temp.celsius);
console.log();

// Если нужно связать метод непосредственно с классом, а не с его объектами, то
// можно воспользоваться ключевым словом static. Такие функции не имеют доступа
// к this. Пример использования:
let temp2 = Temperature.fromFahrenheit(86);
console.log(temp2.celsius);

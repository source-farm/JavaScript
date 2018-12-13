
//------------------------------------------------------------------------------
// Числа
//------------------------------------------------------------------------------

// В JavaScript числа хранятся как float64. Для ES6 и более интервал целых
// чисел можно определить так:
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log();

//------------------------------------------------------------------------------
// Строки
//------------------------------------------------------------------------------

// Строки можно определить так:
`Down on the sea`; // backtick
'Lie on the ocean';
"Float on the ocean";

// В строках между одинарными или двумя кавычкаси можно использовать escape
// последовательности, для ввода специальных символов(\n, \t и т.д.):
console.log("This is the first line\nThis is the second");

// Обратный слеш можно вывести, если набрать его 2 раза подряд:
console.log("\\n");

// Оператор + позволяет объекдинять сроки(конкатенация):
console.log("Foo" + "Bar");

// В строках между одинарными кавычками ввести одинарную кавычку можно только
// через escape последовательность \'. Также и для двойных кавычек. Backtick
// строки, которые обычно называют шаблонными литералами(template literals),
// имеют некоторые особенности. Например, всё что появляется внутри ${} в таких
// строках, вычисляется и вставляется как строка:
console.log(`half of 100 is ${100 / 2}`);
console.log();

//------------------------------------------------------------------------------
// Унарные операторы
//------------------------------------------------------------------------------

// Конечно в JavaScript не все операторы являются бинарными. Есть и унарные,
// как например, typeof:
console.log(typeof 3.14);
console.log(typeof "3.14");
console.log();

//------------------------------------------------------------------------------
// Булевы значения
//------------------------------------------------------------------------------

// Булевы значения представляются как true или false:
console.log(1 > 0);
console.log(1 < 0);

// Для строк по очереди сравниваются Unicode коды каждого символа слева направо:
console.log("a" < "b");

// Единственным значением в JavaScipt, которое не равно самому себе, является
// NaN:
console.log(NaN == NaN); // false

// NaN является своего рода значением для представления бессмысленных
// вычислений и результат одного бессмысленного вычисления не может быть равен
// результату другого бессмысленного вычисления.
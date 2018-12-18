 
// Значения простых типов как string, number и boolean не являются объектами:
// они не могут хранить свойства:
let kim = "Kim";
kim.age = 99;
console.log(kim.age);

// Хотя JavaScript и не жалуется при попытке добавить свойство, на самом деле
// свойства не сохраняются. Но строки(как и другие простые типы) всё равно имеют
// встроенные свойства:
console.log("abc".length);                      // Длина.
console.log("coconuts".slice(4, 7));            // Получение части строки.
console.log("coconut".indexOf("nut"));          // Поиск подстрок.
console.log("  okay\n".trim());                 // Удаление пробельных символов в начале и конце.
console.log("one two three".split(" "));        // Разделение.
console.log(["one", "two", "three"].join(" ")); // Объединение.
console.log("HA".repeat(3));                    // Повторение.

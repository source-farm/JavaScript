
// В JavaScript можно создавать словари для быстрого доступа к значениям по
// ключам:
let ages = new Map();
ages.set("Boris", 39);
ages.set("Julia", 32);
ages.set("James", 10);
console.log(ages.get("Boris")); // Получение значения по ключу.
console.log(ages.has("Jack"));  // Проверка существования ключа.


// Объект JSON предоставляет два метода для работы с объектами JSON:

let log = {
    squirrel: false,
    events: ["weekend"]
};

// Сериализация объекта в формат JSON.
let str = JSON.stringify(log);
console.log(str);

// Парсинг JSON строки:
let obj = JSON.parse(str);
console.log(obj.events);

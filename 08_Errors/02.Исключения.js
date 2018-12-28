 
// JavaScript поддерживает исключения:
try {
    // Конструктор Error позволяет создать объект с свойством message,
    // в котором и будет хранится сообщения исключения.
    throw new Error("BOOM!!!");
}
catch (error) {
    console.log("Nothing important. Just " + error.message);
}

console.log("Exception handled");

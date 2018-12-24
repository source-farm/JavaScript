
//------------------------------------------------------------------------------
// Итераторы
//------------------------------------------------------------------------------

// Объекты, которые передаются циклу for/of должны быть итерируемыми(iterable).
// Это означает, что они должны иметь метод, к которому можно обращаться через
// символ Symbol.iterator. Как мы уже знаем, строки можно передавать циклу
// for/of т.е. у строк есть метод, к которому можно обратиться через символ
// Symbol.iterator:
let name = "John Doe";
console.log(typeof name[Symbol.iterator]); // function
let num = 42;
console.log(typeof num[Symbol.iterator]); // undefined
console.log();

// Вызвав эту функцию мы должны получить ещё один объект, который называется
// итератором(iterator). Этот объект и осуществляет проход по всем элементам
// объекта. Итератор должен иметь метод next, который должен возвращать объект с
// свойством value равным следующему значению(если есть) и с свойством done,
// которое должно быть равно true, если обход объекта завершён. Мы можем
// напрямую работать с итераторами:
let okIterator = "OK"[Symbol.iterator](); // "OK"[Symbol.function] возвращает функцию, далее вызов этой функции возвращает итератор.
console.log(okIterator.next()); // O, done == false
console.log(okIterator.next()); // K, done == false
console.log(okIterator.next()); // undefined, done == true
console.log();

// Пример итератора:
class Matrix {
    constructor(rowsCount, colsCount, filler = (rowNum, colNum) => undefined) {
        this.rowsCount = rowsCount;
        this.colsCount = colsCount;
        this.content = [];

        for (let rowNum = 0; rowNum < rowsCount; ++rowNum)
            for (let colNum = 0; colNum < colsCount; ++colNum)
                this.content[rowNum * colsCount + colNum] = filler(rowNum, colNum);
    }

    get(rowNum, colNum) {
        return this.content[rowNum * this.colsCount + colNum];
    }

    set(rowNum, colNum, value) {
        this.content[rowNum * this.colsCount + colNum] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.rowNum = 0;
        this.colNum = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.rowNum == this.matrix.rowsCount)
            return {value: undefined, done: true};

        let value = this.matrix.get(this.rowNum, this.colNum);
        ++this.colNum;
        if (this.colNum == this.matrix.colsCount) {
            this.colNum = 0;
            ++this.rowNum;
        }

        return {value: value, done: false};
    }
}

// Делаем класс Matrix итерируемым.
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (rowNum, colNum) => `value ${rowNum},${colNum}`);
for (let value of matrix) {
    console.log(value);
}

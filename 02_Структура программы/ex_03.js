
let size = 7;
let symbol = " ";
let chessboard = "";

for (let i = 1; i <= size * size; ++i) {
    chessboard += symbol;
    symbol = (symbol == " ") ? "#" : " ";
    if (i % size == 0 && i != size * size)
    {
        chessboard += '\n';
        if (size % 2 == 0)
            symbol = (symbol == " ") ? "#" : " ";
    }
}

console.log(chessboard);

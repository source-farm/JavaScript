 
let matrix = [[1, 2, 3], [3, 2, 1], [0, 1]];
let flatMatrix = matrix.reduce((a, b) => a.concat(b));
console.log(flatMatrix);

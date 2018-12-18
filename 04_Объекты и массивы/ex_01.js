 
function range(start, end, step = 1) {
    let result = [];
    if (step < 0) {
        for (let n = start; n >= end; n += step) {
            result.push(n);
        }
    } else {
        for (let n = start; n <= end; n += step) {
            result.push(n);
        }
    }
    return result;
}

function sum(numbers) {
    let result = 0;
    for (let n of numbers)
        result += n;
    return result;
}

let r = range(1, 10, 2);
console.log(r);
console.log(sum(r));
console.log(sum(range(5, 2, -1)));

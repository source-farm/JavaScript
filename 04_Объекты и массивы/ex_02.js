
function reverseArray(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; --i) {
        result.push(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    let result = [];
    let halfLength = Math.floor(array.length/2);
    for (let i = 0; i < halfLength; ++i) {
        let tmp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tmp;
    }
    return result;
}

console.log(reverseArray([1, 2, 3]));
let nums = [1, 2, 3];
reverseArrayInPlace(nums);
console.log(nums);

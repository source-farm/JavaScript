 
function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element))
            return false;
    }
    return true;
}

let nums = [1, 2, -3];
console.log(every(nums, x => x > 0));

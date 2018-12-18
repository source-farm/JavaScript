
function arrayToList(array) {
    let head = {
        value: null,
        next: null
    };

    if (array.length == 0)
        return head;

    head.value = array[0];
    let tail = head; 
    for (let i = 1; i < array.length; ++i) {
        let node = {
            value: array[i],
            next: null
        };
        tail.next = node;
        tail = node;
    }

    return head;
}

function prependList(list, value) {
    let node = {
        value: value,
        next: list
    };

    return node;
}

function nthList(list, n) {
    let iter = list;
    for (let i = 0; i < n; ++i) {
        iter = iter.next;
        if (iter === null)
            return undefined;
    }
    return iter.value;
}

function outList(list) {
    if (list.value !== null) {
        console.log(list.value);
    }
    let iter = list.next;
    while (iter !== null) {
        console.log(iter.value);
        iter = iter.next;
    }
}

let ls = arrayToList([1, 2, 3]);
outList(ls);
console.log();

ls = prependList(ls, 4);
outList(ls);
console.log();

console.log(nthList(ls, 0));
console.log(nthList(ls, 1));

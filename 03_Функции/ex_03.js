
function countChar(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; ++i)
        if (str[i] == c)
            ++count;
    return count;
}

console.log(countChar("BARBEQUE", "B"));

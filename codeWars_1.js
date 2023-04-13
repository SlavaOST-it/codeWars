function reverseWords(str) {
    let array = str.split(" ");
    array.reverse()
    return array.join(' ').toString()                      //str.split(' ').reverse().toString()
}

console.log(reverseWords("hello world!"))


//==========================================//
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return (n * m)
    }
}

console.log(paperwork(-5, 5))


//==========================================//
function checkForFactor(base, factor) {
    return (base % factor) === 0;
}

console.log(checkForFactor(63, 7))
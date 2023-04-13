function reverseWords(str) {
    let array = str.split(" ");
    array.reverse()
    let a = array.join(' ').toString()
    return a                      //str.split(' ').reverse().toString()
}

console.log(reverseWords("hello world!"))
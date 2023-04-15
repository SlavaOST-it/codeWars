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


//=========================================//
function weatherInfo(temp) {
    let c = convertToCelsius(temp)
    if (c <= 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

//=========================================//
function convertToCelsius(temperature) {
    return (temperature - 32) * (5 / 9)
}

console.log(weatherInfo(0))


//=========================================//
function typeValidation(variable, type) {
    return typeof variable === type;
}

console.log(typeValidation("42", "number"))


//=========================================//
function getPlanetName(id) {
    let name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break
        case 2:
            name = 'Venus'
            break
        case 3:
            name = 'Earth'
            break
        case 4:
            name = 'Mars'
            break
        case 5:
            name = 'Jupiter'
            break
        case 6:
            name = 'Saturn'
            break
        case 7:
            name = 'Uranus'
            break
        case 8:
            name = 'Neptune'
            break
    }

    return name;
}

console.log(getPlanetName(5))


//=========================================//
function grow(x) {
    return x.reduce(function (a, b) {
        return a * b;
    })
}

console.log(grow([1, 2, 3, 4]))


//=========================================//
function camelize(str) {
    return str
        .split("-")
        .map((word, index) => index === 0 && word !== " " ? word : word[0].toUpperCase() + word.slice(1))
        .join("")

}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))


//=========================================//

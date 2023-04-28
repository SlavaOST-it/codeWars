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
function points(games) {
    let totalPoints = 0;
    for (const game of games) {
        const [scoreA, scoreB] = game.split(":");
        const points = scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0;
        totalPoints += points;
    }
    return totalPoints;
}


//=========================================//
function repeatStr(n, s) {
    str = ''
    for (let i = 0; i < n; i++) {
        str += s
    }
    return str
}

console.log(repeatStr(3, "*"))


//=========================================//
function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2
    }
    return sum
}

console.log(squareSum([1, 2]))   //5
console.log(squareSum([0, 3, 4, 5]))  //50
console.log(squareSum([]))


//=========================================//
function countPositivesSumNegatives(input) {
    let newArray = []
    let pozitiv = []
    let negativ = 0
    if (input === null) {
        return newArray
    }
    if (input.length === 0) {
        return newArray
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            pozitiv.push(input[i])
        } else if (input[i] <= 0) {
            negativ += input[i]
        }
    }
    newArray.unshift(pozitiv.length)
    newArray.push(negativ)
    return newArray
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
console.log(countPositivesSumNegatives(null))
console.log(countPositivesSumNegatives([]))


//=====================================//
function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0 && flower2 % 2 === 1) || (flower1 % 2 === 1 && flower2 % 2 === 0);
}

console.log(lovefunc(1, 4))
console.log(lovefunc(2, 2))
console.log(lovefunc(0, 1))
console.log(lovefunc(0, 0))


//=====================================//
function booleanToString(b) {
    return b.toString()
}


//=====================================//
function invert(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray.push(-array[i])
        } else {
            newArray.push(array[i] * (-1))
        }
    }
    return newArray;
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([-1, -2, -3, -4, -5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))
console.log(invert([0]))


//=====================================//
function fakeBin(x) {
    let array = [...x].map(Number)
    let newArray = []
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 5) {
            newArray.push(0)
        } else {
            newArray.push(1)
        }
    }
    return newArray.join("").toString()
}

console.log(fakeBin('45385593107843568'));


//=====================================//
function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))


//=====================================//
function aclean(arr) {
    let map = new Map

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join()
        map.set(sorted, word)
    }
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))


//=====================================//
function sumSalaries(salaries) {
    let sum = 0
    for (let value of Object.values(salaries)) {
        sum += value
    }
    return sum
}

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// console.log(sumSalaries(salaries))


//=====================================//
let salaries = {
    "Slava": 1000,
    "John": 100,
    "Pete": 300,
    "Mary": 250,

};

function topSalary(salaries) {
    let name = ""
    let max = 0
    for (let sal of Object.entries(salaries)) {

        if (sal[1] > max) {
            max = sal[1]
            name = sal[0]
        }
    }
    return name
}

console.log(topSalary(salaries))


//=====================================//
function removeUrlAnchor(url){
    return url.split('#')[0]
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))


//=====================================//
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3, 3, 4))
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4))


//=====================================//
function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return (value1 + value2)
    } else if (operation === '-') {
        return (value1 - value2)
    } else if (operation === '/') {
        return (value1 / value2)
    } else if (operation === '*') {
        return (value1 * value2)
    }
}

console.log(basicOp("+", 4, 7))
console.log(basicOp('-', 15, 18));


//=====================================//
function litres(time) {
    return Math.floor(time * 0.5)
}

console.log(litres(1787))


//=====================================//
// Bài 1
function checkNumber(number) {
    if (number % 15 === 0) console.log('FizzBuzz')
    else if (number % 3 === 0 && number % 5 !== 0) console.log('Fizz')
    else if (number % 3 !== 0 && number % 5 === 0) console.log('Buzz')
}

checkNumber(45)

// Bài 2

function solveFirstOrderEquation(a, b) {
    // ax + b = 0
    if (a === 0) {
        if (b === 0) console.log('Phương trình có vô số nghiệm')
        else console.log('Phương trình vô nghiệm')
    } else console.log(`Phương trình có nghiệm duy nhất x = ${b / a}`)
}

solveFirstOrderEquation(5, 0)

// Bài 3

function solveSecondEquation(a, b, c) {
    // ax^2 + bx + c = 0
    if (a === 0) solveFirstOrderEquation(b, c)
    else {
        const delta = b ** 2 - 4 * a * c
        if (delta < 0) console.log('Phương trình vô nghiệm')
        else if (delta === 0) console.log(`Phương trình có nghiệm kép: x1 = x2 = ${-b / (2 * a)}`)
        else console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${(-b - Math.sqrt(delta)) / (2 * a)} và x2 = ${(-b + Math.sqrt(delta)) / (2 * a)}`)
    }
}

solveSecondEquation(3, 5, 2)

// Bài 4

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0)) console.log('Là năm nhuận')
    else console.log('Ko là năm nhuận')
}

checkLeapYear(1900)

// Bài 5 
function calcBMI(weight, height) {
    return weight / (height ** 2)
}

console.log(calcBMI(63, 1.75))

// Bài 6

function convertCtoF(degreeC) {
    return degreeC * 1.8 + 32
}

console.log(convertCtoF(15))

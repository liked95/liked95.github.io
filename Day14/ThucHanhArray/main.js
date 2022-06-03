// function checkElementExist(array, num) {
//     return array.includes(num)
// }

// function getElementGreater(array, num) {
//     return array.filter(element => element > num)
// }

// console.log(getElementGreater([1, 2, 3, 4, 5], 3))




// // Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

// // randomHexCode() => #728a98
// // randomHexCode() => #a72938


// function randomHexCode() {
//     let hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
//     let array = []
//     for (let i = 0; i < 6; i++) {
//         array.push(hexValues[Math.floor(Math.random() * hexValues.length)])
//     }

//     return `#${array.join("")}`
// }

// console.log(randomHexCode())



// // Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

// // randomRgbCode() => rgb(213,43,133) #abc6f3
// // randomRgbCode() => rgb(12,32,122) rgb(157,202,144) rgb(118,118,77)


// function randomRgbCode() {
//     function randomNumberBetween(min, max) {
//         return Math.floor(min + (max + 1 - min) * Math.random())
//     }

//     return `rgb(${randomNumberBetween(0, 255)},${randomNumberBetween(0, 255)},${randomNumberBetween(0, 255)})`
// }

// console.log(randomRgbCode())



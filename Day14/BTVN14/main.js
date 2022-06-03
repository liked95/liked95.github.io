// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

const sortStudents = function (array) {
    return array.sort().reverse()
}

console.log(sortStudents(["Thiện", "Nam", "Thịnh", "Hoa", "Tuấn", "Hà", "Hùng"]))

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

const shuffle = function (array) {
    let newArray = []
    while (array.length > 0) {
        let randomIdx = Math.floor(Math.random() * array.length)
        newArray.push(array[randomIdx])
        array.splice(randomIdx, 1)
    }

    return newArray
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))



// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

const symmetricDifference = function (arr1, arr2) {
    let unique = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            unique.push(arr1[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            unique.push(arr2[i])
        }
    }
    return unique
}

console.log(symmetricDifference([1, 2, 6, 9, 12], [1, 2, 4, 2, 12]))



// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]


const union = function (arr1, arr2) {
    let output = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i] && !output.includes(arr1[i])) output.push(arr1[i])
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== arr1[i] && !output.includes(arr2[i])) output.push(arr2[i])
    }
    return output
}

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]))



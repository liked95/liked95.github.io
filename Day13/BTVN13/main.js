
// Bài tập:

// Bài 1: Tìm số lớn nhất trong mảng

function findLargestNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

arr1 =[1, 2, 5, 6, 0, 5, 7, 8, 9, 154, 970]
console.log(findLargestNumber(arr1))

// Bài 2: Tìm số nhỏ nhất trong mảng

function findSmallestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return min
}

arr2 =[1, 2, 5, -6, 0, 5, 7, 8, 9, 154, 970]
console.log(findSmallestNumber(arr2))

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

function createRemainerArray(arr) {
    return arr.map(element => element % 2)
}

arr3 =[1, 2, 5, -6, 0, 5, 7, -8, 9, 154, 970]
console.log(createRemainerArray(arr3))



// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function xTen(str) {
    let array = [];
    for (i = 0; i < 10; i++) {
        array[i] = str;
    }

    return array.join("")
}

console.log(xTen('a'))

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

function xTenWithHyphensBetween(str) {
    let array = [];
    for (i = 0; i < 10; i++) {
        array[i] = str;
    }

    return array.join("-")
}


console.log(xTenWithHyphensBetween('a'))

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
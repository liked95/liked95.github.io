// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
// Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3


function max2Numbers(arr) {
    // find the largest number
    let max = Math.max(...arr)
    // Sort the array from largest to smallest and assign to new array
    let descArr = arr.sort().reverse()
    // Loop through the descending array and find the First instance of number that is smaller than max, and then return the number to exit the loop
    for (number of descArr) {
        if (number < max) {
            return number
        }
    }

}

console.log(max2Numbers([2, 1, 3, 4]))
console.log(max2Numbers([2, 1, 4, 3, 4]))




// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

const getStringHasMaxLength = (arr) => {
    // Sort the array in the descending order of each element's length
    arr.sort((a, b) => b.length - a.length)
    // The first string in that arr will be the longest string
    let max = arr[0].length
    let output = []

    // Loop through the sorted array and add str that has length === max, else exit the loop to reduce run time
    for (str of arr) {
        if (str.length === max) {
            output.push(str)
        } else {
            // optional
            break
        }
    }
    return output
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd', 'adf']))

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9

const getRandomElement = arr => {
    // find the random number between 0 and arr.length - 1
    let randomIdx = Math.floor(Math.random() * arr.length)
    // return element at that found randomIdx
    return arr[randomIdx]
}

console.log(getRandomElement([3, 7, 9, 11]))

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]

const similarity = (arr1, arr2) => {
    let output = []
    // Loop through arr1
    for (let i = 0; i < arr1.length; i++) {
        // if arr1[i] element is included in arr2 and arr1[i] is currently not in output, add arr1[i] to the result
        if (arr2.includes(arr1[i]) && !output.includes(arr1[i])) {
            output.push(arr1[i])
        }
    }

    return output
}

console.log(similarity([1, 2, 3], [1, 2, 4]))
console.log(similarity([1, 2, 3, 7, 8, 5, 5], [3, 4, 5]))
console.log(similarity([1, 9, 2, 3], [1, 2, 4, 7, 8, 9]))


// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // Ví dụ:
// getTime("9:20:56", 7) => "9:21:3"

// t: string, x: number //

const getTime = (t, x) => {
    // split the t string into array
    t = t.split(":")
    // calculate time into seconds
    // hour will be the first element, min --> second, sec --> third
    let timeSeconds = 3600*Number(t[0]) + 60*Number(t[1]) + Number(t[2])
    // add the x seconds
    timeSeconds += x;
    // Convert time second back to hh:mm:ss

    // hour will be the floor result of time divided by 3600 and the remaining seconds will be the modulo of timeSeconds by 3600
    // similarly, min and seconds will follow the same rules


    // in case hour >=24 return the modulo of hour by 24
    let hour = Math.floor(timeSeconds/3600) % 24
    timeSeconds = timeSeconds % 3600
    

    // similarly, min and seconds will follow the same rules
    let min = Math.floor(timeSeconds/60)
    timeSeconds = timeSeconds % 60


    // put the hour, min and seconds into an array and join with ":" to return a string
    let resArray = [hour, min, timeSeconds]
    return resArray.join(":")
    
}

console.log(getTime("9:20:56", 7))
console.log(getTime("14:20:56", 100))
console.log(getTime("23:59:56", 15))
console.log(getTime("0:55:56", 100000000))


// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function filterByAgeGreaterThanAndStatus(arr, lowerLimitAge, status) {
    // use the first filter() to filter elements with element.age > lowerLimitAge
    // use the second filter() to filter elements with element.status = status
    return arr.filter(user => user.age > lowerLimitAge).filter(user => user.isStatus === status)
}

console.log(filterByAgeGreaterThanAndStatus(users, 25, true))


// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

function filterByAscAge(arr) {
    // User the sort() method to compare and sort the age of two neighboring elements.
    return arr.sort((user1, user2) => user1.age - user2.age)
}

console.log(filterByAscAge(users))


// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

const getCountElement = arr => {
    // Initiate an empty object
    const res = {}

    // Loop through the input array
    for (element of arr) {

        // For each loop, if the element is not in any keys of the res object, add a new key:value pair into the object, where key === element and value = 1
        // Value = 1 because this is the first encounter of the element
        if (!(element in res)) {
            res[element] = 1;
        } else {
            // if the element is already a key in the res object, simply increment its value by 1;
            res[element] ++;
        }
        
    }

    return res

}



console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))
console.log(getCountElement(["one", "two", "three", "one", "one", "three", 'love', 'three']))
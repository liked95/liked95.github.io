// var kthPalindrome = function (queries, intLength) {
//     let output = []
//     // get the first half string 12321 --> 123, 1221 --> 12
//     let firstHalfDigitsLength = Math.floor((intLength + 1) / 2);
//     for (let i = 0; i < queries.length; i++) {
//         // find the index of the kth palindrome
//         // 10^2 + queries[0] = 100 + 1 = 101
//         let firstHalf = 10 ** (firstHalfDigitsLength - 1) + queries[i] - 1;
//         // check if helper is larger than right bound >= 1000
//         if (firstHalf >= 10 ** firstHalfDigitsLength) {
//             output.push(-1);
//         } else {
//             let lastHalfDigitsLength = intLength - firstHalfDigitsLength;
//             let lastHalf = Number(firstHalf.toString().slice(0, lastHalfDigitsLength).split("").reverse().join("")); /// 123 --> 21
//             let palindrome = firstHalf * (10 ** lastHalfDigitsLength) + lastHalf;
//             output.push(palindrome);
//         }
//     }

//     return output
// }

// queries = [2,4,6]
// intLength = 8
// console.log(kthPalindrome(queries, intLength))


// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359


function smallestNumber2(num) {
    let numArray = num.toString().split("").sort();
    if (numArray[0] != '-') {
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] != 0) {
                let removeItem = numArray[i]
                numArray.splice(i, 1);
                numArray.unshift(removeItem);
                break;
            }
        }
    } else {
        numArray = numArray.reverse();
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] == '-') {
                let removeItem = numArray[i]
                numArray.splice(i, 1);
                numArray.unshift(removeItem);
                break;
            }
        }
    }

    return Number((numArray.join("")))

}

console.log(smallestNumber2(-1540125))
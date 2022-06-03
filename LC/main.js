var getLucky = function (s, k) {
    let nums = ""
    for (let i = 0; i < s.length; i++) {
        nums += Number(s[i].charCodeAt(0)) - 96
    }

    
    for (let i = 0; i < k; i++) {
        var tempSumDigits = 0;
        while (nums.length > 0) {
            tempSumDigits += Number(nums.slice(nums.length-1));
            nums = nums.slice(0, nums.length-1)
        }
        nums = tempSumDigits.toString()
    }
    return tempSumDigits
};

console.log(getLucky('dbvmfhnttvr', 5))

// let nums = ""
// s = 'dbvttvr'
// for (let i = 0; i < s.length; i++) {
//     nums += Number(s[i].charCodeAt(0)) - 96
// }
// console.log(nums) // 4(2)(22)(13)(6)(8)(14)(20)(20)(22)(18)
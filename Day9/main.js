const nums = [2,7,11,15, 2, 18, 5, 90]
const target = 101


var twoSum = function(nums, target) {
    let output = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output.push(i);      
                output.push(j);
                break;
            }
        }
    }
    
    return output;
};

console.log(twoSum(nums, target))
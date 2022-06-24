class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(4)
const b = new TreeNode(8)
const c = new TreeNode(5)
const d = new TreeNode(0)
const e = new TreeNode(1)
const f = new TreeNode(6)



a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    if (nums.length < 3) return[]
    const target = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) break
        if (i !== 0 && nums[i] == nums[i-1]) continue
        
        let low = i + 1, high = nums.length - 1
        
        while (low < high) {
            
            let sum = nums[i] + nums[low] + nums[high]
            
            if (sum === target) {
                let triple = [nums[i], nums[low], nums[high]]
                res.push(triple) 
                while (nums[low] === triple[1]) low++
                while (nums[high] === triple[2]) high--
            } else if (sum > target) {
                high--
            } else {
                low++
            }
        }
    }
    
    return res
};

var threeSum1 = function(nums) {
    nums.sort((a, b) => a - b)
    // console.log(nums)
    const n = nums.length
    if(n < 3) return []
    
    if (nums[n-1]+nums[n-2]+nums[n-3] < 0 || nums[0]+nums[1]+nums[2] > 0) return []
    
    let res = []
    recur(nums, 0, [])
    return res
    
    
    
    function recur(nums, sum, temp) {
        if (temp.length == 3 && sum === 0) {
            res.push(temp.slice())
            return;
        } 
        
      
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[i-1]) {
                temp.push(nums[i])
                recur(nums.slice(i+1), sum + nums[i], temp)
                temp.pop()
            }
        }
    }
};

console.log(threeSum([1, 5, -2, -4, -3, 2, 9, 8, -1, -5, 6]))
console.log(threeSum1([1, 5, -2, -4, -3, 2, 9, 8, -1, -5, 6]))
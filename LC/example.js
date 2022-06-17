class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
const e = new TreeNode(5)
const f = new TreeNode(6)



a.left = b
a.right = c
b.left = d
// b.left = e
// c.left = f







// console.log(coinChange([2, 3, 4], 7))
// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([7, 14], 300))
// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([1, 2, 3], 4))


function combinations(nums) {
    let res = []
    recur(0, [])
    return res


    function recur(idx, temp) {
        res.push(temp.slice())

        for (let i = idx; i < nums.length; i++) {
            temp.push(nums[i])
            recur(i + 1, temp)
            temp.pop()
        }
    }
}

console.log(combinations([0, 1, 2]))


function permutation(nums) {
    let res = []
    recur([])
    return res


    function recur(temp) {

        if (temp.length === nums.length) res.push(temp.slice())

        for (let i = 0; i < nums.length; i++) {
            if (temp.indexOf(nums[i]) !== -1) continue;

            temp.push(nums[i])
            recur(temp)
            temp.pop()
        }
    }
}


// console.log(permutation([1, 2, 3]))

var constructMaximumBinaryTree = function(nums) {
    
    return construct(nums)
    
   
    function construct(nums) {
        if (nums.length === 0) return null;
        let max = Math.max(...nums)
        let maxIdx = nums.indexOf(max)
        let root = new TreeNode(max) 
        root.left = construct(nums.slice(0, maxIdx))
        root.right = construct(nums.slice(maxIdx + 1))
        return root
    } 
};
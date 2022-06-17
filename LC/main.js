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


function isPalindromic(str) {
    let left = 0;
    let right = str.length - 1
    while (left < right) {
        if (str[left] != str[right]) return false
        left++
        right--
    }
    return true;
}

console.log(isPalindromic("racecar"))
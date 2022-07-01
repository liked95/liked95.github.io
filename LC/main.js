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


let arr = [3, 2, 4, 1]


function flip(idx) {
    let left = 0, right = idx
    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
}


flip(2)

console.log(arr)

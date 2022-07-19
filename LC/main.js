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






let arr = [3,1,2,4]
function prevLessElement(arr) {
    let ans = new Array(arr.length).fill(-1), stack = []
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length-1]]) {
            stack.pop()
        }
        if (stack.length) ans[i] = stack[stack.length-1]
        stack.push(i)
    }

    return ans
}





const nextLessEle = arr => {
    let ans = new Array(arr.length).fill(-1)
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length-1]]) {
            ans[stack.pop()] = i
        }

        stack.push(i)
    }
    return ans
}
console.log(nextLessEle(arr))    
console.log(prevLessElement(arr))
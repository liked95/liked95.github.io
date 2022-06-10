class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(2)
const d = new Node(3)
const e = new Node(3)



a.left = b
a.right = c
b.right = d
c.right = e


// var isBalanced = function (root) {
//     function dfs(root) {
//         if (!root) return [true, 0]
//         let left = dfs(root.left)
//         let right = dfs(root.right)
//         let balanced = Math.abs(left[1] - right[1]) <= 1 && left[0] && right[0]
//         return [balanced, Math.max(left[1], right[1]) + 1]
//     }
//     return dfs(root)[0]
// };



var pathSum = function(root, targetSum) {
    let result = []
    const dfs = (root, currentSum, temp = []) => {
        if (!root) return;
        
        temp.push(root.val)
        currentSum += root.val

        if (!root.left && !root.right && currentSum === targetSum) {
            result.push([...temp])
        }

        dfs(root.left, currentSum, temp)
        dfs(root.right, currentSum, temp)

    }

    return result
};
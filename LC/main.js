class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(3)
const b = new TreeNode(9)
const c = new TreeNode(20)
const d = new TreeNode(15)
const e = new TreeNode(7)



a.left = b
a.right = c
c.left = d
c.right = e


var combinationSum3 = function (k, n) {
    let res = []

    function dfs(idx, currentSum, count, tmp) {
        if (currentSum > n) return;


        if (count === k && currentSum === n) {
            res.push(tmp.slice())
        }
        for (let i = idx; i <= 9; i++) {
            dfs(i + 1, currentSum + i, count + 1, [...tmp, i])
        }

    }

    dfs(1, 0, 0, [])
    return res
};


console.log(combinationSum3(4, 17))
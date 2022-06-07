/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


var combinationSum = function (candidates, target) {
    let res = []

    function dfs(i, cur =[], total) {
        if (total === target) {
            res.push(cur.slice())
            return;
        }
        if (i > candidates.length || total > target) return;

        dfs(i, cur.push(candidates[i]), total + candidates[i])

        dfs(i + 1, cur.pop(), total)
         
    }

    dfs(0, [], 0)
    return res
}


console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([6, 3, 6, 2], 8))

// console.log(combinationSum([5, 3, 4, 7], 7))
// console.log(combinationSum([2, 4], 7))
// console.log(combinationSum([2, 3, 5], 8))
// console.log(combinationSum([2, 3], 7))
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



/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {
   
    let ans1 = 0;
    
    while (costs.length > 0) {
        costs.sort((a, b) => a[0]-b[0])
        ans1 += costs.shift()[0]
        console.log(costs)
        
        
        costs.sort((a, b)=> a[1]-b[1])
        ans1 += costs.shift()[1]
        console.log(costs)
        
        
    }
    
    return ans1
    
};


let costs = [[70,311],[74,927],[732,711],[126,583],[857,118],[97,928],[975,843],[175,221],[284,929],[816,602],[689,863],[721,888]]

console.log(twoCitySchedCost(costs))


[
    11, 12, 14, 13, 15,
    16, 17, 14, 16, 17,
    18, 19
  ]
  
// Dò mìn
// tạo 1 ma trận mới n x n
let matrix = [[0, 0, 0, 0],

        [1, 0, 1, 1],

        [1, 1, 1, 0],

        [0, 1, 0, 1]]

const n = matrix.length
const ans = Array(n).fill(0).map(() => Array(n).fill(0))


// Loop qua ma trận n x n
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let sum = 0
        // Tại mỗi ô matrix[i][j] tạo thêm 2 con trỏ phụ k tương ứng với i (k=-1, 0, 1)
        // l tương ứng với j (l=-1, 0, 1) để di chuyển xung quanh matrix[i][j] và đếm
        for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
                if (i + k >= 0 && i + k < n && j + l >= 0 && j + l < n) {
                    if (matrix[i + k][j + l] == 1) sum += 1
                }
            }
        }

        ans[i][j] = sum
    }
}

console.log(ans)
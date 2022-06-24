// Pending

let promise = new Promise((resolve, reject) => {

})

console.log(promise)

// Thanh cong
// Loi hua: neu co tien thi di choi
let hasMoney = true
let promiseSuccess = new Promise((resolve, reject) => {
    if (hasMoney) {
        resolve("Cuối tuần đi chơi")
    }
})

console.log(promiseSuccess)

// That bai
// Loi hua: Nếu cuối tháng có tiền thì trả nợ
hasMoney = false
// let promiseFailure = new Promise((resolve, reject) => {
//     if (!hasMoney) {
//         reject("Không có tiền trả nợ")
//     }
// })

// console.log(promiseFailure)


// Vidu2
// P1: cuối năm nếu có trên 30 triệu thì mua iPhone 13 Promax
// P2: Sau khi mua iPhone xong, nếu còn đủ 5 triệu thì mua AirPod 
let money = 50
const buyIphone = () => {
    return new Promise((resolve, reject) => {
        if (money >= 30) {
            resolve("Đủ tiền mua iPhone")
        } else {
            reject("Không đủ tiền mua iPhone")
        }
    })
}

const buyAirPod = () => {
    return new Promise((resolve, reject) => {
        if (money - 30 >= 5) {
            resolve("Mua thêm AirPod")
        } else {
            reject("Không đủ tiền mua AirPod")
        }
    })
}

// console.log(buyIphone())
buyIphone()
    .then(res => {
        console.log(res)
        return buyAirPod()
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
    .finally(() => console.log("Về nhà"))


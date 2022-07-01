let money = 16
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
// async function buy () 
const buy = async () => {
    try {
        let res = await buyIphone();
        console.log(res)

        let res1 = await buyAirPod();
        console.log(res1)
    } catch(error) {
        console.log(error)
    }

    return "Về nhà đi con"
}

let data = buy()
console.log(data)

data.then(res => console.log(res))


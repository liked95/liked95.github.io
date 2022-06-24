// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

const doTask1 = (taskName, callback) => {
    console.log("Bat dau cong viec")
    console.log(`Thuc hien cong viec: ${taskName}`)

    setTimeout(() => {
        callback()
    }, 3000)
}

const doTask2 = (taskName, callback) => {
    console.log(`Thuc hien cong viec: ${taskName}`)

    setTimeout(() => {
        callback()
    }, 4000)
}

const doTask3 = (taskName, callback) => {
    console.log(`Thuc hien cong viec: ${taskName}`)

    setTimeout(() => {
        callback()
    }, 5000)
}


const finish = () => {
    console.log(`Thuc hien cong viec xong!`)
}

// Thuc Hien tuan tu
// doTask1("Nhat rau", () => {
//     doTask2("Rua rau", () => {
//         doTask3("Luoc rau", finish)
//     })
// })

// paralell programming

doTask1("Lam bai tap", () => {
    console.log("lam bai tap xong")
})
doTask2("Da bong", () => {
    console.log("da bong xong")
})
doTask3("Nau com", () => {
    console.log("nau com xong")
})
if (typeof (Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}


localStorage.setItem("name", "VHS")
localStorage.setItem("dob", 1995)

let numbers = [1, 2, 3, 4, 5, 6]
let todos = [
    {
        id: 1,
        title: "Làm bài tập",
        status: true
    },
    {
        id: 1,
        title: "Chơi với bạn bè",
        status: false
    },
    {
        id: 1,
        title: "Sang nhà chị thăm người ốm",
        status: true
    },
    {
        id: 1,
        title: "Sửa ống nước hộ chị hàng xóm",
        status: true
    },
];

localStorage.setItem("numbers", JSON.stringify(numbers))
localStorage.setItem("todos", JSON.stringify(todos))

console.log(numbers)
console.log(todos)
console.log(JSON.parse(localStorage.getItem("numbers")))
console.log(JSON.parse(localStorage.getItem("todos")))

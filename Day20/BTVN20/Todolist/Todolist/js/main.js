function createId() {
    return Math.floor(Math.random() * 10000)
}


let todos = [
    {
        id: createId(),
        title: "Làm bài tập",
        status: true
    },
    {
        id: createId(),
        title: "Chơi với bạn bè",
        status: false
    },
    {
        id: createId(),
        title: "Sang nhà chị thăm người ốm",
        status: true
    },
];


const todoLists = document.querySelector(".todo-list")
const addBtn = document.getElementById("btn-add");
const updateBtn = document.getElementById("btn-update");
const cancelBtn = document.getElementById("btn-cancel");
const input = document.getElementById("todo-input")

function renderUI(arr) {
    todoLists.innerHTML = ""
    if (!arr.length) {
        todoLists.innerHTML = `<p class="todos-empty"> Hiện tại chưa có công việc nào</p>`
        return;
    }

    for (let todo of arr) {
        const newList = document.createElement("div")
        newList.innerHTML = `
        <div class="todo-item active-todo">
            <div class="todo-item-title ${todo.status ? "active-todo" : ""} " >
                <input type="checkbox" ${todo.status ? "checked" : ""} onclick = toggleStatus(${todo.id})>
                <p>${todo.title}</p>
            </div>

            <div class="option">
                <button class="btn btn-update" onclick = updateTodo(${todo.id})>
                    <img src="./img/pencil.svg" alt="icon" />
                </button>
                <button class="btn btn-delete" onclick = deleteTodo(${todo.id})>
                    <img src="./img/remove.svg" alt="icon" />
                </button>
            </div>
        </div>`

        todoLists.append(newList)
    }
}

renderUI(todos)


function addNewTodo() {
    if (!input.value) {
        alert("Nội dung ko được để trống")
        return;
    }

    if (isUpdate) {
        for (let todo of todos) {
            if (todo.id == idUpdate) {
                todo.title = input.value
            }
        }
        addBtn.textContent = "THÊM"
        isUpdate = false;
        idUpdate = null;
    } else {
        let newTodo = {
            id: createId(),
            title: input.value,
            status: false,
        }
        todos.push(newTodo)
    }


    input.value = ""
    renderUI(todos)
}


addBtn.addEventListener("click", () => {
    addNewTodo()
})

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        addNewTodo()
    }
})


const toggleStatus = (id) => {

    todos.forEach(todo => {
        if (todo.id === id) {
            todo.status = !todo.status
        }
    })

    renderUI(todos)
}

const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id)
    renderUI(todos)
}


const toDoOptionEls = document.querySelectorAll(".todo-option-item > input")
toDoOptionEls.forEach(option => {
    option.addEventListener("change", () => {
        let filters = []
        switch (option.value) {
            case "all":
                filters = todos.slice();
                break;
            case "unactive":
                filters = todos.filter(todo => todo.status == false)
                break;
            case "active":
                filters = todos.filter(todo => todo.status == true)
        }

        renderUI(filters)
    })
})


// update todo

let isUpdate = false
let idUpdate = null;

function updateTodo(id) {
    let title;
    for (let todo of todos) {
        if (todo.id == id) {
            title = todo.title
        }
    }

    addBtn.innerText = "Cập nhật"
    input.value = title;
    input.focus()
    idUpdate = id;
    isUpdate = true;
}
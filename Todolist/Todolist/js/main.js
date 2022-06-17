// 1. Mockup dữ liệu và render

function createId() {
    return Math.floor(Math.random() * 10000)
}
const todoLists = document.querySelector(".todo-list")
const toDoOptionEls = document.querySelectorAll(".todo-option-item input")
const input = document.getElementById("todo-input")
const addBtn = document.getElementById("btn-add");



let todos;
// let todos = [
//     {
//         id: createId(),
//         title: "Làm bài tập",
//         status: true
//     },
//     {
//         id: createId(),
//         title: "Chơi với bạn bè",
//         status: false
//     },
//     {
//         id: createId(),
//         title: "Sang nhà chị thăm người ốm",
//         status: true
//     },
//     {
//         id: createId(),
//         title: "Sửa ống nước hộ chị hàng xóm",
//         status: true
//     },
    
    
// ];

// get from LS
function getDataFromLocalStorage() {
    let data = localStorage.getItem("todos")
    if (data) {
        todos = JSON.parse(data)
        console.log(todos)
    } else {
        todos = []
    }

    renderUI(todos)
}


function setDataToLocalStorage(arr) {
    localStorage.setItem("todos", JSON.stringify(arr))
    renderUI(arr)
}






getDataFromLocalStorage()



// save into Local Storage


function renderUI(arr) {
    todoLists.innerHTML = ""
    if (!arr.length) {
        todoLists.innerHTML = `<p class="todos-empty">Không có công việc trong danh sách</p>`
        return;
    }
    for (let t of arr) {
        todoLists.innerHTML += `
            <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status ? "checked" : ""} onClick = toggleStatus(${t.id})>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onClick = updateTodo(${t.id})>
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick = deleteTodo(${t.id})>
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    }
}








// 2. Add todo


addBtn.addEventListener("click", () => {
    
    if (!input.value) {
        alert("Nội dung không được để trống");
        return;
    }

    let newTodo = {
        id: createId(),
        title: input.value,
        status: false,
    }

    todos.push(newTodo)
    
    setDataToLocalStorage(todos)
    input.value = ""
})

// 3. Delete/Toggle Status

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    setDataToLocalStorage(todos)
}

function toggleStatus(id) {
    console.log(id)
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.status = !todo.status
        }
    })
    
    setDataToLocalStorage(todos)
}

// 4. Filter

Array.from(toDoOptionEls).forEach(input => {
    input.addEventListener("change", () => {
        let option = input.value

        let todosFilter = []
        switch(option) {
            case "all": {
                todosFilter = [...todos]
                break
            }

            case "active": {
                todosFilter = todos.filter(todo => todo.status == true)
                break
            }

            case "unactive": {
                todosFilter = todos.filter(todo => todo.status == false)
                break
            }
        }

        setDataToLocalStorage(todos)
        
    })  
})

// 5.Update

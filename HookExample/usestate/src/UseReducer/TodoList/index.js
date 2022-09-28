import React, { useReducer, useState, useRef } from 'react'


/*
Hiển thị ds todo ban đầu
Thêm todo
Xóa todo
Sửa todo
*/

// 1 Initial state
const initialState = [
    { id: 1, title: "Đi chơi", status: false },
    { id: 2, title: "Đi học", status: true },
    { id: 3, title: "Đi ngủ", status: false },
    { id: 4, title: "Đi đụ", status: true },
    { id: 5, title: "Đi tắm", status: true },
]


// 2 action type
const ADD_TOTO = "ADD_TOTO"
const DELETE_TOTO = "DELETE_TOTO"
const EDIT_TOTO = "EDIT_TOTO"

// 3 reducer
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TOTO: {
            return [...state, action.payload]
        }

        case DELETE_TOTO: {
            return state.filter(todo => todo.id != action.payload.id)
        }

        case EDIT_TOTO: {
            return state
        }

        default: {
            return state
        }


    }
}



function TodoList() {
    const [todos, dispatch] = useReducer(reducer, initialState)
    const [value, setValue] = useState("")

    const inputRef = useRef()

    function addTodo() {
        if (value == "") {
            alert("Title ko duoc de trong")
            return;
        }

        dispatch({
            type: ADD_TOTO,
            payload: {
                id: todos.length + 1,
                title: value,
                staus: false,
            }
        })

        setValue("")
        inputRef.current.focus()
    }

    function deleteTodo(id) {
        dispatch({
            type: DELETE_TOTO,
            payload: {
                id: id,
            }
        })
    }

    function editTodo(id) {
        inputRef.current.focus()
        setValue("")

        dispatch({
            type: EDIT_TOTO,
            payload: {
                id: id,
            }
        })
    }



    return (
        <>
            <div>TodoList</div>

            <input placeholder='Enter todo'
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)} />

            <button onClick={addTodo}>Add todo</button>
            <ul>
                {todos.length > 0 && todos.map((todo, index) => (
                    <li key={index}>
                        <span style={{ color: todo.status ? "red" : "black" }}>{todo.title}</span>
                        <button onClick={() => editTodo(todo.id)}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}

                {todos.length == 0 && <p>Không có công việc nào trong danh sách</p>}
            </ul>
        </>
    )
}

export default TodoList
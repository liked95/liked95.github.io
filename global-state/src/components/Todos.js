
import React, { useReducer, useState, useRef, useContext } from "react"
import Context from "../context"
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../store/constants"
import { addTodo, deleteTodo, editTodo } from "../store/actions"


function TodoList() {
    const { todos, dispatch } = useContext(Context)
    const [value, setValue] = useState("")

    const inputRef = useRef()

    function handleAddTodo() {
        if (value == "") {
            alert("Title ko duoc de trong")
            return;
        }

        dispatch({
            type: ADD_TODO,
            payload: {
                id: todos.length + 1,
                title: value,
                status: false,
            }
        })

        setValue("")
        inputRef.current.focus()
    }

    function handlDeleteTodo(id) {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id: id,
            }
        })
    }

    function handlEditTodo(id) {
        let editedTodo = todos.find(todo => todo.id == id)

        let title = window.prompt("Tiêu đề bạn muốn thay đổi", editedTodo.title)
        if (title == null) {
            return;
        }
        if (!title) {
            alert("K dc de trong")
            return;
        }

        let payload = {id, title}
        dispatch(editTodo(payload))
    }



    return (
        <>
            <div>TodoList</div>

            <input placeholder='Enter todo'
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)} />

            <button onClick={handleAddTodo}>Add todo</button>
            <ul>
                {todos.length > 0 && todos.map((todo, index) => (
                    <li key={index}>
                        <span style={{ color: todo.status ? "red" : "black" }}>{todo.title}</span>
                        <button onClick={() => handlEditTodo(todo.id)}>Edit</button>
                        <button onClick={() => handlDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}

                {todos.length == 0 && <p>Không có công việc nào trong danh sách</p>}
            </ul>
        </>
    )
}

export default TodoList
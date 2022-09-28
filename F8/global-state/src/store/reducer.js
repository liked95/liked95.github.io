import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants"

export const initState = {
    todos: [],
    todoInput: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            console.log(state, action)
            return {
                ...state,
                todoInput: action.payload
            }


        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }


        case DELETE_TODO:
            let newTodos = state.todos.slice()
            newTodos.splice(action.payload, 1)
            return {
                ...state, todos: newTodos
            }


        default:
            throw new Error("Invalid action")
    }
}


export default reducer
import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        { id: 1, title: "Di lm", status: true },
        { id: 2, title: "Di an", status: false },
        { id: 3, title: "Di choi game", status: true },
        { id: 4, title: "Di hoc", status: false },
    ]
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                console.log(action);
                state.todos.push(action.payload)
            },
            prepare: (newTodo) => {
                return {
                    payload: newTodo
                }
            }
        }
    },
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer
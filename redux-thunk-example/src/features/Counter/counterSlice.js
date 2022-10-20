import { createSelector, createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  todos: [
    {id: 1, title:"DI lm", status: true},
    {id: 2, title:"Di an", status: false},
    {id: 3, title:"Di choi game", status: true},
    {id: 4, title:"Di hoc", status: false},
  ]
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    addTwo: {
      reducer: (state, action) => {
        console.log('action', action)
        state.value += action.payload
      },
      prepare: (number) => {
        console.log('number', number);
        return {
          payload: number * 2
        }
      },
    },
  },
})

// name + increment => action.type
// increment => 'counter/increment': action creator
// const increment =() => {
//     return {
//         type: 'counter/increment'
//     }

// su dung immerJS

export const getCounter = store => store.counter.value
export const getTodos = store => store.counter.todos

export const getTodosActive = createSelector(
  getTodos, 
  (todos) => todos.filter(todo=>todo.status),
  
)

export const { increment, decrement, addTwo } = counterSlice.actions
export default counterSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import todosReducer from "../features/TodoList/todoSlice";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        todos: todosReducer,
    }
})

export default store
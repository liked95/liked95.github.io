import counterReducer from "./counterReducer.js"
import { combineReducers } from "redux"
import todoReducer from "./todoReducer.js"


const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
    
})



export default rootReducer
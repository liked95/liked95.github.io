import React, { useReducer, useState, useRef } from 'react'
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants'


/*
Hiển thị ds todo ban đầu
Thêm todo
Xóa todo
Sửa todo
*/

// 1 Initial state
export const initialState = [
    { id: 1, title: "Đi chơi", status: false },
    { id: 2, title: "Đi học", status: true },
    { id: 3, title: "Đi ngủ", status: false },
    { id: 4, title: "Đi đụ", status: true },
    { id: 5, title: "Đi tắm", status: true },
]


// 2 action type

// 3 reducer
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload]
        }

        case DELETE_TODO: {
            return state.filter(todo => todo.id != action.payload.id)
        }

        case EDIT_TODO: {
            console.log(state, action)
            return state.map(todo => {
                if (todo.id == action.payload.id) {
                    return { ...todo, title: action.payload.title }
                }

                return todo
            })
        }

        default: {
            return state
        }


    }
}



export default reducer
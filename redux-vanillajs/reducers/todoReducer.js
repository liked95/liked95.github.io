const initTodos = [
    {id: 1, title: 'Làm việc'},
    {id: 2, title: 'Đi chơi'},
    {id: 3, title: 'Shopeee cho tốn tiền'},
]

const todoReducer = (state = initTodos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        
        default:
            return [...state]
    }
}

export default todoReducer
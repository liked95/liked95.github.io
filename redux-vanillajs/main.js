import { addCount, subtractCount } from './actions/counter.js';
import { addTodo } from './actions/todo.js';
import store from './store.js'
// console.log(store.getState());

// store.dispatch(addCount())

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })

const counterEl = document.getElementById('counter')
const btnAdd = document.getElementById('btn-add')
const btnSubtract = document.getElementById('btn-subtract')

btnAdd.addEventListener('click', () => {
    store.dispatch(addCount())
})

btnSubtract.addEventListener('click', () => {
    store.dispatch(subtractCount())
})

store.subscribe(() => {
    console.log('subscribed');
    const { counter } = store.getState()
    counterEl.innerText = counter
})




const todoInputEl = document.getElementById('todo-input')
const todoListEl = document.getElementById('todo-list')

todoInputEl.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        let title = e.target.value;
        const newTodo = {
            id: store.getState().todos.length + 1,
            title,
        }
        store.dispatch(addTodo(newTodo))
        todoInputEl.value=''
    }
})

const renderTodos = arr => {
    todoListEl.innerHTML = ''

    let html = ''
    arr.forEach(e => {
        html += `<li>${e.title}</li>`
    })

    todoListEl.innerHTML = html

}

renderTodos(store.getState().todos)

store.subscribe(() => {
    console.log('subscribed');
    const { counter, todos } = store.getState()
    counterEl.innerText = counter
    renderTodos(todos)
})
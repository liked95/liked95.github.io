const box = document.querySelector('.box')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    box.classList.toggle('active')
})


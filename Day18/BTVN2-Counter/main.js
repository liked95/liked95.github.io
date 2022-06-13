let count = 0;
const counter = document.getElementById('counter')  
const prev = document.querySelector('.prevBtn')
const next = document.querySelector('.nextBtn')

function colorChange() {
    if (count === 0) {
        counter.style.color = '#333333'
    } else if (count > 0) {
        counter.style.color = 'green'
    } else {
        counter.style.color = 'red'
    }
}

prev.addEventListener('click', () => {
    count--;
    counter.innerHTML = `${count}`;
    colorChange();
    
})
next.addEventListener('click', () => {
    count++;
    counter.innerHTML = `${count}`;
    colorChange();
})
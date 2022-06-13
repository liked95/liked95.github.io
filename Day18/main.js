const text = document.getElementById('text');
const textArr = ['Toi bi ngu si', 'Toi ko phai la bo do', 'Ngao nghe qua VN oi', 'Toi bi ngu don phai ko?'];

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')

function changeContent() {
    let randomIdx = Math.floor(Math.random() * textArr.length)
    text.textContent = textArr[randomIdx]
}


function randomHex() {
    let charArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += charArr[Math.floor(Math.random() * charArr.length)]
    }
    return hexColor
}

function randomRGB() {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}

btn2.onclick = () => {
    text.style.color = randomHex()
}

btn3.addEventListener('click', () => {
    text.style.backgroundColor = randomRGB()
})
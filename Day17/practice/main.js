const heading = document.getElementById('heading')
heading.style.color = 'red'
heading.style.textTransform = 'uppercase'



// cau 2
const paras = document.querySelectorAll('.para')
console.log(paras)
Array.from(paras).forEach(para => {
    para.style.color = 'blue';
    para.style.fontSize = '20px'
})

// 3 Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const para3 = document.querySelector('.para-3')
para3.insertAdjacentHTML('afterend', `<a href = "https://www.facebook.com/">Trang Facebook</a>`)



// 4 Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector('#title');
title.textContent = "Day la the tieu de"

// 5 Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector('.description')
description.classList.add('text-bold')
// 6 Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement('button')
button.textContent = 'Click me'
console.log(button)
para3.parentElement.replaceChild(button, para3)
// 7 Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector('.para-2')
const para2Copy = para2.cloneNode(true)
para2Copy.textContent = "Copeeeee"
para2.parentNode.replaceChild(para2Copy, para2)
// 8 Xóa thẻ có class=“para-1”
const para1 = document.querySelector('.para-1')
para1.parentNode.removeChild(para1)

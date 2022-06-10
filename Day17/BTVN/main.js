// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const para = document.createElement('p')
document.body.insertAdjacentElement('afterbegin', para)
para.id = 'text'
para.textContent = 'I love you so much'
para.fontSize = '2rem'
para.innerHTML = `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.`

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

const lists = document.querySelectorAll('ul:first-of-type > li')
for (let list of lists) {
    list.style.color = 'blue'
}
console.log(lists)


// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>

// Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

// Remove thẻ <li> 4

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

const secondList = document.getElementById('list')

for (let i = 8; i<11;i++) {
    secondList.insertAdjacentHTML('beforeend', `<li>Item ${i}</li>`)
}

document.querySelector('#list li:nth-of-type(1)').style.color = 'red'
document.querySelector('#list li:nth-of-type(3)').style.backgroundColor = 'blue'

const list4 = document.querySelector('#list li:nth-of-type(4)');
list4.parentNode.removeChild(list4)

const list5 = document.querySelector('#list li:nth-of-type(4)');
const newList = document.createElement('li')
secondList.insertBefore(newList, list5)
newList.textContent = 'Hello World'



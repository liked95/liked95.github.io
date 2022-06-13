

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

for (let i = 8; i < 11; i++) {
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


// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

// Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide


const addBtn = document.createElement('button')
addBtn.classList.add('add-btn')
addBtn.textContent = "Add item"
document.body.appendChild(addBtn)

const input = document.createElement('input')
input.classList.add('input')
input.type = "text"
input.style.marginLeft = '10px'
input.textContent = "Add item"
document.body.appendChild(input)

const removeBtn = document.createElement('button')
removeBtn.classList.add('remove-btn')
removeBtn.style.display = 'block'
removeBtn.style.marginTop = '20px'
removeBtn.textContent = "Remove item"
document.body.appendChild(removeBtn)

addBtn.addEventListener('click', () => {
    let content = document.querySelector('input');
    if (content.value) {
        const newItem = document.createElement('li')
        newItem.textContent = content.value;
        secondList.appendChild(newItem)
    } else {
        alert('Nội dung không được để trống!')
    }
    content.value = ''
})


removeBtn.addEventListener('click', () => {
    document.querySelector("#list li:last-child").remove()
})


const hideBtn = document.createElement('button')
hideBtn.classList.add('hide-btn')
hideBtn.style.display = 'block'
hideBtn.style.marginBottom = '20px'
hideBtn.textContent = "Hide"
document.body.prepend(hideBtn)

hideBtn.addEventListener('click', () => {
    if (hideBtn.classList.contains('hide-btn')) {
        secondList.style.display = 'none'
        hideBtn.textContent = 'Show'
        hideBtn.classList.toggle('hide-btn')
    } else {
        secondList.style.display = 'block'
        hideBtn.textContent = 'Hide'
        hideBtn.classList.toggle('hide-btn')
    }
})
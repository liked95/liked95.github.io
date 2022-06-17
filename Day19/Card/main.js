// Sử dụng Javascript để thực hiện các công việc sau

// Một tính năng mới vào gói Pro: ‘24/7 Phone support’

const proLists = document.querySelector("#pro-plan .list-unstyled") 
const newFeature = document.createElement('li')
newFeature.textContent = "Pro: '24/7 Phone support'"
proLists.append(newFeature)

// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

const pro = document.getElementById("pro-plan")
const basic = document.getElementById("basic-plan")

const container = document.querySelector(".row")
container.insertBefore(basic.parentElement, pro.parentElement)
// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’

const proBtn = document.querySelector("#pro-plan button")
proBtn.style.color = "#fff"
proBtn.style.backgroundColor = "#0984e3"
proBtn.textContent = "Buy Now"
// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

const proStorage = document.querySelector("#pro-plan .storage-amount")
proStorage.textContent = Number(proStorage.textContent) * 1.25
const basicStorage = document.querySelector("#basic-plan .storage-amount")
basicStorage.textContent = Number(basicStorage.textContent) * 1.50
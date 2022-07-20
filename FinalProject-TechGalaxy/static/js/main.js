function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}

function saveToLocalStorage(key, arr) {
    localStorage.setItem(key, JSON.stringify(arr))
}

function getFromLocalStorage(key) {
    let value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    } else {
        return []
    }
}


saveToLocalStorage("productList", products)

const headerLoginBtn = document.querySelector(".login-btn")
const headerRegisterBtn = document.querySelector(".register-btn")

console.log(localStorage.getItem("userID"))
let userID = JSON.parse(localStorage.getItem("userID"))
if (userID) {
    // Thay đăng nhập bằng tên username
    console.log("sdfdsafd")
    headerLoginBtn.innerHTML = `${userID.username}`
    headerLoginBtn.href = "#"

    // THay đăng kí bằng đăng xuất
    const logoutBtn = document.createElement(`i`)
    logoutBtn.classList.add("fa-solid", "fa-power-off")
    logoutBtn.id = "logout-btn"
    headerRegisterBtn.parentNode.replaceChild(logoutBtn, headerRegisterBtn)
}

let logoutBtn = document.getElementById("logout-btn")
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        saveToLocalStorage("userID", null)
        window.location.reload()
    })
}






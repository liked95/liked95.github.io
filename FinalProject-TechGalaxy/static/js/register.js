// Add user into the users array after click create new account
function createID() {
    return Math.floor(Math.random() * 100000)
}



const createAccountBtn = document.getElementById("create-account")

const phoneNumber = document.getElementById("phone-number")
const phoneNumberNoti = document.querySelector(".phonenumber-noti")

const userName = document.getElementById("username")
const usernameNoti = document.querySelector(".username-noti")

const password = document.getElementById("password")
const passwordNoti = document.querySelector(".password-noti")


createAccountBtn.addEventListener("click", (e) => {
    // validate input
    if (phoneNumber.value == "") {
        e.preventDefault()
        phoneNumberNoti.innerText = "Số điện thoại không được để trống"
    }

    if (userName.value == "") {
        e.preventDefault()
        usernameNoti.innerText = "Tên đăng nhập không được để trống"
    }

    if (password.value == "") {
        e.preventDefault()
        passwordNoti.innerText = "Mật khẩu không được để trống"
    }

    if (userName.value && password.value && phoneNumber.value) {
        let userArr = getFromLocalStorage("users")
        let isFound = false
        for (let user of userArr) {
            if (user.username == userName.value) {
                e.preventDefault()
                usernameNoti.innerText = "Tên đăng nhập đã được sử dụng!"
                isFound = true
                break
            }
        }
        
        if (!isFound) {
            userArr.push(
                {
                    id: createID(),
                    username: userName.value,
                    password: password.value,
                    phoneNumber: phoneNumber.value
                })
    
            saveToLocalStorage("users", userArr)
            alert("Tạo tài khoản thành công")
            window.location.href = "index.html"
        }
    }
})
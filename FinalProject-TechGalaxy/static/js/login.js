const userName = document.getElementById("username")
const usernameNoti = document.querySelector(".username-noti")

const password = document.getElementById("password")
const passwordNoti = document.querySelector(".password-noti")

const loginBtn = document.getElementById("start-login-btn")

loginBtn.addEventListener("click", (e) => {
    if (userName.value == "") {
        e.preventDefault()
        usernameNoti.innerText = "Tên đăng nhập không được để trống"
    }

    if (password.value == "") {
        e.preventDefault()
        passwordNoti.innerText = "Mật khẩu không được để trống"
    }

    if (userName.value && password.value) {
        e.preventDefault()
        let userArr = getFromLocalStorage("users")

        let filterUser = userArr.filter(user => user.username == userName.value)
        if (filterUser.length == 0) {
            e.preventDefault()
            usernameNoti.innerText = "Tên đăng nhập / mật khẩu không đúng"
            passwordNoti.innerText = "Tên đăng nhập / mật khẩu không đúng"
        } else {
            console.log(filterUser[0])
            if (filterUser[0].password !== password.value) {
                e.preventDefault()
                usernameNoti.innerText = "Tên đăng nhập / mật khẩu không đúng"
                passwordNoti.innerText = "Tên đăng nhập / mật khẩu không đúng"
            } else {
                alert("Đăng nhập thành công")
                // save user id into local storage
                saveToLocalStorage("userID", {id: filterUser[0].id, username: filterUser[0].username})
                window.location.href = "index.html"
            }
        }

    }
})
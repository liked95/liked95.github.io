const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    },
]


const username = document.getElementById('username')
const password = document.getElementById('password')
const btn = document.getElementById('btn-login')


btn.addEventListener('click', () => {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    if (!username.value || !password.value) alert('ID và Mật khẩu không được trống')

    let isVerified = false;
    for (let user of users) {
        if (user.username === username.value && user.password === password.value) {
            alert("Đăng nhập thành công")
            isVerified = true;
            break;
        }
    }

    if (!isVerified) alert('Tài khoản hoặc mật khẩu không chính xác')
})


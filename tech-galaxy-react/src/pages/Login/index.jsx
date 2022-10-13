import Context from 'context/index'
import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN } from 'store/constants'
import { login } from '../../store/actions'

function Login() {
    const navigate = useNavigate
    const { users, dispatchAuth } = useContext(Context)
    const [userName, setUserName] = useState('')
    const [userNameAlert, setUserNameAlert] = useState('')

    const [password, setPassword] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')

    const handleLoginSubmit = (e) => {
        e.preventDefault()

        !userName.trim() ? setUserNameAlert("Tên đăng nhập không được để trống") : setUserNameAlert('')
        !password.trim() ? setPasswordAlert("Mật khẩu không được để trống") : setPasswordAlert('')
        if (!userName.trim() || !password.trim()) return

        let user

        if (users.length == 0) {
            setUserNameAlert('Tên đăng nhập / mật khẩu không đúng')
            setPasswordAlert('Tên đăng nhập / mật khẩu không đúng')
            return;
        }

        if (users.length > 0 && userName && password) {
            user = users.find(u => u.name == userName && u.password == password)
        }

        if (!user) {
            setUserNameAlert('Tên đăng nhập / mật khẩu không đúng')
            setPasswordAlert('Tên đăng nhập / mật khẩu không đúng')
        } else {
            dispatchAuth(login(
                { username: user.name, id: user.id }
            ))
            alert('Đăng nhập thành công')
        }
    }

    useEffect(() => {
        setUserNameAlert('')
    }, [userName]);

    useEffect(() => {
        setPasswordAlert('')
    }, [password]);

    return (
        <div className="login">
            <div className="container">
                <h4>Đăng nhập</h4>
                <div className="login-container">
                    <form action="">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" value={userName} onChange={e => setUserName(e.target.value)} />
                        <p className="username-noti">{userNameAlert}</p>
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <p className="password-noti">{passwordAlert}</p>
                        <button id="start-login-btn" onClick={handleLoginSubmit}>Đăng nhập</button>
                        <p className="register-prompt">
                            Chưa có tài khoản?
                            <Link to="/register">Đăng kí</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
import Context from 'context/index'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../../store/actions'

function Register() {
    const { dispatchUsers, users } = useContext(Context)
    const [phone, setPhone] = useState('')
    const [phoneAlert, setPhoneAlert] = useState('')

    const [userName, setUserName] = useState('')
    const [userNameAlert, setUserNameAlert] = useState('')

    const [password, setPassword] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')

    const handleSubmitRegister = (e) => {
        e.preventDefault()

        let isExist = false
        !phone.trim() ? setPhoneAlert('Số điện thoại không được để trống') : setPhoneAlert('')
        !userName.trim() ? setUserNameAlert("Tên đăng nhập không được để trống") : setUserNameAlert('')
        !password.trim() ? setPasswordAlert("Mật khẩu không được để trống") : setPasswordAlert('')

        if (users.length > 0) {
            for (let user of users) {
                if (user.name == userName) {
                    isExist = true;
                    alert("Tên đăng nhập đã được sử dụng!")
                    break;
                }
            }
        }


        if (phone.trim() && userName.trim() && password.trim() && !isExist) {
            setPhoneAlert('')
            setPhone('')
            setUserNameAlert('')
            setUserName('')
            setPasswordAlert('')
            setPassword('')
            
            dispatchUsers(createUser({
                id: users.length + 1,
                name: userName,
                phone,
                password,
            }))
        }
    }


    return (
        <div className="register">
            <div className="container">
                <h4>Đăng kí</h4>
                <div className="login-container">
                    <form action="">
                        <label htmlFor="phone-number">Số điện thoại</label>
                        <input type="text" id="phone-number" value={phone} onChange={e => setPhone(e.target.value)} />
                        <p className="phonenumber-noti">{phoneAlert}</p>

                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" value={userName} onChange={e => setUserName(e.target.value)} />
                        <p className="username-noti">{userNameAlert}</p>

                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <p className="password-noti">{passwordAlert}</p>

                        <button
                            id="create-account"
                            type="submit"
                            onClick={e => handleSubmitRegister(e)}
                        >Tạo tài khoản</button>
                        <p className="register-prompt">
                            Đã có tài khoản?
                            <Link to="/login">Đăng nhập</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
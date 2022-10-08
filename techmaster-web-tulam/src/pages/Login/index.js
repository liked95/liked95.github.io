import React, { useState, useContext} from "react";
import Context from "context/Context";
import { login } from "store/actions";
import {useNavigate} from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const {users, dispatchAuth} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        const user = users.find(user => user.email == email && user.password == password)
        if (!user) {
            alert("Sai email or password")
            return
        }

        // Luu thong tin user da dang nhap vao local Storage
        dispatchAuth(login(user))
        navigate("/")
    }


    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-center fs-4 mb-5">Login</h1>
                <div className="modal-body">
                    <div className="mb-3">
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            className="form-control"
                            id="user-email"
                            placeholder="Nhập Email ..."
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="user-password"
                            placeholder="Nhập Password ..."
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                        onClick={handleLogin}
                            type="button"
                            className="btn btn-primary"
                            id="btn-login"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;

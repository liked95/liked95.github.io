import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/actions/userActions'
function AddUser() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')

    const handleCreateUser = () => {
        if (!name) {
            alert("Tên không được để trống")
            return
        }

        if (!email) {
            alert("Email không được để trống")
            return
        }

        if (!phone) {
            alert("Sdt không được để trống")
            return
        }

        if (!address) {
            alert("Dia chi không được để trống")
            return
        }

        if (!password) {
            alert("Password không được để trống")
            return
        }

        const obj = { id: users.length + 1, name, email, phone, password, address }
        dispatch(addUser(obj))
        alert("Tao user thanh cong")
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setPassword('')


    }


    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="bg-light p-4">
                        <div className="mb-3">
                            <label className="col-form-label">Name</label>
                            <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input type="text" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Phone</label>
                            <input type="text" id="phone" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Address</label>
                            <input type="text" id="address" className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Password</label>
                            <input type="text" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-secondary btn-back">Quay lại</button>
                        <button className="btn btn-success" id="btn-save" onClick={handleCreateUser}>Tạo User</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
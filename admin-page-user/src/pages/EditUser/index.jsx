import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { editUser } from '../../redux/actions/userActions'

function EditUser() {
    const { userId } = useParams()
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const user = users.find(user => user.id == userId)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [address, setAddress] = useState(user.address)
    const [oldPassword, setOldPassWord] = useState('')
    const [newPassword, setNewPassWord] = useState('')

    const handleUpdateUser = () => {
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
        const obj = {
            id: userId,
            name,
            email,
            phone,
            address,
            password: user.password,
        }
        dispatch(editUser(obj))
        alert("Update user thanh cong")
    }

    const handleUpdatePassword = () => {
        if (!oldPassword || !newPassword) {
            alert('ca hai truong k dc de trong')
            return
        }

        if (oldPassword != user.password) {
            alert('mk cu ko dung')
            return
        }

        const obj = {
            id: userId,
            name,
            email,
            phone,
            address,
            password: newPassword,
        }
        dispatch(editUser(obj))
        alert("Doi mat khau thanh cong")

    }


    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="bg-light p-4">
                        <div className="mb-3">
                            <label className="col-form-label">Name</label>
                            <input type="text" id="name" className="form-control"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Email</label>
                            <input type="text" id="email" className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Phone</label>
                            <input type="text" id="phone" className="form-control"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Address</label>
                            <input type="text" id="address" className="form-control"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="col-form-label">Password</label>
                            <div className="">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modal-change-password">
                                    Đổi mật khẩu
                                </button>
                                <button className="btn btn-warning" id="btn-forgot-password">
                                    Quên mật khẩu
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-secondary btn-back">Quay lại</button>
                        <button className="btn btn-success" id="btn-save" onClick={handleUpdateUser}>Cập nhật</button>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="modal-change-password" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Đổi mật khẩu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="col-form-label">Mật khẩu cũ</label>
                                <input type="text" id="old-password" className="form-control"
                                    value={oldPassword}
                                    onChange={e => setOldPassWord(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Mật khẩu mới</label>
                                <input type="text" id="new-password" className="form-control"
                                    value={newPassword}
                                    onChange={e => setNewPassWord(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary" id="btn-change-password"
                                onClick={handleUpdatePassword}
                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser
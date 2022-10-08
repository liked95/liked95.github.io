import React, { useState, useContext } from "react";
import Context from "context/Context";
import { syncAuth, updateProfile} from "store/actions";

function SecurityAccount() {
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const {auth, dispatchUsers, dispatchAuth} = useContext(Context)

    const handleUpdatePassword = () => {
        if (password != auth.password) {
            alert("Mật khẩu cũ k đúng")
            return;
        }

        if (password == newPassword) {
            alert("Mật khẩu cũ trùng mk mới")
            return;
        }

        if (newPassword != confirmPassword) {
            alert("Mật khẩu mới và xác nhận không trùng nhau!")
            return;
        }

        let userUpdate = {
            id: auth.id, 
            password: newPassword
        }

        dispatchUsers(updateProfile(userUpdate))
        dispatchAuth(syncAuth(userUpdate))
        alert("Cập nhật mk thành công")
        setPassword("")
        setNewPassword("")
        setConfirmPassword("")


    }

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Bảo mật tài khoản</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Mật khẩu cũ
                                </label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Mật khẩu mới
                                </label>
                                <input
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Xác nhận lại mật khẩu mới
                                </label>
                                <input
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-primary" id="btn-save"
                                onClick={handleUpdatePassword}>
                                Cập nhật mật khẩu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecurityAccount;

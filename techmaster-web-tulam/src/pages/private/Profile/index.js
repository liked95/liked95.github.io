import React, { useContext, useState } from "react";
import Context from "context/Context";
import { syncAuth, updateProfile } from "store/actions";


function Profile() {
    const { auth, dispatchUsers, dispatchAuth } = useContext(Context)
    const [name, setName] = useState(auth.name)
    const [phone, setPhone] = useState(auth.phone)

    const handleUpdateProfile = () => {
        const userUpdate = {
            id: auth.id,
            name, 
            phone,
        }

        dispatchUsers(updateProfile(userUpdate))
        dispatchAuth(syncAuth(userUpdate))
        alert("Cập nhật trạng thái thông tin thành công!")
    }


    return (
        <section className="py-5">
            <div className="container">
                <h1 className="fs-4 mb-5">Hồ sơ cá nhân</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light p-4">
                            <div className="mb-3">
                                <label className="form-label">Avatar</label>
                                <div className="avatar-preview mb-3 rounded">
                                    <img
                                        src={auth.avatar}
                                        alt={auth.name}
                                        id="avatar-preview"
                                        className="rounded"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Name</label>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    disabled
                                    defaultValue={auth.email}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Phone</label>
                                <input
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-primary" id="btn-save"
                                onClick={handleUpdateProfile}>
                                Cập nhật thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;

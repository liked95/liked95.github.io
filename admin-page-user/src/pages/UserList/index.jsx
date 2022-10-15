import React from 'react'
import { useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../redux/actions/userActions'

function UserList() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    console.log(users);

    const [search, setSearch] = useState("")
    
    // useEffect(() => {
    //     let updateUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    //     setRenderedUsers(updateUsers)
    // }, [search]);


    const handleDeleteUser = id => {
        
        dispatch(deleteUser(id))
    }

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase">Danh sách user</h2>

            <div className="row justify-content-center">
                <div className="col-md-10">

                    <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                        <Link to="/users/create" className="btn btn-warning">Tạo user</Link>
                        <input type="text" id="search" className="form-control w-50" placeholder="Tìm kiếm user"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="bg-light p-4">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.length > 0 && users.map((user, index) => {
                                    const { address, email, id, name, password, phone } = user
                                    return (
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{phone}</td>
                                            <td>{address}</td>
                                            <td>
                                                <Link to={`/users/${id}`} className="btn btn-success">Xem chi tiết</Link>
                                                <button className="btn btn-danger" onClick={e => handleDeleteUser(id)}>Xóa</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                                {users.length == 0 && <p>Không tìm thấy users</p>}
                            </tbody>
                        </table>

                        <p className="message d-none"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList
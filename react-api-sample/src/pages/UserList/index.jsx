import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import userApi from '../../api/userApi'

function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let res = await userApi.getUsers()
            setUsers(res)
        }

        fetchUsers()
    }, [])

    console.log(users);


    return (
        <div className='container my-5'>
            <h1 className='text-center mb-4'>List Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map(user => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.username}</th>
                            <th>{user.email}</th>
                            <th>{user.phone}</th>
                            <th>
                                <Link to = {`/users/${user.id}/posts`}>List post</Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
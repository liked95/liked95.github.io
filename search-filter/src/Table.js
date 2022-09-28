import React from 'react'

function Table({ data }) {

    


    return (
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
                {data.map((user, index) => {  
                    return (
                        <tr key={index}>
                            <th>{user.first_name}</th>
                            <th>{user.last_name}</th>
                            <th>{user.email}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
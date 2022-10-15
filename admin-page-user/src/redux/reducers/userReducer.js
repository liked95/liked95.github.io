const initUsers = [
    {
        id: 1,
        name: 'Vu Son',
        email: 'a@gmail.com',
        phone: "02321321321",
        address: 'Buon Ma Thuot',
        password: 111,
    },
    {
        id: 2,
        name: 'Truong Thuy',
        email: 'bbb@gmail.com',
        phone: "11112212321",
        address: 'Ho Chi Minh',
        password: 111,
    },
    {
        id: 3,
        name: 'Mell Ngok',
        email: 'cc@gmail.com',
        phone: "24421312",
        address: 'Dak Lak',
        password: 111,
    },
]

const userReducer = (state = initUsers, action) => {
    switch (action.type) {
        case "addUser": {
            return state
        }
        case "updateUser": {
            return state
        }
        case "deleteUser": {
            const id = action.payload
            console.log(id, state)
            return state.filter(user => user.id != id)
        }
        default:
            return state;


    }
}

export default userReducer
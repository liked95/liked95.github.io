const App = () => {
    let data = [
        {
            id: 1,
            name: "Bùi Hiên",
            email: "hien@gmail.com",
            address: "Thái Bình",
        },
        {
            id: 2,
            name: "Thu Hằng",
            email: "hang@gmail.com",
            address: "Hải Dương",
        },
        {
            id: 3,
            name: "Minh Duy",
            email: "duy@gmail.com",
            address: "Hưng Yên",
        },
        {
            id: 4,
            name: "Hoài Sơn",
            email: "son@gmail.com",
            address: "Dak Lak",
        },
        {
            id: 5,
            name: "Minh Thư",
            email: "thu88@gmail.com",
            address: "Trâu Quỳ",
        },
    ];
    
    const [userList, setUserList] = React.useState(data)
    let rdmUser = () => userList[Math.floor(Math.random() * userList.length)]

    const [user, setUser] = React.useState(rdmUser())
    let { id, name, email, address } = user


    function deleteUser() {
        if (userList.length <= 1) {
            alert("Ko xoa dc")
            return;
        }

        let updateUsers = userList.filter(user => user.id != id)
        setUserList(updateUsers)
        setUser(rdmUser())
    }

    return (
        <div>
            <h1 style={{ color: "red" }}>Name: {name}</h1>
            <ul className="user-info">
                <li>Email: {email}</li>
                <li>Address: {address}</li>
            </ul>
            <button onClick={() => setUser(rdmUser())}>Random User</button>
            <button onClick={() => deleteUser(id)}>Delete User</button>
        </div>
    )
}
// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App />)
// component App
const App = () => {
    const hobbyList = [
        { id: 1, name: "Chơi game" },
        { id: 2, name: "Đá bóng" },
        { id: 3, name: "Nghe nhạc" },
    ]

    const showInfo = (name) => {
        alert(name)
    }

    const user = {
        name: "Hoai Son",
        email: "1234@gmail.com",
        age: 27, 
        address: "Hanoi",
        status: true,
    }

    return (
        <React.Fragment>
            <Hobby hobbyList={hobbyList} showInfo={showInfo} />
            <User user={user} />
        </React.Fragment>
    )
}


// Hien thi danh sach so thich
const Hobby = (props) => {
    const { hobbyList, showInfo } = props
    return (
        <ul>
            {hobbyList.length > 0 && hobbyList.map(hobby => <li key={hobby.id} onClick={() => showInfo(hobby.name)}>{hobby.name}</li>)}

            {hobbyList.length == 0 && <li>Ko co so thich</li>}
        </ul>
    )
}

Hobby.displayName = "So thich";

Hobby.propTypes = {
    hobbyList: PropTypes.array.isRequired,
    showInfo: PropTypes.func.isRequired,
}

Hobby.defaultProps = {
    hobbyList: [],
    showInfo: () => {
        alert("click")
    }

}

function User(props) {
    const {name, email} = props.user
    return (
        <div>
            <h2>Name: {name} </h2>
            <p>Email: {email} </p>
        </div>
    )
}


// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)
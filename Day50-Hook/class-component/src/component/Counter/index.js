import React, { Component } from "react"

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            user: {
                name: "Son",
                age: 19,
                city: "Hanoi"
            },

            posts: []
        }
    }

    componentDidMount() {
        console.log("Mounted already")
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data}))
    }

    componentDidUpdate() {
        console.log("updated")
    }

    componentWillUnmount() {
        console.log("unmounted")
    }
    handleAdd = () => {
        // this.setState({ count: this.state.count + 1 })
        this.setState(prevState => ({ count: prevState.count + 1 }))
        this.setState(prevState => ({ count: prevState.count + 1 }))
        this.setState(prevState => ({ count: prevState.count + 1 }))

    }

    changeName = () => {
        this.setState({ user: { name: "Vu Hoai SOng" } })
    }

    render() {
        let { count } = this.state
        const { color, bg } = this.props
        return (
            <>
                <h1 style={{ color: color, backgroundColor: bg }}>Counter: {count} </h1>
                <button onClick={this.handleAdd}>Add</button>
                <h2>{this.state.user.name}</h2>
                <button onClick={this.changeName}>Change name</button>
                <ul>
                    {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
                {console.log("render")}
            </>
        )
    }
}

export default Counter
class User {
    #name = ""
    #email = ""

    constructor(name, email) {
        this.#name = name;
        this.#email = email
    }

    sayHi() {
        console.log(`Xin chao em be ${this.name}`)
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    set name(newName) {
        this.#name = newName
    }

}

export default User


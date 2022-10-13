import { CREATE_USER, LOGIN, LOGOUT } from "./constants"


export const createUser = (payload) => {
    return {
        type: CREATE_USER,
        payload,
    }
}

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}


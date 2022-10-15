// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/users

import axiosClient from "./axiosClient"

const userApi = {
    getUsers() {
        const url = '/users'
        return axiosClient.get(url) 
    },
    getPostsOfUser(userId) {
        const url = `/users/${userId}/posts`
        return axiosClient.get(url) 
    },
}

export default userApi
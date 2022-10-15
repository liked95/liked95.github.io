// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/users

import axiosClient from "./axiosClient"

const postApi = {
    getPosts() {
        const url = '/posts'
        return axiosClient.get(url) 
    },
    getPostById(postId) {
        const url = `/posts/${postId}`
        return axiosClient.get(url) 
    },
}

export default postApi
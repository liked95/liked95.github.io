import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import postApi from '../../api/postApi'

function PostList() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      let res = await postApi.getPosts()
      setPosts(res)
    }

    fetchPosts()
  }, [])

  console.log(posts);


  return (
    <div className='container my-5'>
      <h1 className='text-center mb-4'>List Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 && posts.map(post => (
            <tr key={post.id}>
              <th>{post.id}</th>
              <th>{post.userId}</th>
              <th>{post.title}</th>
              <th>{post.body}</th>
              <th>
                <Link to={`/posts/${post.id}`}>Detail</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostList
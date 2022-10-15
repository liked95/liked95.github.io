import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import userApi from '../../api/userApi'


function UserPost() {
  const { userId } = useParams()

  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchPostsOfUser(id) {
      let res = await userApi.getPostsOfUser(id)
      setPosts(res)
    }

    fetchPostsOfUser(userId)
  }, [])

  console.log(posts);


  return (
    <div className='container my-5'>
      <h1 className='text-center mb-4'>List Posts Of UserID = {userId}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 && posts.map(post => (
            <tr key={post.id}>
              <th>{post.id}</th>
              <th>{post.title}</th>
              <th>{post.body}</th>
              <th>
                <Link to={`/posts/${post.id}/`}>Detail</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserPost
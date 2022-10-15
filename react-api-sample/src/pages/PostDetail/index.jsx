import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import postApi from '../../api/postApi';

function PostDetail() {
  const { postId } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    async function fetchPost(id) {
      let res = await postApi.getPostById(id)
      setPost(res)
    }

    fetchPost(postId)
  }, [])

  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail
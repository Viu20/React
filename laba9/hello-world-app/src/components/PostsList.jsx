import React from 'react'
import { useGetPostsQuery } from '../services/postsApi'

const PostsList = () => {
  const { data: posts, isLoading, isError, isFetching } = useGetPostsQuery()

  if (isLoading) {
    return <div className="spinner">Loading...</div>
  }

  if (isError) {
    return <div className="error">Error loading posts</div>
  }

  return (
    <div>
      {isFetching && <div className="fetching">Updating...</div>}
      <h1>Posts List</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsList
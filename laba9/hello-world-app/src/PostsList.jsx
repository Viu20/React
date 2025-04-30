import React from 'react';
import { useGetPostsQuery } from './postsApi';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

const PostsList = () => {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    isFetching,
    error 
  } = useGetPostsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <Spinner small />}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
import React from 'react'
import { postsAPI } from '../services/PostService'
import PostItem from './PostItem'

function PostsContainer() {
  const { data: posts, isLoading, error } = postsAPI.useFetchAllPostsQuery(5)
  return (
    <div>
      {isLoading && <h1>Loading..</h1>}
      {error && <h1>Failed to load posts</h1>}
      <div>
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default PostsContainer

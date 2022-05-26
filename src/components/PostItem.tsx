import React, { FC } from 'react'
import { IPost } from '../types/types'

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      {post.id}
      <b> {post.title}</b>
    </div>
  )
}

export default PostItem

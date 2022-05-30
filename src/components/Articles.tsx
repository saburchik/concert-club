import React, { FC, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { usersAPI } from '../services/UserService'

function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search)
}

const Articles: FC = () => {
  const query = useQuery()
  const postId = query.get('id')
  const params = useParams()
  const userId = params.id

  const { data: post } = usersAPI.useFetchIdPostQuery({
    userId: userId,
    postId: postId,
  })

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen'>
      <div className=''>Articles {userId}</div>
      {post &&
        post.map((pos) => (
          <div key={pos.id} className='p-4'>
            <h2 className='text-2xl text-center'>{pos.title}</h2>
            <b>{pos.body}</b>
          </div>
        ))}
    </div>
  )
}

export default Articles

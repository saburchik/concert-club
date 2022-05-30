import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost, IUser } from '../types/types'

interface Iobj {
  userId: string | undefined
  postId: string | null
}

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit) => ({
        url: '/users',
        params: { _limit: limit },
        headers: {
          'content-type': 'text/plain',
        },
      }),
    }),
    fetchIdUser: build.query<IUser, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
    }),
    fetchIdPosts: build.query<IPost[], number>({
      query: (id) => ({
        url: `/posts?userId=${id}`,
        params: { _limit: 4 },
      }),
    }),
    fetchIdPost: build.query<IPost[], Iobj>({
      query: (obj) => {
        const { userId, postId } = obj
        return {
          url: `/users/${userId}/posts?id=${postId}`,
        }
      },
    }),
  }),
})

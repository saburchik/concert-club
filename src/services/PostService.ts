import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IDs, IPost } from '../types/types'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (id) => ({
        url: `/posts`,
        params: { userId: id, _limit: 4 },
      }),
    }),
    fetchIdPost: build.query<IPost[], IDs>({
      query: (obj) => {
        const { userId, postId } = obj
        return {
          url: `/users/${userId}/posts`,
          params: { id: postId },
        }
      },
    }),
  }),
})

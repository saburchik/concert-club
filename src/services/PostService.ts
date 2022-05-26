import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../types/types'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit, number = 5) => ({
        url: '/posts',
        params: { _limit: limit },
      }),
    }),
  }),
})

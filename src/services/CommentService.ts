import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IComment } from '../types/types'

export const commentsAPI = createApi({
  reducerPath: 'commentsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    fetchAllComments: build.query<IComment[], number>({
      query: (id) => ({
        url: `/comments`,
        params: { postId: id },
      }),
    }),
  }),
})

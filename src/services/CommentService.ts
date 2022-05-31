import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IComment } from '../types/types'

export const commentsAPI = createApi({
  reducerPath: 'commentsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
  }),
  endpoints: (build) => ({
    fetchAllComments: build.query<IComment[], number>({
      query: (id) => ({
        url: `/comments`,
        params: { postId: id },
      }),
    }),
    createComment: build.mutation<IComment, IComment>({
      query: (post) => {
        return {
          url: `/posts/1/comments`,
          method: 'POST',
          body: post,
        }
      },
    }),
  }),
})

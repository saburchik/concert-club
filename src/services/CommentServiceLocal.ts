import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IComment } from '../types/types'

export const commentsLocalAPI = createApi({
  reducerPath: 'commentsLocalAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
  }),
  tagTypes: ['new-comment'],
  endpoints: (build) => ({
    fetchAllCommentsLocal: build.query<IComment[], number>({
      query: (id) => ({
        url: `/comments`,
        params: { postId: id },
      }),
      providesTags: (res) => ['new-comment'],
    }),
    createComment: build.mutation<IComment, IComment>({
      query: (post) => {
        const { postId } = post
        return {
          url: `/posts/${postId}/comments`,
          method: 'POST',
          body: post,
        }
      },
      invalidatesTags: ['new-comment'],
    }),
  }),
})

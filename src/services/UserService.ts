import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../types/types'

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
      }),
    }),
    fetchIdUser: build.query<IUser, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
    }),
  }),
})

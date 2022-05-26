import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../types/types'

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit, number = 5) => ({
        url: '/users',
        param: { _limit: limit },
      }),
    }),
  }),
})

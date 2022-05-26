// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { IUser } from '../../types/types'
// import { AppDispatch } from '../store'
// import { userSlice } from './userSlice'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetchingPending())
//     const res = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users'
//     )
//     dispatch(userSlice.actions.usersFetchingSuccess(res.data))
//   } catch (error) {
//     console.error(error)
//     if (error instanceof Error) {
//       dispatch(userSlice.actions.usersFetchingError(error.message))
//     }
//   }
// }

// export const fetchUsers = createAsyncThunk(
//   'user/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get<IUser[]>(
//         'https://jsonplaceholder.typicode.com/users'
//       )
//       return res.data
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Failed to load users')
//     }
//   }
// )

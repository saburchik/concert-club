//import usersReducer from './reducers/userSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { postsAPI } from '../services/PostService'
import { usersAPI } from '../services/UserService'

const rootReducer = combineReducers({
  // comments: commentsReducer,
  // usersReducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
})

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersAPI.middleware),
  })
}

//window.store = store

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']

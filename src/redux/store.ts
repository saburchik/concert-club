import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { commentsAPI } from '../services/CommentService'
import { commentsLocalAPI } from '../services/CommentServiceLocal'
import { postsAPI } from '../services/PostService'
import { usersAPI } from '../services/UserService'

const rootReducer = combineReducers({
  [usersAPI.reducerPath]: usersAPI.reducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
  [commentsAPI.reducerPath]: commentsAPI.reducer,
  [commentsLocalAPI.reducerPath]: commentsLocalAPI.reducer,
})

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        usersAPI.middleware,
        postsAPI.middleware,
        commentsAPI.middleware,
        commentsLocalAPI.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']

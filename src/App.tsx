import React, { FC } from 'react'
import PostsContainer from './components/PostsContainer'
import UsersContainer from './components/UsersContainer'

const App: FC = () => {
  return (
    <div className='flex-1 p-4 min-h-screen bg-white'>
      <div style={{ display: 'flex' }}>
        <PostsContainer />
        <UsersContainer />
      </div>
    </div>
  )
}

export default App

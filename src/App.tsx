import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Profile from './components/pages/Profile'
import Home from './components/pages/Home'
import Articles from './components/pages/Articles'

const App: FC = () => {
  return (
    <HashRouter>
      <Header />
      <div className='flex-1 min-h-screen bg-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<Profile />} />
          <Route path='/users/:id/posts' element={<Articles />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

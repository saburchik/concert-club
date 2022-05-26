import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './components/Home'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='flex-1 min-h-screen bg-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-black h-20'>
      <div className='flex items-center justify-between max-w-5xl h-full my-0 mx-auto p-4'>
        <Link className='text-white font-bold text-3xl uppercase' to='/'>
          Concert CLUB
        </Link>
        <ul className='flex gap-4'>
          <li>
            <button className='bg-white py-3 px-10 font-bold text-sm'>
              Версия для слабовидящих
            </button>
          </li>
          <li>
            <button className='bg-white py-3 px-10 font-bold text-sm'>
              Мой профиль
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

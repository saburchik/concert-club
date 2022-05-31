import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-black w-full h-20 absolute z-10  my-0 mx-auto'>
      <div className='flex items-center justify-between max-w-5xl h-full my-0 mx-auto p-4'>
        <Link className='text-white font-bold text-3xl uppercase' to='/'>
          Concert CLUB
        </Link>
        <ul className='flex gap-4 mm:hidden'>
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
        <ul className='hidden flex-col justify-between w-8 h-4 cursor-pointer mm:flex'>
          <li className='w-full border border-gray-200 rounded-sm'></li>
          <li className='w-full border border-gray-200 rounded-sm'></li>
          <li className='w-full border border-gray-200 rounded-sm'></li>
        </ul>
      </div>
    </div>
  )
}

export default Header

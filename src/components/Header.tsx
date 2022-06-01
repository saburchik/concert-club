import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <header className='bg-black w-full h-20 absolute z-10  my-0 mx-auto'>
      <nav className='flex items-center justify-between max-w-5xl h-full my-0 mx-auto p-4'>
        <Link
          className='duration-500 hover:text-slate-400 text-white font-bold text-3xl uppercase'
          to='/'
        >
          Concert CLUB
        </Link>
        <ul className='flex gap-4 mm:hidden'>
          <li>
            <button className='duration-500 hover:bg-slate-400 bg-white py-3 px-10 font-bold text-sm'>
              Версия для слабовидящих
            </button>
          </li>
          <li>
            <button className='duration-500 hover:bg-slate-400 bg-white py-3 px-10 font-bold text-sm'>
              Мой профиль
            </button>
          </li>
        </ul>
        <ul className='hidden flex-col justify-between w-8 h-4 cursor-pointer mm:flex'>
          <li className='w-full border border-gray-200 rounded-sm' />
          <li className='w-full border border-gray-200 rounded-sm' />
          <li className='w-full border border-gray-200 rounded-sm' />
        </ul>
      </nav>
    </header>
  )
}

export default Header

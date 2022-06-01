import { FC } from 'react'
import { Link } from 'react-router-dom'
import { UserProps } from '../types/types'

const User: FC<UserProps> = ({ user }) => {
  return (
    <li className='p-4 border-gray-400 flex-1 border min-w-fit sm:!min-w-[100%] lm:min-w-[48%]'>
      <article className='flex-1 mb-9'>
        <h3 className='tex-black text-base font-bold mb-1'>{user.name}</h3>
        <p className='text-gray-400 text-xs	'>{user.address.city}</p>
      </article>
      <Link
        className='duration-500 hover:bg-slate-600 block px-5 py-2.5 text-center text-white bg-black min-w-[180px] max-w-[329px]'
        to={`/users/${user.id}`}
      >
        Смотреть профиль
      </Link>
    </li>
  )
}

export default User

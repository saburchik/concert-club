import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../types/types'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li className='flex flex-col justify-between border w-60 p-4 border-gray-400 h-36'>
      <div className='flex-1'>
        <h3 className='tex-black text-base font-bold mb-1'>{user.name}</h3>
        <p className='text-gray-400 text-xs	'>{user.address.city}</p>
      </div>
      <Link
        className='px-5 py-2.5 text-white bg-black w-fit h-fit'
        to={`/users/${user.id}`}
      >
        Смотреть профиль
      </Link>
    </li>
  )
}

export default UserItem

import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li>
      {user.id}
      <span>{user.name}</span>
    </li>
  )
}

export default UserItem

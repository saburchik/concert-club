import React, { FC } from 'react'
import { usersAPI } from '../services/UserService'
import UserItem from './UserItem'

const Users: FC = () => {
  const { data: users, isLoading, error } = usersAPI.useFetchAllUsersQuery(5)

  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.usersReducer
  // )

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div>
      {isLoading && <h1>Идет загрузка..</h1>}
      {error && <h1>Failed to load users</h1>}
      <h2 className='flex justify-between	text-black	text-4xl font-medium'>
        Купили билеты
        <span>932/1000</span>
      </h2>
      <ul>
        {users && users.map((user) => <UserItem key={user.id} user={user} />)}
      </ul>
    </div>
  )
}

export default Users

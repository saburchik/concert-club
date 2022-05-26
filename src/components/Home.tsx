import { FC } from 'react'
import { usersAPI } from '../services/UserService'
import Error from './common/Error'
import Loading from './common/Loading'
import User from './User'

const Users: FC = () => {
  const { data: users, isLoading, error } = usersAPI.useFetchAllUsersQuery(4)

  return (
    <div className='max-w-5xl my-0 mx-auto'>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load users' />}
      </div>
      {!isLoading && !error && (
        <div className='p-4'>
          <h2 className='flex justify-between	text-black	text-4xl font-medium mb-4'>
            Купили билеты
            <span>
              932/<span className='text-gray-300'>1000</span>
            </span>
          </h2>
          <ul className='flex flex-wrap gap-2'>
            {users && users.map((user) => <User key={user.id} user={user} />)}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Users

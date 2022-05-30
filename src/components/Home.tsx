import { FC } from 'react'
import { usersAPI } from '../services/UserService'
import Error from './common/Error'
import Loading from './common/Loading'
import User from './User'

const Users: FC = () => {
  const { data: users, isLoading, error } = usersAPI.useFetchAllUsersQuery(4)

  return (
    // max-w-5xl my-0 mx-auto
    <div className=''>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load users' />}
      </div>
      {!isLoading && !error && (
        <div>
          <div className='flex flex-col justify-around items-center bg-pilots bg-black w-full inset-0 h-screen bg-no-repeat bg-center bg-cover'>
            <div />
            <div className='flex flex-col justify-center items-center gap-4 pt-12 mt-36 w-full bg-shadow'>
              <h1 className='text-white text-5xl font-bold max-w-6xl'>
                Twenty One Pilots
              </h1>
              <p className='text-white text-3xl text-center font-bold pb-16 max-w-xl bg-shadow'>
                22.02.23 в 21:00
              </p>
            </div>

            <div className=''>
              <button className='bg-white py-3 px-10 font-bold text-sm'>
                Купить билет
              </button>
            </div>
          </div>
          <div className='p-4 pt-8 max-w-5xl my-0 mx-auto h-96'>
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
        </div>
      )}
    </div>
  )
}

export default Users

import { FC } from 'react'
import { usersAPI } from '../../services/UserService'
import Error from '../common/Error'
import Loading from '../common/Loading'
import User from '../User'

const Users: FC = () => {
  const { data: users, isLoading, error } = usersAPI.useFetchAllUsersQuery(4)

  return (
    <div className=''>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load users' />}
      </div>
      {!isLoading && !error && (
        <div className='flex-1 w-full'>
          <div className='flex flex-col justify-around items-center bg-pilots bg-black w-full inset-0 h-screen bg-no-repeat bg-center bg-cover'>
            <div />
            <div className='flex flex-col justify-center items-center gap-4 pt-12 mt-36 w-full bg-shadow'>
              <h1 className='text-white text-5xl font-bold max-w-6xl sm:text-3xl'>
                Twenty One Pilots
              </h1>
              <p className='text-white text-3xl text-center font-bold pb-16 max-w-xl bg-shadow sm:text-2xl'>
                22.02.23 в 21:00
              </p>
            </div>

            <div className=''>
              <button className='bg-white py-3 px-10 font-bold text-sm'>
                Купить билет
              </button>
            </div>
          </div>
          <div className='mx-auto flex-1 py-8 px-4 max-w-5xl my-0 mb-20'>
            <h2 className='flex justify-between	text-black	text-4xl font-medium mb-4 sm:text-2xl'>
              Купили билеты
              <span>
                932/<span className='text-gray-300'>1000</span>
              </span>
            </h2>
            <ul className='flex justify-between flex-wrap gap-4 w-full max-w-5x'>
              {users && users.map((user) => <User key={user.id} user={user} />)}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users

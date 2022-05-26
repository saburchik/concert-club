import { useParams } from 'react-router-dom'
import { usersAPI } from '../services/UserService'
import Error from './common/Error'
import Loading from './common/Loading'

function Profile() {
  const params = useParams()
  const {
    data: user,
    isLoading,
    error,
  } = usersAPI.useFetchIdUserQuery(Number(params.id))

  return (
    <div>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load the user' />}
      </div>
      {!isLoading && !error && (
        <div className='w-full border border-black mt-9'>
          <div className='border-x max-w-5xl my-0 mx-auto  p-2.5 border-black'>
            <h2 className='font-medium text-4xl'>{user?.name}</h2>
          </div>
          {/* border-x border-y */}
          <hr className='border-black' />
          <ul className='border-x flex-wrap flex max-w-5xl mx-auto border-black'>
            <li className='flex flex-auto justify-center items-center p-2.5'>
              {user?.address.city}
            </li>
            <li className='flex flex-auto justify-center items-center p-2.5 border-x border-black'>
              {user?.email}
            </li>
            <li className='flex flex-auto justify-center items-center p-2.5 sm:border-y border-black'>
              {user?.phone}
            </li>
            <li className='flex flex-auto'>
              <button className='flex-1 p-2.5 bg-black text-white border border-dark-blue'>
                Написать сообщение
              </button>
            </li>
            <li className='flex flex-auto'>
              <button className='flex-1 ml-px p-2.5 bg-black text-white border border-dark-blue'>
                Предложить сходить на концерт
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Profile

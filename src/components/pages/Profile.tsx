import { useParams } from 'react-router-dom'
import { usersAPI } from '../../services/UserService'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Posts from '../Posts'

function Profile() {
  const params = useParams()
  const {
    data: user,
    isLoading,
    error,
  } = usersAPI.useFetchIdUserQuery(Number(params.id))

  return (
    <div className='pt-20'>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load the user' />}
      </div>
      {!isLoading && !error && (
        <div className='w-full mt-9'>
          <ul className='flex-1 flex justify-center border-t border-l border-black w-full'>
            <li className='flex border-r border-black px-2'></li>
            <li className='flex-1 border-r border-black w-[98%] max-w-5xl p-4 font-medium text-4xl'>
              {user?.name}
            </li>
            <li className='flex border-black px-2'></li>
          </ul>
          <ul className='flex justify-center border-t border-l border-b border-black mb-9'>
            <li className='flex border-r border-black px-2'></li>
            <li className='flex-1 border-black w-[98%] max-w-5xl'>
              <ul className='flex flex-wrap border-black'>
                <li className='flex items-center border-b border-r border-black 	p-4 sm:flex-1'>
                  {user?.address.city}
                </li>
                <li className='flex items-center border-b border-r border-black p-4 mm:flex-1 mm:min-w-234px'>
                  {user?.email}
                </li>
                <li className='flex items-center border-b border-r border-black	p-4 mm:flex-1 mm:min-w-234px'>
                  {user?.phone}
                </li>
                <li className='flex flex-1'>
                  <button className='flex-1 p-2.5 h-full w-full border-x border-t border-dark-blue bg-black text-white min-w-234px'>
                    Написать сообщение
                  </button>
                </li>
                <li className='flex flex-1 border-black	min-w-234px'>
                  <button className='flex-1 ml-px p-2.5 bg-black text-white border-x border-b border-dark-blue min-w-234px'>
                    Предложить сходить на концерт
                  </button>
                </li>
              </ul>
            </li>
            <li className='flex px-2'></li>
          </ul>
          <Posts userId={Number(params.id)} />
        </div>
      )}
    </div>
  )
}

export default Profile

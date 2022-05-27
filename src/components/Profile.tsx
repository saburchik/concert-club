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
    <div className='pt-20'>
      <div className='flex justify-center w-full'>
        {isLoading && <Loading />}
        {error && <Error text='Failed to load the user' />}
      </div>
      {!isLoading && !error && (
        <div className='w-full mt-9'>
          <ul className='flex-1 flex border-t border-l border-black'>
            <li className='flex border-r border-black w-1/12	 sm:w-4'></li>
            <li className='flex-1 border-r border-black w-4/5 p-4	font-medium text-4xl'>
              {user?.name}
            </li>
            <li className='flex border-r border-black w-1/12	 sm:w-4'></li>
          </ul>
          <ul className='flex border-t border-l border-black mb-9'>
            <li className='flex border-b border-r border-black w-1/12	sm:w-4'></li>
            <li className='flex-1 border-black w-4/5	'>
              <ul className='flex flex-wrap border-black'>
                <li className='flex items-center border-b border-r border-black 	p-4 sm:flex-1'>
                  {user?.address.city}
                </li>
                <li className='flex items-center border-b border-r border-black 	p-4 min-w-234px mm:flex-1'>
                  {user?.email}
                </li>
                <li className='flex flex-1 items-center border-b border-r border-black 	p-4 min-w-234px'>
                  {user?.phone}
                </li>
                <li className='flex-1	flex'>
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
            <li className='flex border-b border-r border-black w-1/12	sm:w-4'></li>
          </ul>
          <div className='flex-1'>
            <div className='w-1/12' />
            <div className='w-4/5 mx-auto flex-1'>
              <h2>Посты</h2>
            </div>
            <div className='w-1/12' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile

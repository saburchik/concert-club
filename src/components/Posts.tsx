import { FC } from 'react'
import { Link } from 'react-router-dom'
import { usersAPI } from '../services/UserService'
import { IPost } from '../types/types'

const Posts: FC<IPost> = ({ userId }) => {
  const { data: posts } = usersAPI.useFetchIdPostsQuery(userId)

  return (
    <div className='flex-1 border-y border-black pb-8 w-full'>
      <section className=' mx-auto flex-1 p-4 max-w-5xl my-0 '>
        <h2 className='font-medium text-4xl py-4'>Посты</h2>
        <div className='flex justify-between flex-wrap gap-4 w-full max-w-5x'>
          {posts &&
            posts.map((post) => (
              <article
                key={post.id}
                className='flex-1 border px-8 py-4 border-black min-w-[390px] sm:min-w-full px-4'
              >
                <h4 className='flex gap-4 text-base justify-between font-bold mb-2'>
                  <Link
                    to={`/users/${userId}/posts?id=${post.id}`}
                    className='first-letter:uppercase'
                  >
                    {post.title}
                  </Link>
                  <span className='text-xs'>12.01.2023</span>
                </h4>
                <p className='text-xs text-gray-400 first-letter:uppercase'>
                  {post.body}
                </p>
              </article>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Posts

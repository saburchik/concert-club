import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '../../hooks/useQuery'
import { commentsAPI } from '../../services/CommentService'
import { postsAPI } from '../../services/PostService'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IComment } from '../../types/types'

type Inputs = {
  username: string
  email: string
  body: string
}

const Articles: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const query = useQuery()
  const postId = Number(query.get('id'))
  const params = useParams()
  const userId = Number(params.id)

  const { data: post } = postsAPI.useFetchIdPostQuery({
    userId: userId,
    postId: postId,
  })
  const { data: comments } = commentsAPI.useFetchAllCommentsQuery(postId)
  const [createComment, {}] = commentsAPI.useCreateCommentMutation()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await createComment({
      postId: postId,
      name: data.username,
      email: data.email,
      body: data.body,
    } as IComment)
  }

  return (
    <div className='flex flex-col justify-center items-center w-full max-w-5xl mx-auto min-h-screen py-24'>
      {post &&
        post.map((item) => (
          <article
            key={item.id}
            className='p-4 border border-black rounded-md bg-gray-200'
          >
            <h2 className='text-2xl font-bold mb-2 first-letter:uppercase'>
              § {item.title}
            </h2>
            <p className='first-letter:uppercase'>{item.body}</p>
            <hr className='border-black my-4' />
            <div className='flex flex-col gap-4'>
              <h2>Comments:</h2>
              {comments &&
                comments.map((com) => (
                  <ul
                    key={com.id}
                    className='flex flex-col gap-2 border border-black rounded-xl p-4'
                  >
                    <li className='flex items-center gap-4'>
                      <div className='flex h-11 w-11 cursor-pointer'>
                        <img
                          className='w-full h-full rounded-full border border-black object-fill'
                          src='https://avatars.mds.yandex.net/i?id=60dda9fa239d918a214bb0762727d9a8-4280979-images-thumbs&n=13&exp=1'
                          alt='avatar'
                        />
                      </div>
                      <h3 className='first-letter:uppercase'>{com.name}</h3>
                    </li>
                    <li>
                      <strong>Email:</strong> <p>{com.email}</p>
                    </li>
                    <li>
                      <strong>Comment:</strong>{' '}
                      <p className='first-letter:uppercase'>{com.body}</p>
                    </li>
                  </ul>
                ))}
            </div>
            <hr className='border-black my-4' />
            <article>
              <h2>Comments:</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-2'
              >
                <input {...register('username')} placeholder='Enter a name' />
                <input {...register('email')} placeholder='Enter a email' />
                <textarea {...register('body')} placeholder='Enter a text' />
                <button className='bg-gray-500'>Add comment</button>
              </form>
            </article>
          </article>
        ))}
    </div>
  )
}

export default Articles

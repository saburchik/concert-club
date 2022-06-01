import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { commentsLocalAPI } from '../services/CommentServiceLocal'
import { CommentFormProp, IComment, Inputs } from '../types/types'
import Error from './common/Error'

const CommentForm: FC<CommentFormProp> = ({ postId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const [createComment, { error, isLoading }] =
    commentsLocalAPI.useCreateCommentMutation()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await createComment({
      body: formData.body,
      postId: Number(postId),
      name: formData.username,
      email: formData.email,
    } as IComment)
    reset()
  }

  return (
    <>
      {error && (
        <Error text='Возникла ошибка, возможно вы не запустили локальный сервер. Ссылка на документацию: https://github.com/typicode/json-server' />
      )}
      {isLoading && (
        <h3 className='text-xl text-blue-500 mb-2 font-bold'>
          Идет запрос на сервер..
        </h3>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <div className='col-span-6 sm:col-span-3'>
          <label
            htmlFor='username'
            className='w-fit block text-sm font-medium text-gray-700'
          >
            Name:
          </label>
          <input
            {...register('username', { required: true })}
            id='username'
            className='p-2 focus:border-black outline-none mt-1 flex w-full sm:text-sm border border-gray-300 rounded-md'
            placeholder='Your name'
          />
          {errors.username && (
            <p className='text-xs py-1 font-bold text-red-400'>
              Comment is required
            </p>
          )}
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <label
            htmlFor='email'
            className='w-fit block text-sm font-medium text-gray-700'
          >
            Email:
          </label>
          <input
            {...register('email', { required: true })}
            id='email'
            className='p-2 focus:border-black outline-none mt-1 flex w-full sm:text-sm border border-gray-300 rounded-md'
            placeholder='you@example.com'
          />
          {errors.email && (
            <p className='text-xs py-1 font-bold text-red-400'>
              Email is required
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor='comment'
            className='w-fit block text-sm font-medium text-gray-700'
          >
            Comment:
          </label>
          <div className='mt-1'>
            <textarea
              {...register('body', { required: true })}
              id='comment'
              rows={5}
              className='p-2 focus:border-black outline-none mt-1 flex w-full sm:text-sm border border-gray-300 rounded-md'
              placeholder='Your comment'
            ></textarea>
            {errors.body && (
              <p className='text-xs py-1 font-bold text-red-400'>
                Comment is required
              </p>
            )}
          </div>
        </div>
        <button className='transition flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Send comment
        </button>
      </form>
    </>
  )
}

export default CommentForm

import { FC } from 'react'
import { CommentItemProps } from '../types/types'

const CommentItem: FC<CommentItemProps> = ({ name, email, body }) => {
  return (
    <ul className='flex flex-col gap-2 border border-black rounded-xl p-4'>
      <li className='flex flex-wrap items-center gap-4'>
        <div className='flex h-11 w-11 cursor-pointer'>
          <img
            className='w-full h-full rounded-full border border-black object-fill'
            src='https://avatars.mds.yandex.net/i?id=60dda9fa239d918a214bb0762727d9a8-4280979-images-thumbs&n=13&exp=1'
            alt='avatar'
          />
        </div>
        <h3 className='first-letter:uppercase'>{name}</h3>
      </li>
      <li className='flex'>
        <strong>Email:</strong>
        <p className='ml-2'>{email}</p>
      </li>
      <li>
        <strong>Comment:</strong>
        <p className='first-letter:uppercase'>{body}</p>
      </li>
    </ul>
  )
}

export default CommentItem

import { FC } from 'react'
import { ErrorProps } from '../../types/types'

const Error: FC<ErrorProps> = ({ text }) => {
  return (
    <h2 className='text-1xl px-4 py-1 border text-red-500 border-red-300'>
      {text}
    </h2>
  )
}

export default Error

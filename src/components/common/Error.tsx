import React, { FC } from 'react'

interface ErrorProps {
  text: string
}

const Error: FC<ErrorProps> = ({ text }) => {
  return (
    <h2 className='text-2xl px-4 py-1 border text-red-400 border-red-400'>
      {text}
    </h2>
  )
}

export default Error

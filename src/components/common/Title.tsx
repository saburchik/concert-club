import React, { FC } from 'react'

type ITitle = {
  tag?: keyof JSX.IntrinsicElements
} & React.HTMLAttributes<HTMLOrSVGElement>

const Title: FC<ITitle> = ({ tag: Tag = 'h3', children, ...props }) => (
  <Tag {...props}>{children}</Tag>
)

export default Title

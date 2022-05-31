interface ICompany {
  name: string
  bs: string
}

interface IAddress {
  city: string
}

// == UserServices
export interface IUser {
  id: number
  username: string
  name: string
  address: IAddress
  email: string
  phone: string
  website: string
  company: ICompany
}

// == User.tsx
export interface UserProps {
  user: IUser
}

// == UserServices.ts, Posts.tsx
export interface IPost {
  userId: number
  id?: number
  title?: string
  body?: string
}

// == UserServices
export interface IDs {
  userId: number | undefined
  postId: number | null
}

export interface IComment {
  postId: number
  id?: number
  name?: string
  email?: string
  body?: string
}

// == Error.tsx
export interface ErrorProps {
  text: string
}

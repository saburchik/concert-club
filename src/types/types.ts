interface ICompany {
  name: string
  bs: string
}

export interface IUser {
  id: number
  username: string
  name: string
  email: string
  phone: string
  website: string
  company: ICompany
}

// _____________

export interface IPost {
  id: number
  title: string
  body: string
}

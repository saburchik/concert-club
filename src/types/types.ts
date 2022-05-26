interface ICompany {
  name: string
  bs: string
}

interface IAddress {
  city: string
}

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

// _____________

export interface IPost {
  id: number
  title: string
  body: string
}

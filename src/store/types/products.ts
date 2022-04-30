// export interface IProduct {
//   id: number
//   title: string
//   price: number
//   description: string
//   category: string
//   image: string
//   rating: {
//     rate: string
//     count: string
//   }
// }

export type Id = string

export interface ProductsResponceData {
  status: number
  message: string
  data: IProduct[]
  metadata?: {
    currentPage: number
    totalProducts: number
    nextPage: number
    totalPages: number
  }
}

export interface CategoriesResponceData {
  status: number
  message: string
  data: ICategory[]
  metadata?: {
    currentPage: number
    totalProducts: number
    nextPage: number
    totalPages: number
  }
}

export interface IUser {
  _id: Id
  role: string
  name: string
}

export interface ICategory {
  _id: Id
  name: string
  slug: string
  products?: Id[]
}

export interface IProduct {
  _id: Id
  title: string
  price: number
  description: string
  createdAt: Date
  updatedAt: Date
  slug: string
  image: string
  category: ICategory
  createdBy: IUser
}

export interface ProductsState {
  isLoading: boolean
  products?: ProductsResponceData | null
  categories?: CategoriesResponceData | null
  error?: string
}

export interface CategoriesState {
  isLoading: boolean
  categories: CategoriesResponceData | null
  error?: string
}

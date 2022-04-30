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

export interface IUser {
  role: string
  _id: string
  name: string
}

export interface ICategory {
  _id: string
  name: string
  slug: string
}

export interface IProduct {
  _id: string
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
  products: ProductsResponceData | null
  error?: string
}

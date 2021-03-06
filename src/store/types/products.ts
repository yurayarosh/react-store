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

export enum ProductsLists {
  CART = 'CART',
  FAVORITES = 'FAVORITES',
}

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

export interface SingleProductResponceData {
  status: number
  message: string
  data: IProduct
}

export interface SingleCategoryResponceData {
  status: number
  message: string
  data: {
    _id: Id
    name: string
    slug: string
    products: IProduct[]
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
  products: ProductsResponceData | null
  error?: string
}

export interface SingleProductState {
  isLoading: boolean
  product: SingleProductResponceData | null
  error?: string
}

export interface CategoriesState {
  isLoading: boolean
  categories: CategoriesResponceData | null
  error?: string
}

export interface SingleCategoryState {
  isLoading: boolean
  category: SingleCategoryResponceData | null
  error?: string
}

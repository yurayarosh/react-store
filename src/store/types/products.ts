export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: string
    count: string
  }
}

export interface ProductsState {
  isLoading: boolean
  products: IProduct[] | null
  error?: string
}

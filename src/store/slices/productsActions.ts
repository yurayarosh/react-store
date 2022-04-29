import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../types/products'

interface ProductFilters {
  sort?: string
  limit?: number
}

const _fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (filters: ProductFilters, thunkAPI) => {
    let paramsString = ''

    Object.keys(filters).forEach((key, i) => {
      const value = Object.values(filters)[i]

      paramsString += i === 0 ? `?${key}=${value}` : `&${key}=${value}`
    })

    console.log({ paramsString })

    try {
      const response = await fetch(`https://fakestoreapi.com/products${paramsString}`)
      const data: IProduct[] = await response.json()

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue('Fetching products error')
    }
  }
)

export const fetchProducts = (filters: ProductFilters = {}) => _fetchProducts(filters)

// export const fetchProducts = createAsyncThunk(
//   'products/fetchAll',
//   async (params = defaultParams, thunkAPI) => {
//     params = { ...defaultParams, ...params }
//     let paramsString = ''

//     Object.keys(params).forEach((key, i) => {
//       const value = Object.values(params)[i]

//       paramsString += i === 0 ? `?${key}=${value}` : `&${key}=${value}`
//     })

//     console.log({ paramsString })

//     try {
//       const response = await fetch(`https://fakestoreapi.com/products${paramsString}`)
//       const data: IProduct[] = await response.json()

//       return data
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Fetching products error')
//     }
//   }
// )

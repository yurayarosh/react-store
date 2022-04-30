import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct, ProductsResponceData } from '../types/products'
import { ResponseStatuses } from '../utils'

interface ProductFilters {
  sort?: string
  limit?: number
  page?: number
}

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (filters: ProductFilters | void = {}, thunkAPI) => {
    let paramsString = ''

    if (filters) {
      Object.keys(filters).forEach((key, i) => {
        const value = Object.values(filters)[i]

        paramsString += i === 0 ? `?${key}=${value}` : `&${key}=${value}`
      })
    }

    try {
      const response = await fetch(`https://api.storerestapi.com/products${paramsString}`)
      const data: ProductsResponceData = await response.json()

      return data.status === ResponseStatuses.OK
        ? data
        : thunkAPI.rejectWithValue('Fetching products error')
    } catch (e) {
      return thunkAPI.rejectWithValue('Fetching products error')
    }
  }
)

// export const fetchProducts = (filters: ProductFilters = {}) => _fetchProducts(filters)

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

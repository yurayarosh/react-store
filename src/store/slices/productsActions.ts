import { createAsyncThunk } from '@reduxjs/toolkit'
import { CategoriesResponceData, IProduct, ProductsResponceData } from '../types/products'
import { ResponseStatuses } from '../utils'

interface ProductFilters {
  sort?: string
  limit?: number
  page?: number
}

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
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

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`https://api.storerestapi.com/categories`)
      const data: CategoriesResponceData = await response.json()

      return data.status === ResponseStatuses.OK
        ? data
        : thunkAPI.rejectWithValue('Fetching products error')
    } catch (e) {
      return thunkAPI.rejectWithValue('Fetching products error')
    }
  }
)

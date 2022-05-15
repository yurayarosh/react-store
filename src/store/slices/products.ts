import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  CategoriesResponceData,
  ProductsResponceData,
  ProductsState,
  SingleProductResponceData,
} from '../types/products'
import { fetchCategories, fetchProducts, fetchSingleProduct } from './productsActions'

const initialState: ProductsState = {
  isLoading: true,
  products: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending.type]: state => {
      state.isLoading = true
    },
    [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductsResponceData>) => {
      state.isLoading = false
      state.products = action.payload
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [fetchCategories.pending.type]: state => {
      state.isLoading = true
    },
    [fetchCategories.fulfilled.type]: (state, action: PayloadAction<CategoriesResponceData>) => {
      state.isLoading = false
      state.categories = action.payload
    },
    [fetchCategories.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [fetchSingleProduct.pending.type]: state => {
      state.isLoading = true
    },
    [fetchSingleProduct.fulfilled.type]: (
      state,
      action: PayloadAction<SingleProductResponceData>
    ) => {
      state.isLoading = true
      state.product = action.payload
    },
    [fetchSingleProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.error = action.payload
    },
  },
})

export default productsSlice.reducer

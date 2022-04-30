import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { ProductsResponceData, ProductsState } from '../types/products'
import { fetchProducts } from './productsActions'

// Define the initial state using that type
const initialState: ProductsState = {
  isLoading: true,
  products: null,
}

export const counterSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductsResponceData>) => {
      state.isLoading = false
      state.products = action.payload
    },
    [fetchProducts.pending.type]: state => {
      state.isLoading = true
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.products.value

export default counterSlice.reducer

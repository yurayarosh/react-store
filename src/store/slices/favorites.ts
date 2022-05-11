import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoritesState } from '../types/favorites'
import { IProduct } from '../types/products'
// import { CategoriesResponceData, ProductsResponceData, ProductsState } from '../types/products'
// import { fetchCategories, fetchProducts } from './productsActions'

// Define the initial state using that type
const initialState: FavoritesState = {
  products: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    }
  },
  extraReducers: {
    // [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductsResponceData>) => {
    //   state.isLoading = false
    //   state.products = action.payload
    // },
    // [fetchProducts.pending.type]: state => {
    //   state.isLoading = true
    // },
    // [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // },
    // [fetchCategories.fulfilled.type]: (state, action: PayloadAction<CategoriesResponceData>) => {
    //   state.isLoading = false
    //   state.categories = action.payload
    // },
    // [fetchCategories.pending.type]: state => {
    //   state.isLoading = true
    // },
    // [fetchCategories.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // },
  },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.products.value

export default favoritesSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoritesState } from '../types/favorites'
import { IProduct } from '../types/products'
import { setFavorites } from './favoritesActions'
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
    // setFavorites: (state, action: PayloadAction<IProduct[]>) => {
    //   state.products = action.payload
    // }
  },
  extraReducers: {
    // [setFavorites.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
    //   state.products = action.payload
    // },
    [setFavorites.type]: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    }
  },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.products.value

export default favoritesSlice.reducer

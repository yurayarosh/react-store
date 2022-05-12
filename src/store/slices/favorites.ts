import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoritesState } from '../types/favorites'
import { IProduct } from '../types/products'
import { setFavorites } from './favoritesActions'
const initialState: FavoritesState = {
  products: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: {
    [setFavorites.type]: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    },
  },
})

export default favoritesSlice.reducer

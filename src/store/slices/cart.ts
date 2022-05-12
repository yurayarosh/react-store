import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from '../types/cart'
import { IProduct } from '../types/products'
import { setCart } from './cartActions'

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [setCart.type]: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    },
  },
})

export default cartSlice.reducer

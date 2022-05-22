import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PopupState } from '../types/popup'
import { closeAllPopups, setCartPopup } from './popupActions'

const initialState: PopupState = {
  cart: {
    isOpen: false,
  },
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {},
  extraReducers: {
    [setCartPopup.type]: (state, action: PayloadAction<boolean>) => {
      state.cart.isOpen = action.payload
    },
    [closeAllPopups.type]: state => {
      state.cart.isOpen = false
    },
  },
})

export default popupSlice.reducer

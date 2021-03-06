import { createAction } from '@reduxjs/toolkit'

export const setCartPopup = createAction('popup/cart', (isOpen: boolean) => {
  return {
    payload: isOpen,
  }
})

export const closeAllPopups = createAction('popup/closeAll')

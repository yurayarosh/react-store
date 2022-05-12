import { createAction } from '@reduxjs/toolkit'
import { IProduct } from '../types/products'

export const setFavorites = createAction('favorites/set', (products: IProduct[]) => {
  localStorage.setItem('favorites', JSON.stringify(products))

  return {
    payload: products,
  }
})

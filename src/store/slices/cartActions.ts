import { createAction } from '@reduxjs/toolkit'
import { IProduct } from '../types/products'

export const setCart = createAction('cart/set', (products: IProduct[]) => {
  localStorage.setItem('cart', JSON.stringify(products))

  return {
    payload: products,
  }
})

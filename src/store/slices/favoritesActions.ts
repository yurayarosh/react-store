import { AppDispatch } from '..'
import { IProduct } from '../types/products'
import { favoritesSlice } from './favorites'

export const setFavorites = (products: IProduct[]) => (dispath: AppDispatch) => {
  dispath(favoritesSlice.actions.setFavorites(products))
  console.log('action');
  
  localStorage.setItem('favorites', JSON.stringify(products))
}

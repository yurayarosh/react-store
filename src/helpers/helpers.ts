import { IProduct } from '../store/types/products'

export const filterCurrency = (value: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('ua-UA', { style: 'currency', currency }).format(value)
}

export const isTouch: boolean = 'ontouchstart' in window || !!navigator.maxTouchPoints

export const getProductsListUpdate = (products: IProduct[], product: IProduct) => {
  return [...products, product].reduce((arr: IProduct[], currProduct: IProduct) => {
    return arr.some(({ _id }) => _id === currProduct._id) ? arr : [...arr, currProduct]
  }, [])
}

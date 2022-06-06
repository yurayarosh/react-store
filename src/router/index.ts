import { ComponentType } from 'react'
import Cart from '../pages/Cart/Cart'
import Catalog from '../pages/Catalog/Catalog'
import Favorites from '../pages/Favorites/Favorites'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'

export interface IRoute {
  path: string
  Component: ComponentType
}

export enum RouteNames {
  HOME = '/',
  FAVORITES = '/favorites',
  CART = '/cart',
  PRODUCTS = '/products',
  CATALOG = '/catalog',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.HOME,
    Component: Home,
  },
  {
    path: RouteNames.FAVORITES,
    Component: Favorites,
  },
  {
    path: RouteNames.CART,
    Component: Cart,
  },
  {
    path: `${RouteNames.CATALOG}/:id`,
    Component: Catalog,
  },
  {
    path: `${RouteNames.PRODUCTS}/:id`,
    Component: Product,
  },
]

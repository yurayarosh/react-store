import { useEffect } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import { useAppDispatch } from './hooks/store'
import { setCart } from './store/slices/cartActions'
import { setFavorites } from './store/slices/favoritesActions'
import { fetchCategories } from './store/slices/productsActions'
import { IProduct } from './store/types/products'

function App() {
  const dispatch = useAppDispatch()
  const parseList = (str: string): IProduct[] => JSON.parse(str)

  useEffect(() => {
    dispatch(fetchCategories())

    const localFavorites = localStorage.getItem('favorites')
    const localCart = localStorage.getItem('cart')

    if (localFavorites) {
      dispatch(setFavorites(parseList(localFavorites)))
    }

    if (localCart) {
      dispatch(setCart(parseList(localCart)))
    }
  }, [])
  return <AppRouter />
}

export default App

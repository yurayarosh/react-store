import { useEffect } from 'react'
import AppRouter from './components/AppRouter/AppRouter'
import { useAppDispatch } from './hooks/store'
import { setFavorites } from './store/slices/favoritesActions'
import { fetchCategories } from './store/slices/productsActions'
import { IProduct } from './store/types/products'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())

    const localFavorites = localStorage.getItem('favorites')

    if (localFavorites) {
      const list: IProduct[] = JSON.parse(localFavorites)
      dispatch(setFavorites(list))
    }
  }, [])
  return <AppRouter />
}

export default App

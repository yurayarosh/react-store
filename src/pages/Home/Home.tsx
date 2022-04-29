import { FC, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import SectionHero from '../../components/Sections/SectionHero'
import SectionTrands from '../../components/Sections/SectionTrands'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchProducts } from '../../store/slices/productsActions'

const Home: FC = () => {
  const { isLoading, products, error } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  // useEffect(() => {
  //   console.log({ products })

  // }, [products])

  return (
    <Layout SectionHero={<SectionHero />}>
      <SectionTrands products={products} />
    </Layout>
  )
}

export default Home

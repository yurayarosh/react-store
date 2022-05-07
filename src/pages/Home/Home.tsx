import { FC, useEffect, useMemo } from 'react'
import Layout from '../../components/Layout/Layout'
import SectionHero from '../../components/Sections/SectionHero'
import SectionTrands from '../../components/Sections/SectionTrands'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchProducts } from '../../store/slices/productsActions'

const Home: FC = () => {
  // const { isLoading, products, error } = useAppSelector(state => state.products)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchProducts({ limit: 8 }))
  // }, [])

  console.log('render home page');
  

  return (
    <Layout SectionHero={<SectionHero />}>
      {/* {products && <SectionTrands products={products} />} */}
      <SectionTrands />
    </Layout>
  )
}

export default Home

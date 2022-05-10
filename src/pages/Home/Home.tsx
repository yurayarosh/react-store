import { FC, useEffect, useMemo } from 'react'
import Layout from '../../components/Layout/Layout'
import SectionHero from '../../components/Sections/SectionHero'
import SectionTrands from '../../components/Sections/SectionTrands'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchProducts } from '../../store/slices/productsActions'

const Home: FC = () => {
  return (
    <Layout SectionHero={<SectionHero />}>
      <SectionTrands />
    </Layout>
  )
}

export default Home

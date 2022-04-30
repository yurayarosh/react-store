import { FC, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import styles from './Layout.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchCategories } from '../../store/slices/productsActions'

interface LayoutProps {
  children: ReactNode
  SectionHero?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, SectionHero }) => {
  const dispatch = useAppDispatch()

  const { categories } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  // useEffect(() => {}, [categories])

  return (
    <>
      <div className={classNames('out', styles.out, { [styles['has-hero']]: SectionHero })}>
        <Header />

        {SectionHero && SectionHero}

        <main className={classNames('main', styles.main)}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

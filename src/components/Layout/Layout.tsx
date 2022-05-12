import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
  SectionHero?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, SectionHero }) => {
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

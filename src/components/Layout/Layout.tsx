import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classNames('out', styles.out)}>
      <Header />
      <main className={classNames('main', styles.main)}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

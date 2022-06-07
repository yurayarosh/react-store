import { FC, ReactNode, useMemo } from 'react'
import classNames from 'classnames'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import styles from './Layout.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { IPopup } from '../../store/types/popup'
import { setCartPopup } from '../../store/slices/popupActions'

interface LayoutProps {
  children: ReactNode
  SectionHero?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, SectionHero }) => {
  const dispatch = useAppDispatch()
  const popup = useAppSelector(state => state.popup)

  const onOverlayClick = () => {
    dispatch(setCartPopup(false))
  }

  const hasOpenPopup: boolean = useMemo(() => {
    return Object.values(popup).find((popup: IPopup) => popup.isOpen)
  }, [popup])
  return (
    <>
      <div className={classNames('out', styles.out, { [styles['has-hero']]: SectionHero })}>
        <Header />

        {SectionHero && SectionHero}

        <main className={classNames('main', styles.main)}>{children}</main>
        <Footer />

        {hasOpenPopup && <div className="overlay" onClick={onOverlayClick} />}
      </div>
    </>
  )
}

export default Layout

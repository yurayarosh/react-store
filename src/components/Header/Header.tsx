import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { RouteNames } from '../../router'
import { setCartPopup } from '../../store/slices/popupActions'
import CartPopup from '../CartPopup/CartPopup'

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

import styles from './Header.module.scss'

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const {
    cart: { isOpen: cartIsOpen },
  } = useAppSelector(state => state.popup)
  const { products: favoritesProducts } = useAppSelector(state => state.favorites)
  const { products: cartProducts } = useAppSelector(state => state.cart)

  const [navIsOpen, setNavIsOpen] = useState<boolean>(false)

  const onBurgerClick = () => {
    setNavIsOpen(!navIsOpen)
  }

  const onOpenCartPopupButtonClick = () => {
    dispatch(setCartPopup(true))
  }

  useEffect(() => {
    setNavIsOpen(false)
  }, [location])

  return (
    <header className="header">
      <div className="container container--lg">
        <div className="header__inner">
          <div className={classNames('header__logo', styles.logo)}>
            <Logo />
          </div>

          <CSSTransition
            in={navIsOpen}
            timeout={300}
            className={classNames('header__nav', styles.nav)}
            classNames="fade"
          >
            <div>
              <div className={classNames('header__nav-in', styles['nav-inner'])}>
                <Navigation />
              </div>
            </div>
          </CSSTransition>

          <div className={classNames('header-controls', styles.controls)}>
            <div className="header-controls__item header-controls__search">
              <button className="js-popup-open" data-popup-target="search">
                <svg
                  viewBox="0 0 52.966 52.966"
                  className="icon icon-search"
                  width="1.000em"
                  height="1em"
                >
                  <path d="M51.704 51.273L36.845 35.82c3.79-3.801 6.138-9.041 6.138-14.82 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c5.083 0 9.748-1.817 13.384-4.832l14.895 15.491a.998.998 0 001.414.028 1 1 0 00.028-1.414zM21.983 40c-10.477 0-19-8.523-19-19s8.523-19 19-19 19 8.523 19 19-8.524 19-19 19z" />
                </svg>
              </button>
            </div>
            <div className="header-controls__item">
              <Link to={RouteNames.FAVORITES}>
                {favoritesProducts.length > 0 && <sup>{favoritesProducts.length}</sup>}

                <svg
                  viewBox="0 0 51.997 51.997"
                  className="icon icon-like"
                  width="1.000em"
                  height="1em"
                >
                  <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z" />
                </svg>
              </Link>
            </div>
            <div className="header-controls__item header-controls__cart">
              <button type="button" onClick={onOpenCartPopupButtonClick}>
                {cartProducts.length > 0 && <sup>{cartProducts.length}</sup>}

                <svg
                  viewBox="0 0 511.808 511.808"
                  className="icon icon-shopping-bag"
                  width="1.000em"
                  height="1em"
                >
                  <path d="M477.511 491.424l-26.48-348.832c-.624-8.336-7.584-14.784-15.952-14.784H76.391c-8.368 0-15.328 6.448-15.952 14.8l-26.704 352a16.013 16.013 0 004.224 12.08 15.996 15.996 0 0011.728 5.12h412.432c8.832 0 16-7.168 16-16.016 0-1.504-.208-2.976-.608-4.368zM66.935 479.808l24.288-320h329.024l24.288 320h-377.6z" />
                  <path d="M255.735 0c-70.576 0-128 57.44-128 128.032v63.776c0 8.832 7.168 16 16 16s16-7.168 16-16v-63.776c0-52.96 43.056-96.032 96-96.032s96 43.072 96 96.032v63.776c0 8.832 7.168 16 16 16s16-7.168 16-16v-63.776C383.735 57.44 326.311 0 255.735 0z" />
                </svg>
              </button>

              <CSSTransition in={cartIsOpen} timeout={300} classNames="fade">
                {/* <div> */}
                <CartPopup />
                {/* </div> */}
              </CSSTransition>
            </div>
            <div className="header-controls__item">
              <button className="js-popup-open" data-popup-target="login">
                <svg
                  viewBox="0 0 513.323 513.323"
                  className="icon icon-user"
                  width="1.000em"
                  height="1em"
                >
                  <path d="M256.661 257.323c-135.275 0-245.333 110.059-245.333 245.333 0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667c0-123.52 100.48-224 224-224s224 100.48 224 224c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667c-.001-135.296-110.06-245.333-245.335-245.333zM256.661 0c-64.683 0-117.333 52.629-117.333 117.333s52.651 117.333 117.333 117.333 117.333-52.629 117.333-117.333S321.344 0 256.661 0zm0 213.333c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96-43.072 96-96 96z" />
                </svg>
              </button>
            </div>
            <div className="header-controls__item header-controls__lang">
              <button className="lang-btn js-popup-open" data-popup-target="lang">
                Ua
              </button>
            </div>
          </div>
          <div className={classNames('header__burger', styles.burger)}>
            <button className="burger" aria-label="Toggle menu" onClick={onBurgerClick}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

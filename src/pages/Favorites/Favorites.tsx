import { FC, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { useAppSelector } from '../../hooks/store'

const Favorites: FC = () => {
  const { products } = useAppSelector(state => state.favorites)

  useEffect(() => {
    console.log({ products })
  }, [])

  return (
    <Layout>
      <section className="section pt-0">
        <div className="section__top">
          <div className="container">
            <h3 className="title title--h3-sm">Мої вподобання (32)</h3>
          </div>
        </div>
        <div className="container">
          <div className="cart layout">
            <div className="cart__items layout__left">
              <div className="cart-item">
                <a href="#" className="cart-item__inner">
                  <span className="cart-item__img">
                    <img className="js-lazy" alt="" src="" data-src="./img/cart-md.jpg" />
                  </span>
                  <span className="cart-item__content">
                    <span className="cart-item__title">
                      <span className="title title--h5">Куртка зимова</span>
                    </span>
                    <span className="cart-item__meta">
                      <span className="cart-item__meta-item">Колір: білий</span>
                      <span className="cart-item__meta-item">Розмір: XS</span>
                    </span>
                  </span>
                  <span className="cart-item__price">
                    <span className="price price--md">$ 4890,00</span>
                  </span>
                </a>
                <button className="cart-item__btn cart-item__del">
                  Видалити
                  <svg
                    viewBox="0 0 47.971 47.971"
                    className="icon icon-close"
                    width="1.000em"
                    height="1em"
                  >
                    <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                  </svg>
                </button>
              </div>
              <div className="cart-item">
                <a href="#" className="cart-item__inner">
                  <span className="cart-item__img">
                    <img className="js-lazy" alt="" src="" data-src="./img/cart-md.jpg" />
                  </span>
                  <span className="cart-item__content">
                    <span className="cart-item__title">
                      <span className="title title--h5">Куртка зимова</span>
                    </span>
                    <span className="cart-item__meta">
                      <span className="cart-item__meta-item">Колір: білий</span>
                      <span className="cart-item__meta-item">Розмір: XS</span>
                    </span>
                  </span>
                  <span className="cart-item__price">
                    <span className="price price--md">$ 4890,00</span>
                  </span>
                </a>
                <button className="cart-item__btn cart-item__del">
                  Видалити
                  <svg
                    viewBox="0 0 47.971 47.971"
                    className="icon icon-close"
                    width="1.000em"
                    height="1em"
                  >
                    <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                  </svg>
                </button>
              </div>
              <div className="cart-item">
                <a href="#" className="cart-item__inner">
                  <span className="cart-item__img">
                    <img className="js-lazy" alt="" src="" data-src="./img/cart-md.jpg" />
                  </span>
                  <span className="cart-item__content">
                    <span className="cart-item__title">
                      <span className="title title--h5">Куртка зимова</span>
                    </span>
                    <span className="cart-item__meta">
                      <span className="cart-item__meta-item">Колір: білий</span>
                      <span className="cart-item__meta-item">Розмір: XS</span>
                    </span>
                  </span>
                  <span className="cart-item__price">
                    <span className="price price--md">$ 4890,00</span>
                  </span>
                </a>
                <button className="cart-item__btn cart-item__del">
                  Видалити
                  <svg
                    viewBox="0 0 47.971 47.971"
                    className="icon icon-close"
                    width="1.000em"
                    height="1em"
                  >
                    <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="cart__meta layout__right">
              <div className="cart-meta">
                <div className="cart-meta__title">
                  <div className="title title--h4">Придбайте зараз</div>
                </div>
                <div className="cart-meta__amount">
                  <div>сума замовлення:</div>
                  <div className="price price--inherit price--sm">9690,00 ₴</div>
                </div>
                <div className="cart-meta__amount-pay">
                  <div>До сплати:</div>
                  <div className="price price--inherit price--fz">9690,00 ₴</div>
                </div>
                <div className="cart-meta__btn">
                  <button className="btn btn--full btn--square">Додати до кошика</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Favorites

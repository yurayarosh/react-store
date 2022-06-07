import classNames from 'classnames'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import ProductsList from '../../components/ProductsList/ProductsList'
import { filterCurrency, getProductsListUpdate } from '../../helpers/helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { setCart } from '../../store/slices/cartActions'
import { setFavorites } from '../../store/slices/favoritesActions'
import { fetchSingleProduct } from '../../store/slices/productsActions'

import styles from './Product.module.scss'

const Product: FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { product } = useAppSelector(state => state.products)
  const { products: cartProducts } = useAppSelector(state => state.cart)
  const { products: favoritesProducts } = useAppSelector(state => state.favorites)

  const onAddToCartButtonClick = () => {
    if (product) {
      const newCart = getProductsListUpdate(cartProducts, product.data)
      dispatch(setCart(newCart))
    }
  }

  const onAddToFavoritesButtonClick = () => {
    if (product) {
      const newFavorites = getProductsListUpdate(favoritesProducts, product.data)
      dispatch(setFavorites(newFavorites))
    }
  }

  useEffect(() => {
    if (id) dispatch(fetchSingleProduct(id))
  }, [id])

  if (!product) return <Loader />

  return (
    <Layout>
      <section className="section section--lg">
        <div className="container container--lg">
          <div className="layout">
            <div className="layout__left">
              <div className="product-preview js-grid" data-scale="vertical">
                {[...Array(3)].map((el, i) => (
                  <div key={i} className="product-img">
                    <div className={classNames('product-img__img', styles.img)}>
                      <img
                        src={
                          product.data.image ||
                          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
                        }
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="layout__right">
              <div className="product-descr">
                <div className="product-descr__top">
                  <div className="gray">{product.data.category.name}</div>
                  <small>Артикул: FS100612/WN</small>
                </div>
                <div className="product-descr__title">
                  <h3 className="title title--h3-md">{product.data.title}</h3>
                </div>
                <div className="product-descr__block">
                  <div className="price">{filterCurrency(product.data.price)}</div>
                </div>
                <div className="product-descr__block">
                  <div className="product-descr__block-title">Колір</div>
                  <div className="colors">
                    <div className="color" style={{ backgroundColor: '#154bc3' }} />
                    <div className="color" style={{ backgroundColor: '#f4f4f4' }} />
                    <div className="color" style={{ backgroundColor: '#1f1f1f' }} />
                    <div className="color" style={{ backgroundColor: '#cb0e33' }} />
                  </div>
                </div>
                <div className="product-descr__block">
                  <div className="product-descr__block-title">Розмір</div>
                  <div className="sizes">
                    <div className="size">xs</div>
                    <div className="size">s</div>
                    <div className="size">M</div>
                    <div className="size">L</div>
                    <div className="size">XL</div>
                  </div>
                </div>
                <div className="product-descr__btns">
                  <div className="product-descr__btn-lg">
                    <button
                      className="btn btn--full btn--text btn--square"
                      type="button"
                      onClick={onAddToCartButtonClick}
                    >
                      Додати у кошик
                    </button>
                  </div>
                  <div className="product-descr__btn-sm">
                    <button
                      className="btn btn--full btn--text btn--square"
                      type="button"
                      onClick={onAddToFavoritesButtonClick}
                    >
                      <svg
                        viewBox="0 0 51.997 51.997"
                        className="icon icon-like"
                        width="1.000em"
                        height="1em"
                      >
                        <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {product.data.description && (
                  <div className="product-descr__text">{product.data.description}</div>
                )}
              </div>
              {/* <div className="product-meta js-accordion">
                <div className="product-meta-block">
                  <button className="product-meta-block__title js-accordion-title">
                    <span className="title title--h4-lg">Доставка та оплата:</span>
                    <span className="product-meta-block__title-icon"></span>
                  </button>
                  <div className="product-meta-block__content js-accordion-content">
                    <div className="comment">
                      <div className="comment__top">
                        <div className="comment__title">
                          <h5 className="title title--h5">Василь Шевченко</h5>
                        </div>
                        <div className="comment__rating">
                          <div className="rating rating--plain">
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="comment__date">01.02.2019</div>
                      </div>
                      <div className="comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis
                        temporibus deleniti, ex, quos, eligendi at aliquam suscipit enim cumque
                        fugiat sed sapiente consectetur accusamus quaerat ab consequuntur molestias
                        adipisci.
                      </div>
                    </div>
                    <div className="comment">
                      <div className="comment__top">
                        <div className="comment__title">
                          <h5 className="title title--h5">Василь Шевченко</h5>
                        </div>
                        <div className="comment__rating">
                          <div className="rating rating--plain">
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="comment__date">01.02.2019</div>
                      </div>
                      <div className="comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis
                        temporibus deleniti, ex, quos, eligendi at aliquam suscipit enim cumque
                        fugiat sed sapiente consectetur accusamus quaerat ab consequuntur molestias
                        adipisci.
                      </div>
                    </div>
                    <div className="comment-btns">
                      <a href="#" className="link-accent">
                        Всі відгуки
                      </a>
                      <button className="btn btn--transp-accent">Залишити відгук</button>
                    </div>
                  </div>
                </div>
                <div className="product-meta-block">
                  <button className="product-meta-block__title js-accordion-title">
                    <span className="title title--h4-lg">Відгуки (2):</span>
                    <span className="product-meta-block__title-icon"></span>
                  </button>
                  <div className="product-meta-block__content js-accordion-content">
                    <div className="comment">
                      <div className="comment__top">
                        <div className="comment__title">
                          <h5 className="title title--h5">Василь Шевченко</h5>
                        </div>
                        <div className="comment__rating">
                          <div className="rating rating--plain">
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="comment__date">01.02.2019</div>
                      </div>
                      <div className="comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis
                        temporibus deleniti, ex, quos, eligendi at aliquam suscipit enim cumque
                        fugiat sed sapiente consectetur accusamus quaerat ab consequuntur molestias
                        adipisci.
                      </div>
                    </div>
                    <div className="comment">
                      <div className="comment__top">
                        <div className="comment__title">
                          <h5 className="title title--h5">Василь Шевченко</h5>
                        </div>
                        <div className="comment__rating">
                          <div className="rating rating--plain">
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star is-filled">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                            <div className="rating__star">
                              <svg
                                viewBox="0 0 19.481 19.481"
                                className="icon icon-star"
                                width="1.000em"
                                height="1em"
                              >
                                <path d="M10.201.758l2.478 5.865 6.344.545a.5.5 0 01.285.876l-4.812 4.169 1.442 6.202a.5.5 0 01-.745.541l-5.452-3.288-5.452 3.288a.5.5 0 01-.745-.541l1.442-6.202-4.813-4.17a.5.5 0 01.285-.876l6.344-.545L9.28.758a.5.5 0 01.921 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="comment__date">01.02.2019</div>
                      </div>
                      <div className="comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis
                        temporibus deleniti, ex, quos, eligendi at aliquam suscipit enim cumque
                        fugiat sed sapiente consectetur accusamus quaerat ab consequuntur molestias
                        adipisci.
                      </div>
                    </div>
                    <div className="comment-btns">
                      <a href="#" className="link-accent">
                        Всі відгуки
                      </a>
                      <button className="btn btn--transp-accent">Залишити відгук</button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container container--lg">
          <div className="section__title">
            <h3 className="title title--h3-sm">Також можуть сподобадится</h3>
          </div>

          <ProductsList />
        </div>
      </section>
    </Layout>
  )
}

export default Product

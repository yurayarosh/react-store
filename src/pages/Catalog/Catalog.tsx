import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import ProductsList from '../../components/ProductsList/ProductsList'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchCategory } from '../../store/slices/productsActions'
import { IProduct } from '../../store/types/products'

const Catalog: FC = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()
  const { category } = useAppSelector(state => state.products)

  const [currentProducts, setCurreentproducts] = useState<IProduct[]>([])

  useEffect(() => {
    if (id) {
      dispatch(fetchCategory(id))
    }
  }, [])

  useEffect(() => {
    if (category) setCurreentproducts(category.data.products)
  }, [category])

  return (
    <Layout>
      <div className="container container--lg">
        <div className="catalog-page">
          <div className="catalog-page__aside-toggle">
            <h3 className="title title--h3-sm">
              <button className="burger burger--arrow js-burger" data-menu-target="aside">
                Каталог
              </button>
            </h3>
          </div>
          <div className="catalog-page__aside js-menu" data-menu="aside">
            <aside className="aside js-sticky-polyfill">
              <button className="aside__close close js-menu-close"></button>
              <div className="aside__title section__title">
                <h3 className="title title--h3-sm">Каталог</h3>
              </div>
              <div className="aside__filter">
                <div className="filters js-accordion">
                  <div className="filters-block">
                    <button className="filters-block__title js-accordion-title is-active">
                      <span className="title title--h6">Тип продукта:</span>
                      <span className="filters-block__title-icon"></span>
                    </button>
                    <div className="filters-block__content js-accordion-content is-active">
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />

                          <span>
                            Лайф стайл <span className="gray">(32)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Спорт <span className="gray">(56)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Футбол <span className="gray">(87)</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="filters-block">
                    <button className="filters-block__title js-accordion-title">
                      <span className="title title--h6">Коллекции:</span>
                      <span className="filters-block__title-icon"></span>
                    </button>
                    <div className="filters-block__content js-accordion-content">
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Лайф стайл <span className="gray">(32)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Спорт <span className="gray">(56)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Футбол <span className="gray">(87)</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="filters-block">
                    <button className="filters-block__title js-accordion-title">
                      <span className="title title--h6">Бренд::</span>
                      <span className="filters-block__title-icon"></span>
                    </button>
                    <div className="filters-block__content js-accordion-content">
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Лайф стайл <span className="gray">(32)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Спорт <span className="gray">(56)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Футбол <span className="gray">(87)</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="filters-block">
                    <button className="filters-block__title js-accordion-title">
                      <span className="title title--h6">Размер</span>
                      <span className="filters-block__title-icon"></span>
                    </button>
                    <div className="filters-block__content js-accordion-content">
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Лайф стайл <span className="gray">(32)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Спорт <span className="gray">(56)</span>
                          </span>
                        </label>
                      </div>
                      <div className="filters-block__item">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span>
                            Футбол <span className="gray">(87)</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="catalog-page__content">
            <section className="section">
              <div className="catalog">
                <div className="catalog__top">
                  <h3 className="title title--h3-sm">
                    Жінки <span className="gray">(32)</span>
                  </h3>
                  <div className="catalog__select">
                    <div className="select">
                      <select className="js-select">
                        <option value="placeholder">Сортировать</option>
                        <option value="1">Сортировать1</option>
                        <option value="3">Сортировать2</option>
                        <option value="2">Сортировать3</option>
                      </select>
                    </div>
                  </div>
                </div>

                {currentProducts.length > 0 && <ProductsList items={currentProducts} />}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Catalog

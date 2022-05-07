import classNames from 'classnames'
import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchProducts } from '../../store/slices/productsActions'
import { IProduct, ProductsResponceData } from '../../store/types/products'
import ProductCard from '../ProductCard/ProductCard'

import styles from './SectionTrands.module.scss'

interface SectionTrandsProps {
  products: ProductsResponceData
}

const PAGINATION_LIMIT: number = 8

const SectionTrands: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, products } = useAppSelector(state => state.products)

  const nextPage = useMemo(() => products?.metadata?.nextPage, [products])

  const [productsList, setProductsList] = useState<IProduct[]>([])

  useEffect(() => {
    if (products?.data) {
      setProductsList([...productsList, ...products.data])

      // productsList = [...productsList, ...products.data]
    }
  }, [products])

  useEffect(() => {
    // productsList = [...products.data]
    if (!products?.data) dispatch(fetchProducts({ limit: PAGINATION_LIMIT }))
  }, [])

  const onLoadMoreClick = () => {
    dispatch(fetchProducts({ page: nextPage, limit: PAGINATION_LIMIT }))
  }

  console.log('render', nextPage)

  return (
    <section className="section">
      <div className="container container--lg">
        <div className="section__title">
          <h3 className="title title--h3">Тренди</h3>
        </div>
        <div className="section__items">
          <div className="grid">
            {productsList.length > 0 ? (
              productsList.map(product => <ProductCard key={product._id} product={product} />)
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
        {nextPage && (
          <div className="section__btn">
            <button
              className={classNames('btn btn--transp-accent', styles.btn)}
              disabled={isLoading}
              onClick={onLoadMoreClick}
            >
              Завантажити ще
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionTrands

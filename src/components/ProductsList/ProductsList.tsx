import classNames from 'classnames'
import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchProducts } from '../../store/slices/productsActions'
import { IProduct } from '../../store/types/products'
import ProductCard from '../ProductCard/ProductCard'

import styles from './ProductsList.module.scss'

const PAGINATION_LIMIT: number = 8

const ProductsList: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, products } = useAppSelector(state => state.products)

  const [nextPage, setNextPage] = useState<number | null>(1)
  const [totlaPages, setTotalPages] = useState<number>(0)

  const productsList: IProduct[] = useMemo(() => {
    if (products?.data) {
      const start = nextPage ? (nextPage - 1) * PAGINATION_LIMIT : 0
      const end = start + PAGINATION_LIMIT

      return nextPage ? products.data.slice(0, end) : products.data
    }
    return []
  }, [products, nextPage])

  useEffect(() => {
    if (products?.data) {
      setTotalPages(Math.ceil(products.data.length / PAGINATION_LIMIT))
    }
  }, [products])

  useEffect(() => {
    // productsList = [...products.data]
    if (!products?.data) dispatch(fetchProducts())
  }, [])

  const onLoadMoreClick = () => {
    if (nextPage && nextPage < totlaPages - 1) {
      setNextPage(nextPage + 1)
    } else {
      setNextPage(null)
    }

    // dispatch(fetchProducts({ page: nextPage, limit: paginationLimit }))
  }
  return (
    <>
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
    </>
  )
}

export default ProductsList

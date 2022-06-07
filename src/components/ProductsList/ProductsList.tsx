import classNames from 'classnames'
import { FC, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchProducts } from '../../store/slices/productsActions'
import { IProduct } from '../../store/types/products'
import Loader from '../Loader/Loader'
import ProductCard from '../ProductCard/ProductCard'

import styles from './ProductsList.module.scss'

const PAGINATION_LIMIT: number = 8

interface ProductsListProps {
  items?: IProduct[]
}

const ProductsList: FC<ProductsListProps> = ({ items } = {}) => {
  const dispatch = useAppDispatch()
  const { isLoading, products } = useAppSelector(state => state.products)

  const [nextPage, setNextPage] = useState<number | null>(null)
  const [totlaPages, setTotalPages] = useState<number>(0)

  const productsList: IProduct[] = useMemo(() => {
    const list = items || products?.data

    if (list) {
      const start = nextPage ? (nextPage - 1) * PAGINATION_LIMIT : 0
      const end = start + PAGINATION_LIMIT

      return nextPage ? list.slice(0, end) : list
    }
    return []
  }, [products, nextPage, items])

  useEffect(() => {
    if (items) return
    if (products?.data) {
      const pagesLength = Math.ceil(products.data.length / PAGINATION_LIMIT)

      setTotalPages(pagesLength)
      if (pagesLength > 1) setNextPage(1)
    }
  }, [products])

  useEffect(() => {
    // productsList = [...products.data]
    if (!items && !products?.data) dispatch(fetchProducts())
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
          {productsList.length > 0 && !isLoading ? (
            productsList.map(product => <ProductCard key={product._id} product={product} />)
          ) : (
            <Loader />
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

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

  const [productsList, setProductsList] = useState<IProduct[]>([])

  const nextPage = useMemo(() => products?.metadata?.nextPage, [products])
  const paginationLimit = useMemo(() => {
    const totalProducts = products?.metadata?.totalProducts
    if (!totalProducts) return PAGINATION_LIMIT

    const productsLeft = totalProducts - productsList.length

    return productsLeft < PAGINATION_LIMIT ? productsLeft : PAGINATION_LIMIT
  }, [products])

  useEffect(() => {
    if (products?.data) {
      setProductsList([...productsList, ...products.data])

      // allProducts = [...allProducts, ...products.data]

      // console.log({ allProducts })
    }
  }, [products])

  useEffect(() => {
    // productsList = [...products.data]
    if (!products?.data) dispatch(fetchProducts({ page: 1, limit: PAGINATION_LIMIT }))
  }, [])

  const onLoadMoreClick = () => {
    console.log({ paginationLimit })

    dispatch(fetchProducts({ page: nextPage, limit: paginationLimit }))
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

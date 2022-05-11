import classNames from 'classnames'
import { ChangeEvent, FC, useMemo } from 'react'
import { filterCurrency } from '../../helpers/helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { favoritesSlice } from '../../store/slices/favorites'
import { IProduct } from '../../store/types/products'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.favorites)

  const isInFavoritesList: boolean = useMemo(() => {
    return !!products.find(p => p._id === product._id)
  }, [products])

  const onAddToFavoritesChange = (product: IProduct) => (e: ChangeEvent<HTMLInputElement>) => {
    const updatedFavorites = e.target.checked
      ? [...products, product]
      : products.filter(p => p._id !== product._id)

    dispatch(favoritesSlice.actions.setFavorites(updatedFavorites))
    localStorage.setItem('favorites', JSON.stringify(products))
  }

  return (
    <div className="_col _col-md-3 _col-sm-4 _col-xss-6">
      <div className="card">
        <div className="card__add">
          <label className="checkbox checkbox--icon">
            <input type="checkbox" checked={isInFavoritesList} onChange={onAddToFavoritesChange(product)} />
            <span>
              <svg
                viewBox="0 0 51.997 51.997"
                className="icon icon-like"
                width="1.000em"
                height="1em"
              >
                <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z" />
              </svg>
            </span>
          </label>
        </div>
        <a href="#" className="card__inner">
          <span className={classNames('card__img', styles.img)}>
            <img
              src={
                product.image ||
                'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
              }
              alt=""
            />
          </span>
          <span className="card__content">
            <span className="card__title">
              <span className="title title--h4">{product.title}</span>
            </span>
            {/* <span className="card__subttl">{product.}</span> */}
            <span className="card__price price">{filterCurrency(product.price)}</span>
          </span>
        </a>
      </div>
    </div>
  )
}

export default ProductCard

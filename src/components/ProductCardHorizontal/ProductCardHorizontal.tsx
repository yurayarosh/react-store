import { FC } from 'react'
import { filterCurrency } from '../../helpers/helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { setFavorites } from '../../store/slices/favoritesActions'
import { IProduct } from '../../store/types/products'

interface ProductCardHorizontalProps {
  product: IProduct
}

const ProductCardHorizontal: FC<ProductCardHorizontalProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.favorites)
  
  const onDeleteItemClick = (product: IProduct) => () => {
    const updatedFavorites = products.filter(p => p._id !== product._id)

    dispatch(setFavorites(updatedFavorites))
  }

  return (
    <div className="cart-item">
      <a href="#" className="cart-item__inner">
        <span className="cart-item__img">
          <img
            className=""
            alt=""
            src={
              product.image ||
              'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
            }
          />
        </span>
        <span className="cart-item__content">
          <span className="cart-item__title">
            <span className="title title--h5">{product.title}</span>
          </span>
        </span>
        <span className="cart-item__price">
          <span className="price price--md">{filterCurrency(product.price)}</span>
        </span>
      </a>
      <button className="cart-item__btn cart-item__del" type="button" onClick={onDeleteItemClick(product)}>
        Видалити
        <svg viewBox="0 0 47.971 47.971" className="icon icon-close" width="1.000em" height="1em">
          <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
        </svg>
      </button>
    </div>
  )
}

export default ProductCardHorizontal

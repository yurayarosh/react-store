import { FC } from 'react'
import { Link } from 'react-router-dom'
import { filterCurrency } from '../../helpers/helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { useProductsAmount } from '../../hooks/useProductsAmount'
import { RouteNames } from '../../router'
import { setCartPopup } from '../../store/slices/popupActions'
import ProductCardHorizontal from '../ProductCardHorizontal/ProductCardHorizontal'

const CartPopup: FC = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.cart)
  const amount: number = useProductsAmount(products)

  const onCloseButtonClick = () => {
    dispatch(setCartPopup(false))
  }

  return (
    <div className="tooltip">
      <div className="header-cart">
        <div className="header-cart__top">
          Кошик <span>({products.length})</span>
          <button
            className="header-cart__close close"
            type="button"
            aria-label="Close popup"
            onClick={onCloseButtonClick}
          />
        </div>
        <div className="header-cart__inner">
          <div className="header-cart__items">
            {products.map(product => (
              <ProductCardHorizontal key={product._id} product={product} type="cart-popup" />
            ))}
          </div>
          <div className="header-cart__amount">
            <div>Сума замовлення:</div>
            <div className="price price--inherit price--sm">{filterCurrency(amount)}</div>
          </div>
          <div className="header-cart__amount-pay">
            <div className="accent">До сплати:</div>
            <div className="price price--inherit price--medium">{filterCurrency(amount)}</div>
          </div>
          <div className="header-cart__btn">
            <a href="#" className="btn btn--full btn--square">
              Оформити замовлення
            </a>
          </div>
          <div className="header-cart__link">
            <Link to={RouteNames.CART} className="link-accent">
              Перейти до кошика
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPopup

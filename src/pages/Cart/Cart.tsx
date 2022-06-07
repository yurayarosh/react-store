import { FC } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import ProductCardHorizontal from '../../components/ProductCardHorizontal/ProductCardHorizontal'
import { filterCurrency } from '../../helpers/helpers'
import { useAppSelector } from '../../hooks/store'
import { useProductsAmount } from '../../hooks/useProductsAmount'
import { RouteNames } from '../../router'
import { ProductsLists } from '../../store/types/products'

const Cart: FC = () => {
  const { products } = useAppSelector(state => state.cart)
  const amount: number = useProductsAmount(products)

  return (
    <Layout>
      <section className="section pt-0">
        <div className="section__top">
          <div className="container">
            <h3 className="title title--h3-sm">Кошик ({products.length})</h3>
          </div>
        </div>
        <div className="container">
          <div className="cart layout">
            <div className="cart__items layout__left">
              {products.length > 0 &&
                products.map(product => (
                  <ProductCardHorizontal
                    key={product._id}
                    product={product}
                    category={ProductsLists.CART}
                  />
                ))}
            </div>
            <div className="cart__meta layout__right">
              <div className="cart-meta">
                <div className="cart-meta__title">
                  <div className="title title--h4">Деталі замовлення</div>
                </div>
                <div className="cart-meta__amount">
                  <div>сума замовлення:</div>
                  <div className="price price--inherit price--sm">{filterCurrency(amount)}</div>
                </div>
                <div className="cart-meta__amount-pay">
                  <div>До сплати:</div>
                  <div className="price price--inherit price--fz">{filterCurrency(amount)}</div>
                </div>
                <div className="cart-meta__btn">
                  <Link to={RouteNames.ORDER} className="btn btn--full btn--square">
                    Оформити замовлення
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Cart

import { FC } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import OrderForm from '../../components/OrderForm/OrderForm'
import ProductCardHorizontal from '../../components/ProductCardHorizontal/ProductCardHorizontal'
import { filterCurrency } from '../../helpers/helpers'
import { useAppSelector } from '../../hooks/store'
import { useProductsAmount } from '../../hooks/useProductsAmount'
import { RouteNames } from '../../router'
import { ProductsLists } from '../../store/types/products'

const Order: FC = () => {
  const { products } = useAppSelector(state => state.cart)
  const amount: number = useProductsAmount(products)

  return (
    <Layout>
      <section className="section section--lg">
        <div className="container">
          <div className="order layout">
            <div className="layout__left">
              <div className="section__title">
                <h3 className="title title--h3-sm">Спосіб доставки</h3>
              </div>
              <div className="form form--order">
                <OrderForm />
              </div>
            </div>
            <div className="layout__right">
              <div className="cart cart--sm">
                <div className="cart__top">
                  <h4 className="title title--h4">Ваше замовлення</h4>
                  <Link to={RouteNames.CART} className="gray">
                    Редагувати
                  </Link>
                </div>
                <div className="cart__items">
                  {products.length > 0 &&
                    products.map(product => (
                      <ProductCardHorizontal
                        key={product._id}
                        product={product}
                        category={ProductsLists.CART}
                      />
                    ))}
                </div>
                <div className="cart__meta">
                  <div className="cart-meta cart-meta--sm">
                    <div className="cart-meta__amount">
                      <div>сума замовлення:</div>
                      <div className="price price--inherit price--sm">{filterCurrency(amount)}</div>
                    </div>
                    <div className="cart-meta__amount-pay">
                      <div>До сплати:</div>
                      <div className="price price--inherit price--fz">{filterCurrency(amount)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Order

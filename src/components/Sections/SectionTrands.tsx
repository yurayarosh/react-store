import classNames from 'classnames'
import { FC } from 'react'
import { useAppSelector } from '../../hooks/store'
import { IProduct } from '../../store/types/products'
import ProductCard from '../ProductCard/ProductCard'

interface SectionTrandsProps {
  products: IProduct[] | null
}

const SectionTrands: FC<SectionTrandsProps> = ({ products }) => {
  return (
    <section className="section">
      <div className="container container--lg">
        <div className="section__title">
          <h3 className="title title--h3">Тренди</h3>
        </div>
        <div className="section__items">
          <div className="grid">
            {products ? (
              products.map(product => <ProductCard key={product.id} product={product} />)
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
        <div className="section__btn">
          <button className="btn btn--transp-accent">Завантажити ще</button>
        </div>
      </div>
    </section>
  )
}

export default SectionTrands

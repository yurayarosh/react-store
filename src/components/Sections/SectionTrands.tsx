import { FC } from 'react'
import ProductsList from '../ProductsList/ProductsList'

const SectionTrands: FC = () => {
  return (
    <section className="section">
      <div className="container container--lg">
        <div className="section__title">
          <h3 className="title title--h3">Тренди</h3>
        </div>
        <ProductsList />
      </div>
    </section>
  )
}

export default SectionTrands

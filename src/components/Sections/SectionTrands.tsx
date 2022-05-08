import { FC } from 'react'
import ProductsList from '../ProductsList/ProductsList'

// interface SectionTrandsProps {
//   products: ProductsResponceData
// }

const SectionTrands: FC = () => {
  console.log('render section')

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

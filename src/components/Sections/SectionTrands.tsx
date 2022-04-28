import { FC } from 'react'
import { useAppSelector } from '../../hooks/store'

const SectionTrands: FC = () => {
  const state = useAppSelector(state => state.products)

  console.log({ state })
  

  return (
    <section className="section">
      <div className="container container--lg">
        <div className="section__title">
          <h3 className="title title--h3">Тренди</h3>
        </div>
        <div className="section__items">
          <div className="grid">
            <div className="_col _col-md-3 _col-sm-4 _col-xss-6">
              <div className="card">
                <div className="card__add">
                  <label className="checkbox checkbox--icon">
                    <input type="checkbox" />
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
                  <span className="card__img js-lazy" data-background-image="./img/card.jpg"></span>
                  <span className="card__content">
                    <span className="card__title">
                      <span className="title title--h4">Куртка зимова</span>
                    </span>
                    <span className="card__subttl">Колір: білий</span>
                    <span className="card__price price">$ 4890,00</span>
                  </span>
                </a>
              </div>
            </div>
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

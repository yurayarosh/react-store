import { FC } from 'react'

import heroImage from '../../assets/img/home/juDeTVeVCewTm3kAKNiQme-1920-80.jpg'

const SectionHero: FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container container--lg">
        <div className="hero__inner">
          <div className="hero__block title-block">
            <div className="hero__upttl title-block__upttl">коллекція 2019</div>
            <div className="hero__title title-block__title">
              <h1 className="title title--h1">А який твій стиль?</h1>
            </div>
            <div className="hero__btns title-block__btns">
              <div className="hero__btn">
                <a href="#" className="btn">
                  Детальніше
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHero

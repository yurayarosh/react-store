import { FC } from 'react'
import Input from '../Form/Input'

const OrderForm: FC = () => {
  return (
    <form>
      <div className="form__blocks">
        <div className="form-block">
          <div className="form-block__title">Ваш населений пункт</div>
          <div className="form-block__content">
            <div className="grid">
              <div className="_col _col-xs-6">
                {/* <div className="input input--sm">
                  <button className="input__btn js-input-btn">
                    <svg
                      viewBox="0 0 47.971 47.971"
                      className="icon icon-close"
                      width="1.000em"
                      height="1em"
                    >
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                    </svg>
                  </button>
                  <input className="js-input" type="text" value="Київ" />
                </div> */}
                <Input className="input--sm" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="form-block__title">Як отримаєте?</div>
          <div className="form-block__content">
            <div className="grid">
              <div className="_col">
                <label className="radio">
                  <input type="radio" name="delivery" checked />
                  <span>Самовивіз</span>
                </label>
              </div>
              <div className="_col">
                <label className="radio">
                  <input type="radio" name="delivery" />
                  <span>Кур’єр</span>
                </label>
              </div>
              <div className="_col">
                <label className="radio">
                  <input type="radio" name="delivery" />
                  <span>Забрати на пошті</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="form-block__title">Контактні данні</div>
          <div className="form-block__content">
            <div className="grid">
              <div className="_col _col-xs-6">
                <div className="input input--sm">
                  <button className="input__btn js-input-btn">
                    <svg
                      viewBox="0 0 47.971 47.971"
                      className="icon icon-close"
                      width="1.000em"
                      height="1em"
                    >
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                    </svg>
                  </button>
                  <input className="js-input" type="text" value="Василь" />
                </div>
              </div>
              <div className="_col _col-xs-6">
                <div className="input input--sm">
                  <button className="input__btn js-input-btn">
                    <svg
                      viewBox="0 0 47.971 47.971"
                      className="icon icon-close"
                      width="1.000em"
                      height="1em"
                    >
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                    </svg>
                  </button>
                  <input className="js-input" type="text" value="Андрійович" />
                </div>
              </div>
              <div className="_col">
                <div className="input input--sm">
                  <button className="input__btn js-input-btn">
                    <svg
                      viewBox="0 0 47.971 47.971"
                      className="icon icon-close"
                      width="1.000em"
                      height="1em"
                    >
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                    </svg>
                  </button>
                  <input className="js-input" type="text" placeholder="Прізвище" />
                </div>
              </div>
              <div className="_col">
                <div className="input input--sm">
                  <button className="input__btn js-input-btn">
                    <svg
                      viewBox="0 0 47.971 47.971"
                      className="icon icon-close"
                      width="1.000em"
                      height="1em"
                    >
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                    </svg>
                  </button>
                  <input className="js-input" type="tel" placeholder="Телефон" />
                </div>
              </div>
              <div className="_col">
                <div className="input input--sm">
                  <button className="input__btn js-input-btn">
                    <svg
                      viewBox="0 0 47.971 47.971"
                      className="icon icon-close"
                      width="1.000em"
                      height="1em"
                    >
                      <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                    </svg>
                  </button>
                  <input className="js-input" type="email" placeholder="Ел. адреса" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-block">
          <div className="form-block__title">Спосіб оплати</div>
          <div className="form-block__content">
            <div className="grid">
              <div className="_col">
                <label className="radio">
                  <input type="radio" name="pay" />
                  <span>Оплата картою</span>
                </label>
              </div>
              <div className="_col">
                <label className="radio">
                  <input type="radio" name="pay" checked />
                  <span>Кур’єр</span>
                </label>
              </div>
              <div className="_col">
                <label className="radio">
                  <input type="radio" name="pay" />
                  <span>Забрати на пошті</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form__field">
        <a href="#" className="btn btn--full btn--square btn--md">
          Придбати
        </a>
      </div>
    </form>
  )
}

export default OrderForm

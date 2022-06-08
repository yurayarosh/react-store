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
                <Input className="input--sm" type="text" value="Київ" />
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
                <Input className="input--sm" type="text" placeholder="Ім'я" value="Василь" />
              </div>
              <div className="_col _col-xs-6">
                <Input
                  className="input--sm"
                  type="text"
                  placeholder="По батькові"
                  value="Андрійович"
                />
              </div>
              <div className="_col">
                <Input className="input--sm" type="text" placeholder="Прізвище" />
              </div>
              <div className="_col">
                <Input className="input--sm" type="tel" placeholder="Телефон" />
              </div>
              <div className="_col">
                <Input className="input--sm" type="email" placeholder="Ел. адреса" />
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

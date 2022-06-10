import { useFormik } from 'formik'
import * as yup from 'yup'
import { FC } from 'react'
import Input from '../Form/Input'

const OrderForm: FC = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: 'foobar',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
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
                <Input
                  className="input--sm"
                  type="email"
                  placeholder="Ел. адреса"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email}
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
        <button className="btn btn--full btn--square btn--md" type="submit">
          Придбати
        </button>
      </div>
    </form>
  )
}

export default OrderForm

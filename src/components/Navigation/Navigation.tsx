import classNames from 'classnames'
import { FC, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { fetchCategories } from '../../store/slices/productsActions'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector(state => state.products)
  const list = useMemo(() => {
    return categories?.data.map(category => category)
  }, [categories])

  useEffect(() => {
    // console.log({ list })
    dispatch(fetchCategories())
  }, [])

  return (
    <nav className={classNames('nav', styles.nav)}>
      <ul>
        {list &&
          list?.map(({ name, _id }) => (
            <li key={_id}>
              <a href="#">{name}</a>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation

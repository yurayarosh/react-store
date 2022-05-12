import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { useAppSelector } from '../../hooks/store'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
  const { categories } = useAppSelector(state => state.products)
  const list = useMemo(() => {
    return categories?.data.map(category => category)
  }, [categories])

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

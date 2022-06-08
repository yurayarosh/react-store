import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store'
import { RouteNames } from '../../router'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
  const { categories } = useAppSelector(state => state.categories)
  const list = useMemo(() => {
    return categories?.data.map(category => category)
  }, [categories])

  return (
    <nav className={classNames('nav', styles.nav)}>
      <ul>
        {list &&
          list?.map(({ name, _id, slug }) => (
            <li key={_id}>
              <Link to={`${RouteNames.CATALOG}/${slug}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation

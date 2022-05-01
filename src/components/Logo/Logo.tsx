import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RouteNames } from '../../router'

interface LogoProps {
  className?: string | object
}

const Logo: FC<LogoProps> = ({ className }) => {
  const location = useLocation()
  const isHome = useMemo(() => location.pathname === RouteNames.HOME, [])

  if (isHome) return <div className={classNames('logo', className)}>store logo</div>

  return (
    <Link to={RouteNames.HOME} className={classNames('logo', className)}>
      store logo
    </Link>
  )
}

export default Logo

import { FC, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RouteNames } from '../../router'

const Logo: FC = () => {
  const location = useLocation()
  const isHome = useMemo(() => location.pathname === RouteNames.HOME, [])

  if (isHome) return <div className="logo">store logo</div>

  return (
    <Link to={RouteNames.HOME} className="logo">
      store logo
    </Link>
  )
}

export default Logo

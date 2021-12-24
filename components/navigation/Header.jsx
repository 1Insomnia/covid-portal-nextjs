import PropTypes from 'prop-types'
// Components
import NavLink from './NavLink'

const Header = ({ path }) => {
  return (
    <header className="py-4">
      <NavLink href="/" path={path}>
        <h1 className="text-4xl font-bold tracking-tighter text-center text-purple">
          Covid Portal
        </h1>
      </NavLink>
    </header>
  )
}

Header.propTypes = {
  path: PropTypes.string
}

export default Header

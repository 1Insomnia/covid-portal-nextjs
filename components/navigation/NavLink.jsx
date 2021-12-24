import PropTypes from 'prop-types'
import NextLink from 'next/link'

const NavLink = ({ href, path, children, className }) => {
  const active = href === path

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

NavLink.propTypes = {
  href: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.node
}

export default NavLink

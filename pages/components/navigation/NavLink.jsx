import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NavLink = ({ href, path, children }) => {
  const active = href === path

  return (
    <NextLink href={href}>
      <Link fontWeight={active ? 'bold' : 'normal'}>{children}</Link>
    </NextLink>
  )
}

NavLink.propTypes = {
  href: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.node
}

export default NavLink

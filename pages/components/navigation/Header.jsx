import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'
// Components
import NavLink from './NavLink'

const Header = ({ path }) => {
  return (
    <Box as="header" p={4}>
      <Flex justify="space-between" align="center">
        <NavLink href="/" path={path}>
          Covid Portal
        </NavLink>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  path: PropTypes.string
}

export default Header

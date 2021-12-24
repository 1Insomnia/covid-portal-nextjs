import PropTypes from 'prop-types'
import NextLink from 'next/link'

const BaseLink = ({ href, text }) => {
  return (
    <NextLink href={href}>
      <a className="underline text-purple hover:opacity-80">{text}</a>
    </NextLink>
  )
}

BaseLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
}

export default BaseLink

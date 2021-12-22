import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: props => ({
    body: {
      bg: '#202023'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: '#ff63c3',
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'Inter'"
}

const colors = {
  grassTeal: '#88ccca',
  darker: '#111'
}

const theme = extendTheme({ styles, components, fonts, colors })
export default theme

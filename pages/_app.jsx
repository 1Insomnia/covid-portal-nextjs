import 'inter-ui/inter.css'
import '@fontsource/m-plus-rounded-1c'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
// Components
import Main from './components/layouts/Main'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.key} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp

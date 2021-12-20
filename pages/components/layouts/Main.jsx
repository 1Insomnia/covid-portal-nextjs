import { Box, Container } from '@chakra-ui/react'
// Components
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'

const Main = ({ children, router }) => {
  return (
    <Container maxW="container.lg">
      <Header path={router.asPath} />
      <Box as="main" minH="100vh" router={router} py={12}>
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

export default Main

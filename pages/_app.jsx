import 'inter-ui/inter.css'
import '../styles/globals.css'
// Components
import Main from '../components/layouts/Main'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Main router={router}>
      <Component {...pageProps} key={router.key} />
    </Main>
  )
}

export default MyApp

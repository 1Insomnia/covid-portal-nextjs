// Components
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'

const Main = ({ children, router }) => {
  return (
    <div className="bg-blue-dark text-white container">
      <Header path={router.asPath} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Main

import Navbar from './Navbar'
import Footer from './Footer'

/**
 * The Layout component is used to wrap all the other components. The children property is all the things inside the Layout component.
 *
 * @param {children} children - All the things inside the Layout component.
 * @returns {HTMLElement} Layout.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative pb-44">
      <div className='mx-2 my-0 md:mx-10 lg:mx-20'>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

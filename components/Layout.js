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
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

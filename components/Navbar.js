import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logotype from '../public/images/logotype-final.png'

/**
 * Navbar component.
 *
 * @returns {HTMLElement} Navbar.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="mx-auto mb-2 py-10 flex justify-end items-end text-lg font-sans lg:mb-16">
      <Link href="/" className="mr-auto">

        <Image src={logotype}
          alt="allel-logotype"
          priority="true"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 33vw, 25vw"
          style={{
            width: '100px',
            height: 'auto'
          }}
          className="logotype"
           />
      </Link>
      <div className={`nav-links ${isOpen ? 'nav-links-mobile' : ''}`}>
        <Link href="/" className="nav-item" onClick={closeMenu}>
          hem
        </Link>
        <Link href="/tjanster" className="nav-item" onClick={closeMenu}>
          tjänster
        </Link>
        <Link href="/kalkylator" className="nav-item" onClick={closeMenu}>
          kalkylator
        </Link>
        <Link href="/projekt" className="nav-item" onClick={closeMenu}>
          projekt
        </Link>
        <Link href="/om-oss" className="nav-item" onClick={closeMenu}>
          om oss
        </Link>
        <Link href="/kontakt" className="nav-item" onClick={closeMenu}>
          kontakt
        </Link>
      </div>
      {/* Hamburger button, if the menu is not open */}
      {!isOpen && (
        <button className="hamburger-button" onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="15" rx="8" fill="#333333"></rect>
            <rect y="30" width="100" height="15" rx="8" fill="#333333"></rect>
            <rect y="60" width="100" height="15" rx="8" fill="#333333"></rect>
          </svg>
        </button>
      )}
      {/* Close button, if the menu is open */}
      {isOpen && (
        <button className="close-button" onClick={closeMenu}>
          <svg viewBox="0 0 40 20" width="50" height="50">
            <line x1="10" y1="10" x2="30" y2="30" stroke="#f2f2f2" strokeWidth="3" />
            <line x1="30" y1="10" x2="10" y2="30" stroke="#f2f2f2" strokeWidth="3" />
          </svg>
        </button>
      )}
    </nav>
  )
}

export default Navbar

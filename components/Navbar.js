import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logotype from '../public/logotype-final.png'

/**
 * Navbar component.
 *
 * @returns {HTMLElement} Navbar.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="mx-auto mb-44 px-0 py-10 flex justify-end items-end text-lg font-sans">
      <Link href="/" className="mr-auto">
        <img src={logotype}
          alt="allel-logotype"
          priority="true"
          sizes="80vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className="logotype"
           />
      </Link>
      <div className={`nav-links ${isOpen ? 'nav-links-mobile' : ''}`}>
        <Link href="/" className="nav-item" onClick={closeMenu}>
          STARTSIDA
        </Link>
        <Link href="/tjanster" className="nav-item" onClick={closeMenu}>
          TJÄNSTER
        </Link>
        <Link href="/kalkylator" className="nav-item" onClick={closeMenu}>
          KALKYLATOR
        </Link>
        <Link href="/projekt" className="nav-item" onClick={closeMenu}>
          PROJEKT
        </Link>
        <Link href="/om-oss" className="nav-item" onClick={closeMenu}>
          OM OSS
        </Link>
        <Link href="/kontakt" className="nav-item" onClick={closeMenu}>
          KONTAKT
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
          <svg viewBox="0 0 40 40" width="50" height="50">
            <line x1="10" y1="10" x2="30" y2="30" stroke="#f2f2f2" strokeWidth="3" />
            <line x1="30" y1="10" x2="10" y2="30" stroke="#f2f2f2" strokeWidth="3" />
          </svg>
        </button>
      )}
    </nav>
  )
}

export default Navbar

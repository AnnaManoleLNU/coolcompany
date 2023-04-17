import Link from 'next/link'
import Image from 'next/image'

/**
 * Navbar component.
 *
 * @returns {HTMLElement} Navbar.
 */
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src='/./logo.png' width={50} height={50} />
      </div>
      <Link href='/'>STARTSIDA</Link>
      <Link href='/tjanster'>TJÄNSTER</Link>
      <Link href='/projekt'>PROJEKT</Link>
      <Link href='/om-oss'>OM OSS</Link>
      <Link href='/kontakt'>KONTAKT</Link>
    </nav>
  )
}

export default Navbar

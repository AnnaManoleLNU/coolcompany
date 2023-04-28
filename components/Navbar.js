import Link from 'next/link'
import Image from 'next/image'

/**
 * Navbar component.
 *
 * @returns {HTMLElement} Navbar.
 */
const Navbar = () => {
  return (
    <nav className="mx-auto mb-44 px-0 py-10 flex justify-end items-end text-lg font-sans">
      <Link href='/' className="mr-auto">
        <Image src='/logotype-final.png' alt='allel-logotype' width={100} height={100} priority={true} />
      </Link>
        <Link href='/' className="nav-item">STARTSIDA</Link>
        <Link href='/tjanster' className="nav-item">TJÄNSTER</Link>
        {/* <Link href='/kalkylator' className="nav-item">KALKYLATOR</Link> */}
        <Link href='/projekt' className="nav-item">PROJEKT</Link>
        <Link href='/om-oss' className="nav-item">OM OSS</Link>
        <Link href='/kontakt' className="nav-item">KONTAKT</Link>
    </nav>
  )
}

export default Navbar

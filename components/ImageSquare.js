import Image from 'next/image'
import Link from 'next/link'

/**
 * Square image component.
 *
 * @param {src} src - Image source.
 * @param {alt} alt - Image alt text.
 * @returns {HTMLElement} ImageSquare.
 */
const ImageSquare = ({ href, src, alt, caption }) => (
  <div className="relative w-24 h-24 md:w-44 md:h-44 lg:md:w-96 lg:h-96">
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover object-center w-full h-full'
      />
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <p className="text-black text-center text-mediumH">{caption}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-light opacity-50 mix-blend-normal"></div>
    </Link>

  </div>
)

export default ImageSquare
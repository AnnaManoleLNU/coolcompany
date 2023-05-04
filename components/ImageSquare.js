// import Image from 'next/image'
import Link from 'next/link'
import Image from 'next/image'

/**
 * Square image component.
 *
 * @param {*} src - Image source.
 * @param {*} alt - Image alt text.
 * @param {*} caption - Image caption.
 * @param {*} key - Image key.
 * @returns {HTMLElement} ImageSquare.
 */
const ImageSquare = ({ href, src, alt, caption, key }) => (
  <Link href={href} >
      <div className="relative w-24 h-24 md:w-44 md:h-44 lg:md:w-96 lg:h-96">
      <Image
        src={src}
        alt={alt}
        key={key}
        fill="true"
        placeholder="blur"
        blurDataURL={src}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className='object-cover object-center w-full h-full'
      />
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <p className="text-black text-center text-mediumH">{caption}</p>
      </div>
      <div className="absolute inset-0 z-0 bg-light opacity-50 mix-blend-normal"></div>
  </div>
    </Link>

)

export default ImageSquare

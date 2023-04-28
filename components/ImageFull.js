import Image from 'next/image'

/**
 * Full width image component.
 *
 * @param {src} src - Image source.
 * @param {alt} alt - Image alt text.
 * @returns {HTMLElement} ImageFull.
 */
const ImageFull = ({ src, alt }) => (
  <div className="relative w-full h-64 md:h-96">
    <Image
      src={src}
      alt={alt}
      fill
      className='object-cover object-center w-full h-full'
    />
  </div>
)

export default ImageFull

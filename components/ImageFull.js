/**
 * Full width image component.
 *
 * @param {string} src - Image source.
 * @returns {HTMLElement} ImageFull.
 */
const ImageFull = ({ src, alt }) => (
  <div className=" relative w-full h-64 md:h-96">
   {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      fill="true"
      className='object-cover object-center w-full h-full'
    />
  </div>
)

export default ImageFull

/**
 * Full width image component.
 *
 * @param {string} src - Image source.
 * @returns {HTMLElement} ImageFull.
 */
const ImageFull = ({ src, alt }) => (
<div className="md:w-5/5 w-full">
  <div className="relative w-full h-64 md:h-64">
   {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      fill="true"
      className='object-cover object-center w-full h-full'
    />
  </div>
</div>
)

export default ImageFull

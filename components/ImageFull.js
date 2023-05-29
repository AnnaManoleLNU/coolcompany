import Image from 'next/image'

/**
 * Full width image component.
 *
 * @param {string} src - Image source.
 * @returns {HTMLElement} ImageFull.
 */
const ImageFull = ({ src, alt }) => {
  // use a custom loader to add the width and quality params to the image URL
  const imagePreloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="md:w-5/5 w-full">
      <div className="relative w-full h-64 md:h-64">
        <Image
          src={src}
          loader={imagePreloader}
          alt={alt}
          fill="true"
          className='object-cover object-center w-full h-full'
        />
      </div>
    </div>
  )
}

export default ImageFull

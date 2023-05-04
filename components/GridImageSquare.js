import ImageSquare from './ImageSquare'

/**
 * A grid of images.
 *
 * @param {*} images - The images from Sanity.
 * @returns {HTMLElement} - The grid of images.
 */
const GridImageSquare = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-8">
      {images.map((image) => (
        <div key={image.src}>
          <ImageSquare href={image.href} src={image.src} alt={image.alt} caption={image.caption} />
        </div>
      ))}
    </div>
  )
}

export default GridImageSquare

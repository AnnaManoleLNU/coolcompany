// GridImageSquare.jsx
import ImageSquare from './ImageSquare'

/**
 * A grid of images.
 *
 * @param {*} images - The images from Sanity.
 * @returns {HTMLElement} - The grid of images.
 */
const GridImageSquare = ({ images }) => {
  const big = 'md:col-span-2 md:row-span-2 xl:col-span-2 xl:row-span-2'
  const wide = 'md:col-span-2 xl:col-span-2'

  // choose spans by count
  const spanClasses =
    images.length === 5
      // [0]=big, others auto (1x1) to fill right half as 2x2
      ? [big, '', '', '', '']
      : images.length === 4
      // [0]=big, [1]=wide, [2]=small, [3]=small
      ? [big, wide, '', '']
      // fallback: make first big, rest auto
      : [big, ...Array(Math.max(images.length - 1, 0)).fill('')]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8 grid-flow-dense auto-rows-[180px] md:auto-rows-[220px] xl:auto-rows-[260px]">
      {images.map((image, idx) => (
        <div key={image.src} className={spanClasses[idx] || ''}>
          <ImageSquare
            href={image.href}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            forGrid={true}
          />
        </div>
      ))}
    </div>
  )
}

export default GridImageSquare

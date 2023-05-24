import Link from 'next/link'

/**
 * Square image component.
 *
 * @param {*} src - Image source.
 * @returns {HTMLElement} ImageSquare.
 */
const ImageSquare = ({ href, src, alt, caption, key }) => (
  <Link href={href} >
    <div className="flex justify-center ">
      <div className="relative w-96 h-96 md:w-64 md:h-64 lg:md:w-96 lg:h-96 hover:transform hover:scale-105 hover:duration-500">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        key={key}
        fill="true"
        placeholder="blur"
        // blurDataURL={src}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 33vw, 25vw"
        className='object-cover object-center w-full h-full filter grayscale'
      />
      <p className="absolute inset-0 z-10 flex justify-center items-center text-black text-center text-mediumH md:text-smallH
       hover:border-2 hover:border-accent
      ">
        {caption}
      </p>
    <div className="absolute inset-0 z-0 bg-light opacity-50 mix-blend-normal"></div>
  </div>
  </div>
    </Link>

)

export default ImageSquare

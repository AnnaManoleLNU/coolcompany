import Link from 'next/link'
import Image from 'next/image'

const ImageSquare = ({ href, src, alt, caption, key, forGrid = true }) => {
  const containerClass = forGrid
    ? 'relative w-96 h-96 md:w-64 md:h-64 lg:md:w-96 lg:h-96 hover:transform hover:scale-105 hover:duration-500'
    : 'relative w-full h-96 md:w-full md:h-64 lg:md:w-96 lg:h-96'

  const imageClass = forGrid
    ? 'object-cover object-center w-full h-full filter grayscale'
    : 'object-cover object-center w-full h-full'

  const paragraphClass = forGrid
    ? 'absolute inset-0 z-10 flex justify-center items-center text-black text-center text-mediumH md:text-smallH hover:border-2 hover:border-accent'
    : 'absolute inset-0 z-10 flex justify-center items-center text-black text-center text-mediumH md:text-smallH'

  // use a custom loader to add the width and quality params to the image URL
  const imagePreloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const templateImage = (
    <div className={containerClass}>
      <Image
        src={src}
        loader={imagePreloader}
        alt={alt}
        key={key}
        fill="true"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 33vw, 25vw"
        className={imageClass}
      />
      <p className={paragraphClass}>
        {caption}
      </p>
      <div className="absolute inset-0 z-0 bg-light opacity-50 mix-blend-normal"></div>
    </div>
  )

  if (!forGrid) {
    return (
      <div>
        {templateImage}
      </div>
    )
  }

  return (
    <Link href={href}>
      <div className="flex justify-center">
        {templateImage}
      </div>
    </Link>
  )
}

export default ImageSquare

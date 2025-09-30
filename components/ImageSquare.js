import Link from "next/link";
import Image from "next/image";

const ImageSquare = ({ href, src, alt, caption, key, forGrid = true }) => {
  const containerClass = forGrid
    ? "relative w-full h-full hover:transform hover:scale-105 hover:duration-500"
    : "relative w-full h-64 md:h-64";

  const imageClass = forGrid
    ? "object-cover object-center w-full h-full filter opacity-50 hover:opacity-100"
    : "object-cover object-center w-full h-full";

  const paragraphClass = forGrid
    ? "absolute inset-0 z-10 flex justify-center items-center text-black text-center text-mediumH md:text-smallH hover:border-2 hover:border-accent"
    : "absolute inset-0 z-10 flex justify-center items-center text-black text-center text-mediumH md:text-smallH";

  const imagePreloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const templateImage = (
    <div className={containerClass}>
      <Image
        src={src}
        loader={imagePreloader}
        alt={alt}
        key={key}
        width={500}
        height={500}
        className={imageClass}
      />
      <p className={paragraphClass}>{caption}</p>
      <div className="absolute inset-0 z-0 bg-light opacity-50 mix-blend-normal"></div>
    </div>
  );

  if (!forGrid) {
    return <div>{templateImage}</div>;
  }

  return (
    <Link href={href} className="block h-full w-full">
      <div className="flex justify-center h-full">{templateImage}</div>
    </Link>
  );
};

export default ImageSquare;

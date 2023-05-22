import Button from './Button'
import { useRouter } from 'next/router'

/**
 * The hero, banner element.
 *
 * @param {string} heading - The heading of the hero.
 *
 * @returns {HTMLElement} - The hero.
 */
const Hero = ({ heading, message }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/projekt')
  }

  return (
    <div className='flex items-center justify-center text-center mb-[600px] mt-64'>
      <div>
        {/* By default the text is smallH, but it will be mediumH on medium screens and largeH on large screens */}
        <h1 className='text-smallH font-sans lg:text-mediumH xl:text-largeH'>{heading}</h1>
        <p className='text-smallP font-mono lg:text-mediumP m-2'>{message}</p>

        <Button buttonText={'se projekt'} onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Hero

import { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import Button from './Button'
import { useRouter } from 'next/router'
import ButtonFocus from './ButtonFocus'

/**
 * The hero, banner element.
 *
 * @param {string} heading - The heading of the hero.
 *
 * @returns {HTMLElement} - The hero.
 */
const Hero = ({ heading, message }) => {
  const [showLetters, setShowLetters] = useState(false)

  useEffect(() => {
    setShowLetters(true)
  }, [])

  const transitions = useTransition(showLetters ? [...heading] : [], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: { duration: 1000 },
    trail: 50
  })

  const handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  const router = useRouter()
  const allProjects = () => {
    router.push('/projekt')
  }

  return (
    <div className='flex items-center justify-center text-center mb-[200px] mt-64'>
      <div>
        {/* By default the text is smallH, but it will be mediumH on medium screens and largeH on large screens */}
        <h1 className='text-smallH font-sans lg:text-mediumH xl:text-largeH'>
          {transitions((props, item, _, index) => (
            <animated.span
              key={index}
              style={props}
              className='text-black'
            >
              {item}
            </animated.span>
          ))}
        </h1>
        <h2 className='text-smallP font-mono lg:text-mediumP m-2'>{message}</h2>
        <div className='flex justify-center text-center items-center gap-4'>
          <Button buttonText={'nya projekt'} onClick={handleClick} />
          <ButtonFocus buttonText={'alla projekt'} onClick={allProjects} />
        </div>
      </div>
    </div>
  )
}

export default Hero

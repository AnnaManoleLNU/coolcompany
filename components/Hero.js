import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'
import ButtonFocus from './ButtonFocus'
import { useRouter } from 'next/router'

/**
 * The hero, banner element.
 *
 * @param {string} heading - The heading of the hero.
 *
 * @returns {HTMLElement} - The hero.
 */
const Hero = ({ heading, message, allProjectsClick }) => {
  const [showLetters, setShowLetters] = useState(false)

  useEffect(() => {
    setShowLetters(true)
  }, [])

  const router = useRouter()

  const handleClickNewProjects = () => {
    allProjectsClick()
  }

  const allProjects = () => {
    router.push('/projekt')
  }

  return (
    <div className='flex items-center justify-center text-center mb-[200px] mt-[250px]'>
      <div>
        <h1 className='text-mediumH font-sans xl:text-largeH'>
          <AnimatePresence>
            {showLetters &&
              [...heading].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05, // trail effect
                  }}
                  className='text-black inline-block'
                >
                  {char}
                </motion.span>
              ))}
          </AnimatePresence>
        </h1>
        <h2 className='text-smallP font-mono lg:text-mediumP m-2'>{message}</h2>
        <div className='flex justify-center text-center items-center gap-4'>
          <Button buttonText={'nya projekt'} onClick={handleClickNewProjects} />
          <ButtonFocus buttonText={'alla projekt'} onClick={allProjects} />
        </div>
      </div>
    </div>
  )
}

export default Hero

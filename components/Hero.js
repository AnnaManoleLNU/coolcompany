import Button from './Button'

import { PortableText } from '@portabletext/react'

/**
 * Hero component.
 *
 * @returns {HTMLElement} - Hero.
 */
const Hero = ({heading, message}) => {
  return ( 
    <div className='flex items-center justify-center text-center mb-[600px] mt-64'>
      <div> 
        {/* By default the text is smallH, but it will be mediumH on medium screens and largeH on large screens */}
        <h1 className='text-smallH font-sans lg:text-mediumH xl:text-largeH'>{heading}</h1>
        <p className='text-smallP font-mono lg:text-mediumP m-2'>{message}</p>
        
        <Button buttonText={"se mer"} />
      </div>
    </div>
   )
}
 
export default Hero

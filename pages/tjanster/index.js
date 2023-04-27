import GridImageSquare from "@/components/GridImageSquare"

const images = [
  { href: '/tjanster/projektering', src: '/light.jpg', alt: 'projektering', caption: 'Projektering' },
  { href: '/tjanster/kontrolluppdrag', src: '/light2.jpg', alt: 'kontrolluppdrag', caption: 'Kontrolluppdrag' },
  { href: '/tjanster/besiktning', src: '/light3.jpg', alt: 'besiktning', caption: 'Besiktning' },
  { href: '/tjanster/revisionsbesiktning', src: '/building.jpg', alt: 'revisionsbesiktning', caption: 'Revisionsbesiktning' },
]

/**
 * Services page.
 *
 * @returns {HTMLElement} - Services page.
 */
const Services = () => {
  return (<div>
    <GridImageSquare images={images} />
  </div>
  )
}

export default Services

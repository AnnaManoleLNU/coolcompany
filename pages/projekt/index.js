import GridImageSquare from "@/components/GridImageSquare"

const images = [
  { href: '/projekt/1', src: '/light.jpg', alt: 'projekt1', caption: 'Projekt 1'},
  { href: '/projekt/2', src: '/light2.jpg', alt: 'projekt2', caption: 'Projekt 2' },
  { href: '/projekt/3', src: '/light3.jpg', alt: 'projekt3', caption: 'Projekt 3' },
  { href: '/projekt/4', src: '/building.jpg', alt: 'projekt4', caption: 'Projekt 4' },
]

/**
 * Project page.
 *
 * @returns {HTMLElement} - Project page.
 */
const Project = () => {
  return (
    <div>
      <GridImageSquare images={images} />
    </div>
  )
}

export default Project

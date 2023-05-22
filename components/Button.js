/**
 * Button component.
 *
 * @param {string} buttonText - The text on the button.
 * @returns {HTMLElement} Button.
 */
const Button = ({ buttonText, onClick }) => {
  return (
    <button
    className="border-2 border-accent px-4 py-2 w-32 h-10 my-8 font-bold text-black hover:border-black hover:text-accent" onClick={onClick}
    >{buttonText}</button>
  )
}

export default Button

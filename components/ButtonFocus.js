/**
 * Button component.
 *
 * @param {string} buttonText - The text on the button.
 * @returns {HTMLElement} Button.
 */
const ButtonFocus = ({ buttonText, onClick }) => {
  return (
    <button
    className=" px-4 py-2 w-32 h-10 my-8 font-bold bg-accent text-light" onClick={onClick}
    >{buttonText}</button>
  )
}

export default ButtonFocus

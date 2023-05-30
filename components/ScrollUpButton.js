const ScrollUpButton = () => {
  const onScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    // align this at the bottom right of the screen
    <div className="relative flex justify-end py-8">
    <button onClick={onScrollUp}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="bi bi-arrow-up" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" className="fill-accent" />
         </svg>
    </button>
    </div>
  )
}

export default ScrollUpButton

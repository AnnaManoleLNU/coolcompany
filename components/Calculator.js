import Button from './Button'
import { useState } from 'react'

/**
 * A function to calculate a service and set the price as the result.
 *
 * @param {Event} e - the event.
 * @param {*} setPrice - the price to be set.
 */
function calculateService (e, setPrice) {
  e.preventDefault()

  const form = e.target

  const data = {
    service: form.service.value,
    amount1: form.amount1.value,
    amount2: form.amount2.value
  }

  let res = 0
  if (data.service === 'tjänst1') {
    res = parseInt(data.amount1) * parseInt(data.amount2)
  }

  if (data.service === 'tjänst2') {
    res = parseInt(data.amount1) + parseInt(data.amount2)
  }

  if (data.service === 'tjänst3') {
    res = parseInt(data.amount1) - parseInt(data.amount2)
  }

  setPrice(res)
}

/**
 * The calculator.
 *
 * @returns {HTMLElement} - The calculator.
 */
const Calculator = () => {
  const [price, setPrice] = useState(0)

  return (
    <div className="calculator">
      <form 
      className='calculator' 
      onSubmit={(e) => calculateService(e, setPrice)}>
        {/* Select the service */}
        <label htmlFor="service" className='text-mediumH' >Välj tjänst</label>
        <select name="service" id="service" className='input'>
          <option value="tjänst1">Multiply</option>
          <option value="tjänst2" >Add</option>
          <option value="tjänst3" >Substract</option>
        </select>
        {/* Input values of that option */}
        <label htmlFor="amount1" className='text-mediumH'>Första siffran</label>
        <input type="number" name="amount1" id="amount1" className='input text-center' />

        {/* Calculate the price */}
        <label htmlFor="amount2" className='text-mediumH'>Andra siffran</label>
        <input type="number" name="amount2" id="amount2" className='input text-center' />

        {/* Submit the form */}
        <Button buttonText={'beräkna'} />
      </form>
      {/* Show a div with price */}
      <div>
        <p className='text-mediumH'>Totalt </p>
        <p className='text-largeH text-accent'>{price}</p>
      </div>
    </div>
  )
}

export default Calculator

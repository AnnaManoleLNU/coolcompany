import Button from "./Button"
import { useState } from 'react'

function calculateService(e, setPrice) {
  e.preventDefault()

  const form = e.target

  const data = {
    service: form.service.value,
    amount1: form.amount1.value,
    amount2: form.amount2.value,
  }

  let res = 0
  if (data.service === 'tjänst1') {
    res = parseInt(data.amount1) * parseInt(data.amount2)
  }

  if (data.service === 'tjänst2') {
    res = parseInt(data.amount1) + parseInt(data.amount2)
  }

  if (data.service === 'tjänst3') {
    res = parseInt(data.amount1) + parseInt(data.amount2) + 100
  }

  setPrice(res)
}

const Calculator = () => {
  const [price, setPrice] = useState(0)

  return (
    <div>
      <h1>Tjänste-kalkylator</h1>
      <form onSubmit={(e) => calculateService(e, setPrice)}>
        {/* Select the service */}
        <label htmlFor="service">Välj tjänst</label>
        <select name="service" id="service">
          <option value="tjänst1">Tjänst 1</option>
          <option value="tjänst2">Tjänst 2</option>
          <option value="tjänst3">Tjänst 3</option>
        </select>
        {/* Input values of that option */}
        <label htmlFor="amount1">Första siffran</label>
        <input type="number" name="amount1" id="amount1" />

        {/* Calculate the price */}
        <label htmlFor="amount2">Andra siffran</label>
        <input type="number" name="amount2" id="amount2" />

        {/* Submit the form */}
        <Button buttonText={"beräkna"} />

      </form>

      {/* Show a div with price */}
      <div>
        <p>Pris: {price}</p>
      </div>
    </div>
  );
}

export default Calculator;
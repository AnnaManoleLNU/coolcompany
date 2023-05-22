import { useState } from 'react'
import ParentForm from './calculator/ParentForm'
import { calculateService } from './calculator/formulas/Formulas'
import PriceInfo from './calculator/PriceInfo'

const Calculator = () => {
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleSelectedOption = (optionName, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [optionName]: option
    }))
  }

  const [price, setPrice] = useState(null)

  const handleCalculate = async () => {
    // e.preventDefault();
    const thePrice = await calculateService(selectedOptions)
    setPrice(thePrice)
  }

  const startAgain = () => {
    setSelectedOptions({})
    setPrice(null)
  }

  return (
    <div>
      {/* if the price is not null show the p */}
      {price &&
        <PriceInfo
        options={selectedOptions}
        price={price}
        />
      }
        <ParentForm
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
          handleCalculate={handleCalculate}
          startAgain={startAgain}
        />
    </div>
  )
}

export default Calculator

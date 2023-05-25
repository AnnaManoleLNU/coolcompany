import { useState } from 'react'
import ParentForm from './calculator/ParentForm'
import { calculateService } from './calculator/formulas/Formulas'
import PriceInfo from './calculator/PriceInfo'
import StartOverButton from './calculator/StartOverButton'

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
    <div className="flex flex-col justify-center items-center mt-36">
      {/* if the price is not null show the p */}
      {price &&
      <div className="flex flex-col justify-center items-center">
        <PriceInfo
        options={selectedOptions}
        price={price}
        />
        <StartOverButton startAgain={startAgain} />
      </div>
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

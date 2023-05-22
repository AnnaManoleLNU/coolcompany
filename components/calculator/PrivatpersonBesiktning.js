import { useState } from 'react'
import DropDownMenu from './DropDownMenu'

const PrivatpersonBesiktning = ({ selectedOptions, handleSelectedOption, handleCalculate }) => {
  const [currentStep, setCurrentStep] = useState(1)

  // The number of meetings to be used in step 4. An array of numbers from 1 to 20.
  const numberOfMeetings = Array.from({ length: 20 }, (_, i) => i + 1)

  const raiseStep = (option) => {
    setCurrentStep(currentStep + 1)
  }

  const renderDropDownMenu = () => {
    switch (currentStep) {
      case 1:
        return (
          <DropDownMenu
            title="Antal rum? (ROK)"
            options={['1-5', '6-12', '13-20']}
            selectedOption={selectedOptions['Antal rum? (ROK)']}
            onSelect={(option) => {
              handleSelectedOption('Antal rum? (ROK)', option)
              raiseStep(option)
            }}
          />
        )
      case 2:
        return (
          <DropDownMenu
            title="Finns det dokumentation att granska?"
            options={['Ja', 'Nej']}
            selectedOption={selectedOptions['Finns det dokumentation att granska?']}
            onSelect={(option) => {
              handleSelectedOption('Finns det dokumentation att granska?', option)
              raiseStep(option)
            }}
          />
        )
      case 3:
        return (
          <DropDownMenu
            title="Avstånd i mil från Stockholm"
            options={[
              '0-20',
              '21-30',
              '31-40',
              '41-50',
              '51-60',
              '61-70',
              '71-80',
              '81-90',
              '91-100'
            ]}
            selectedOption={selectedOptions['Avstånd i mil från Stockholm']}
            onSelect={(option) => {
              handleSelectedOption('Avstånd i mil från Stockholm', option)
              raiseStep(option)
            }}
          />
        )
      case 4:
        return (
          <DropDownMenu
            title="Antal besiktningstillfällen"
            options={numberOfMeetings}
            selectedOption={selectedOptions['Antal besiktningstillfällen']}
            onSelect={(option) => {
              handleSelectedOption('Antal besiktningstillfällen', option)
              raiseStep(option)
            }}
          />
        )
      case 5:
        handleCalculate()
        break
      default:
        return null
    }
  }

  return <div>{renderDropDownMenu()}</div>
}

export default PrivatpersonBesiktning

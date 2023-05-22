import { useState } from 'react'
import DropDownMenu from './DropDownMenu'

const PrivatpersonProjektering = ({ selectedOptions, handleSelectedOption, handleCalculate }) => {
  const [currentStep, setCurrentStep] = useState(1)

  // The number of rooms to be used in step 3. An array of numbers from 1 to 20.
  const numberOfRooms = Array.from({ length: 20 }, (_, i) => i + 1)

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
            title="Typ av fastighet"
            options={['Villa', 'Lägenhet']}
            selectedOption={selectedOptions['Typ av fastighet']}
            onSelect={(option) => {
              handleSelectedOption('Typ av fastighet', option)
              raiseStep(option)
            }}
          />
        )
      case 2:
        return (
          <DropDownMenu
            title="Typ av handling"
            options={['Rambeskrivning', 'Förfrågningsunderlag', 'Bygghandling']}
            selectedOption={selectedOptions['Typ av handling']}
            onSelect={(option) => {
              handleSelectedOption('Typ av handling', option)
              raiseStep(option)
            }}
          />
        )
      case 3:
        return (
          <DropDownMenu
            title="Antal rum"
            options={numberOfRooms}
            selectedOption={selectedOptions['Antal rum']}
            onSelect={(option) => {
              handleSelectedOption('Antal rum', option)
              raiseStep(option)
            }}
          />
        )
      case 4:
        return (
          <DropDownMenu
            title="Antal möten"
            options={numberOfMeetings}
            selectedOption={selectedOptions['Antal möten']}
            onSelect={(option) => {
              handleSelectedOption('Antal möten', option)
              raiseStep(option)
            }}
          />
        )
      case 5:
        return (
          <DropDownMenu
            title="Nivå"
            options={['Enkel', 'Bas', 'Exklusiv', 'Exklusiv Plus']}
            selectedOption={selectedOptions['Nivå']}
            onSelect={(option) => {
              handleSelectedOption('Nivå', option)
              raiseStep(option)
            }}
          />
        )
      case 6:
        handleCalculate()
        break
      default:
        return null
    }
  }

  return <div>{renderDropDownMenu()}</div>
}

export default PrivatpersonProjektering

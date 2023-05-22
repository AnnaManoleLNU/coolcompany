import DropDownMenu from './DropDownMenu'
import PrivatpersonBesiktning from './PrivatpersonBesiktning'
import PrivatpersonProjektering from './PrivatpersonProjektering'

const ParentPrivatperson = ({ selectedOptions, handleSelectedOption, handleCalculate }) => {
  const selectedOption = selectedOptions['Typ av uppdrag']

  return (
    <div>
      {selectedOption === undefined && (
        <DropDownMenu
          title="Typ av uppdrag"
          options={['Projektering', 'Besiktning']}
          onSelect={(option) => handleSelectedOption('Typ av uppdrag', option)}
        />
      )}

      {selectedOption === 'Projektering' && (
        <PrivatpersonProjektering
          currentStep={1}
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
          handleCalculate={handleCalculate}
        />
      )}

      {selectedOption === 'Besiktning' && (
        <PrivatpersonBesiktning
          currentStep={1}
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
          handleCalculate={handleCalculate}
        />
      )}
    </div>
  )
}

export default ParentPrivatperson

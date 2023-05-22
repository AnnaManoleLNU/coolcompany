import DropDownMenu from './DropDownMenu'
import ForetagProjektering from './ForetagProjektering'

const ParentForetag = ({ selectedOptions, handleSelectedOption, handleCalculate }) => {
  const selectedOption = selectedOptions['Typ av uppdrag']

  return (
    <div>
      {selectedOption === undefined && (
        <DropDownMenu
          title="Typ av uppdrag"
          options={['Projektering']}
          onSelect={(option) => handleSelectedOption('Typ av uppdrag', option)}
        />
      )}

      {selectedOption === 'Projektering' && (
        <ForetagProjektering
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
          handleCalculate={handleCalculate}
        />
      )}
    </div>
  )
}

export default ParentForetag

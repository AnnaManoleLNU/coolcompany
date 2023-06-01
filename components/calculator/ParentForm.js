import DropDownMenu from './DropDownMenu'
import ParentPrivatperson from './ParentPrivatperson'
import ParentForetag from './ParentForetag'
// import StartOverButton from './StartOverButton'

const ParentForm = ({ selectedOptions, handleSelectedOption, handleCalculate, startAgain }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {selectedOptions['Företag eller privat person'] === undefined && (
        <DropDownMenu
          title="Företag eller privat person"
          options={['Företag', 'Privat person']}
          onSelect={(option) => handleSelectedOption('Företag eller privat person', option)}
        />
      )}

      {selectedOptions['Företag eller privat person'] === 'Privat person' && (
        <div>
          <ParentPrivatperson
            selectedOptions={selectedOptions}
            handleSelectedOption={handleSelectedOption}
            handleCalculate={handleCalculate}
          />
        </div>
      )}

      {selectedOptions['Företag eller privat person'] === 'Företag' && (
        <div>
          <ParentForetag
            selectedOptions={selectedOptions}
            handleSelectedOption={handleSelectedOption}
            handleCalculate={handleCalculate}
          />
        </div>
      )}
    </div>
  )
}

export default ParentForm

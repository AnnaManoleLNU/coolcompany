import DropDownMenu from './DropDownMenu'
import ParentPrivatperson from './ParentPrivatperson'
import ParentForetag from './ParentForetag'
import StartOverButton from './StartOverButton'

const ParentForm = ({ selectedOptions, handleSelectedOption, handleCalculate, startAgain }) => {
  return (
    <div id='parent'>
      {selectedOptions['Jag är'] === undefined && (
        <DropDownMenu
          title="Jag är"
          options={['Företag', 'Privat person']}
          onSelect={(option) => handleSelectedOption('Jag är', option)}
        />
      )}

      {selectedOptions['Jag är'] === 'Privat person' && (
        <div>
          <ParentPrivatperson
            selectedOptions={selectedOptions}
            handleSelectedOption={handleSelectedOption}
            handleCalculate={handleCalculate}
          />
          <StartOverButton startAgain={startAgain} />
        </div>
      )}

      {selectedOptions['Jag är'] === 'Företag' && (
        <div>
          <ParentForetag
            selectedOptions={selectedOptions}
            handleSelectedOption={handleSelectedOption}
            handleCalculate={handleCalculate}
          />
          <StartOverButton startAgain={startAgain} />
        </div>
      )}
    </div>
  )
}

export default ParentForm

import InfoText from './InfoText'

const DropDownMenu = ({ title, options, selectedOption, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(option)
  }

  const template = (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor={title} className="text-mediumH pb-12">
        {title}
      </label>
      <select
        name={title}
        id={title}
        value={selectedOption || ''} // Handle null value by setting it to an empty string
        onChange={(e) => handleOptionSelect(e.target.value)}
        className="input-dropdown"
      >
        <option value="" disabled>
          --Välj--
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )

  if (title === 'Omfattning övriga utrymmen') {
    return (
      <>
        {template}
        <InfoText text= {[
          'Liten = 1-2 rum.',
          'Mellan = 3-5 rum.',
          'Stor = 6-8 rum.',
          'Mycket stor = 9+ rum.'
        ]}/>
      </>
    )
  }

  if (title === 'Nivå') {
    return (
      <>
        {template}
        <InfoText text= {[
          'Enkel = 1-2 möten.',
          'Bas = 3-5 möten.',
          'Exklusiv = 6-8 möten.',
          'Exklusiv Plus = 9+ möten.'
        ]}/>
      </>
    )
  }

  if (title === 'Antal möten') {
    return (
      <>
        {template}
        <InfoText text= {[
          'En möte tar ungefär en timme. Här kan ljusberäkningar, beskrivningar eller kontroll av elektromagnetiskt strålning ingå.'
        ]}/>
      </>
    )
  }

  if (title === 'Antal besiktningstillfällen') {
    return (
      <>
        {template}
        <InfoText text= {[
          'En besiktning tar några timmar en timme. Vid en besiktning sammanställer vi ett protokoll där vi förmedlar eventuella brister.'
        ]}/>
      </>
    )
  }

  return (
    <>
      {template}
    </>

  )
}

export default DropDownMenu

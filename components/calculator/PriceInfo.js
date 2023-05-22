const PriceInfo = ({ options, price }) => {
  return (
    <div>
      <h2 className="text-mediumH">Dina val</h2>
      {/* for each option add to the paragraph */}
      <div className="border-b">

      {Object.keys(options).map((optionName) => (
        <p key={optionName} >
          {/* if the option name is Jag är don't show the option name, only the value */}
          {/* for the other options show option name and value */}
          {optionName === 'Jag är' ? options[optionName] : `${optionName}: ${options[optionName]}`}

        </p>
      ))}
      </div>

      <h2 className="text-mediumH text-accent">
        {price} kr
      </h2>
      <p>Notering: priserna är uppskattningar.</p>
    </div >
  )
}

export default PriceInfo

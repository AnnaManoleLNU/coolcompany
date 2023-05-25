const DropDownMenu = ({ title, options, selectedOption, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(option)
  }

  return (

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
}

export default DropDownMenu

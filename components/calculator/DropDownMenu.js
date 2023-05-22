const DropDownMenu = ({ title, options, selectedOption, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(option)
  }

  return (

    <div className="w-5/5 md:w-3/5 flex flex-col">
      <label htmlFor={title} className="text-mediumH">
        {title}
      </label>
      <select
        name={title}
        id={title}
        value={selectedOption || ''} // Handle null value by setting it to an empty string
        onChange={(e) => handleOptionSelect(e.target.value)}
        className="input"
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

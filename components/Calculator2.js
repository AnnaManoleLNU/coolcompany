import { useState } from 'react';
import ParentForm from "./calculator/ParentForm";
import { calculateService } from "./calculator/formulas/Formulas";

const Calculator2 = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectedOption = (optionName, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [optionName]: option,
    }));
  }

  const [price, setPrice] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();
    const thePrice = await calculateService(e, selectedOptions);
    setPrice(thePrice);
  }

  return (
    <div>
      <form
        onSubmit={handleCalculate}
      >
        <ParentForm
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <button type="submit">Calculate</button>
      </form>
      {/* if the price is not null show the p */}
      {price && <p>Total: {price}</p>}
    </div>
  );
};

export default Calculator2;
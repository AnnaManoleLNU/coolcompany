import React from "react";
import DropDownMenu from "./DropDownMenu";
import ForetagProjektering from "./ForetagProjektering";

const ParentForetag = ({ selectedOptions, handleSelectedOption }) => {
  const selectedOption = selectedOptions["Typ av uppdrag"];

  return (
    <div>
      {selectedOption === undefined && (
        <DropDownMenu
          title="Typ av uppdrag"
          options={["Projektering"]}
          onSelect={(option) => handleSelectedOption("Typ av uppdrag", option)}
        />
      )}
      
      {selectedOption === "Projektering" && (
        <ForetagProjektering
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      )}
    </div>
  );
};

export default ParentForetag;
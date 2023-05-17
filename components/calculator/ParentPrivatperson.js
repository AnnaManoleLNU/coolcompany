import React from "react";
import DropDownMenu from "./DropDownMenu";
import PrivatpersonBesiktning from "./PrivatpersonBesiktning";
import PrivatpersonProjektering from "./PrivatpersonProjektering";

const ParentPrivatperson = ({ selectedOptions, handleSelectedOption }) => {
  const selectedOption = selectedOptions["Typ av uppdrag"];

  return (
    <div>
      {selectedOption === undefined && (
        <DropDownMenu
          title="Typ av uppdrag"
          options={["Projektering", "Besiktning"]}
          onSelect={(option) => handleSelectedOption("Typ av uppdrag", option)}
        />
      )}

      {selectedOption === "Projektering" && (
        <PrivatpersonProjektering
          currentStep={1}
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      )}

      {selectedOption === "Besiktning" && (
        <PrivatpersonBesiktning
          currentStep={1}
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      )}
    </div>
  );
};

export default ParentPrivatperson;
import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const ForetagProjektering = ({ selectedOptions, handleSelectedOption }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const raiseStep = (option) => {
    setCurrentStep(currentStep + 1);
  };

  const renderDropDownMenu = () => {
    switch (currentStep) {
      case 1:
        return (
          <DropDownMenu
            title="Typ av fastighet"
            options={["Lägenheter"]}
            selectedOption={selectedOptions["Typ av fastighet"]}
            onSelect={(option) => {
              handleSelectedOption("Typ av fastighet", option)
              raiseStep(option)
            }}
          />
        );
      case 2:
        return (
          <DropDownMenu
            title="Typ av handling"
            options={["Rambeskrivning"]}
            selectedOption={selectedOptions["Typ av handling"]}
            onSelect={(option) => {
              handleSelectedOption("Typ av handling", option)
              raiseStep(option)
            }}
          />
        );
      case 3:
        return (
          <DropDownMenu
            title="Antal lägenheter"
            options={[
              "1-10",
              "11-20",
              "21-30",
              "31-50",
              "51-100",
              "101-200",
              "201-300",
              "301-400",
              "401-500",
            ]}
            selectedOption={selectedOptions["Antal lägenheter"]}
            onSelect={(option) => {
              handleSelectedOption("Antal lägenheter", option)
              raiseStep(option)
            }}
          />
        );
      case 4:
        return (
          <DropDownMenu
            title="Omfattning övriga utrymmen"
            options={["Liten", "Mellan", "Stor", "Mycket stor"]}
            selectedOption={selectedOptions["Omfattning övriga utrymmen"]}
            onSelect={(option) => {
              handleSelectedOption("Omfattning övriga utrymmen", option)
              raiseStep(option)
            }}
          />
        );
      case 5:
        return (
          <DropDownMenu
            title="Nivå"
            options={["Enkel", "Bas", "Exklusiv", "Exklusiv Plus"]}
            selectedOption={selectedOptions["Nivå"]}
            onSelect={(option) => {
              handleSelectedOption("Nivå", option)
              raiseStep(option)
            }}
          />
        );
      case 6:
        const numberOfMeetings = Array.from({ length: 30 }, (_, i) => i + 1);
        return (
          <DropDownMenu
            title="Antal möten"
            options={numberOfMeetings}
            selectedOption={selectedOptions["Antal möten"]}
            onSelect={(option) => {
              handleSelectedOption("Antal möten", option)
              raiseStep(option)
            }}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderDropDownMenu()}</div>;
};

export default ForetagProjektering;
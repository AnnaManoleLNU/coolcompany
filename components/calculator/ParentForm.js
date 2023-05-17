import DropDownMenu from "./DropDownMenu";
import ParentPrivatperson from "./ParentPrivatperson";
import ParentForetag from "./ParentForetag";

const ParentForm = ({selectedOptions, handleSelectedOption}) => {
  return (
    <div>
      {selectedOptions["Jag är"] === undefined && (
        <DropDownMenu
          title="Jag är"
          options={["Företag", "Privat person"]}
          onSelect={(option) => handleSelectedOption("Jag är", option)}
        />
      )}

      {selectedOptions["Jag är"] === "Privat person" && (
        <ParentPrivatperson
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      )}

      {selectedOptions["Jag är"] === "Företag" && (
        <ParentForetag
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      )}
    </div>
  );
};

export default ParentForm;
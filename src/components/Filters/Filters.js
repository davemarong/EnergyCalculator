// IMPORT

// REACT
import { useRef, useState } from "react";

// COMPONENTS

// UTILS

// DATA
import { Filter_items } from "./Filters_items";
import { allFormulaData } from "../../Data/formulaData/CombinedData";

// FUNCTIONAL COMPONENTS
export const Filters = ({
  setFormulaFunctions,
  setFormulaValues,
  setInputdata,
  selectedIndex,
  setSelectedIndex,
}) => {
  // STATE

  // VARIABLES
  const buttonLabels = ["Hastighet", "Diameter", "Trykkfall"];

  // FUNCTIONS
  const handleSwitchFilter = (value) => {
    const { formulaValue, formulaFunctions, inputdata } =
      allFormulaData[buttonLabels[value]];
    setFormulaFunctions(formulaFunctions);
    setFormulaValues(formulaValue);
    setInputdata(inputdata);
    setSelectedIndex(value);
  };

  // RETURN
  return (
    <>
      <ButtonGroup
        buttons={buttonLabels}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          handleSwitchFilter(value);
        }}
      />
    </>
  );
};

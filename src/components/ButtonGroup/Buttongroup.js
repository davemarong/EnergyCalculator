// IMPORT

// REACT
import React, { useState } from "react";

// DATA
import { buttongroup_items } from "./Buttongroup_items";
import { allFormulaData } from "../../Data/formulaData/CombinedData";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// FUNCTIONAL COMPONENTS
const BtnGroup = ({
  setFormulaFunctions,
  setFormulaValues,
  setInputdata,
  selectedIndex,
  setSelectedIndex,
  setButtonGroup,
  setToolTypes,
  buttonGroup,
}) => {
  // STATE
  // console.log(buttonGroup);

  // FUNCTIONS
  const handleSwitchFilter = (value, id) => {
    const {
      formulaValue,
      formulaFunctions,
      inputdata,
      buttonGroup,
      toolTypes,
    } = allFormulaData[value];
    setFormulaFunctions(formulaFunctions);
    setFormulaValues(formulaValue);
    setInputdata(inputdata);
    setButtonGroup(buttonGroup);
    setToolTypes(toolTypes);
    setSelectedIndex(id);
  };
  console.log(selectedIndex);
  // RETURN
  return (
    <>
      {buttonGroup.map((button) => {
        return (
          <Button
            variant={selectedIndex === button.id ? "contained" : "outlined"}
            key={button.label}
            onClick={() => {
              handleSwitchFilter(button.label, button.id);
            }}
          >
            <Typography>{button.label}</Typography>
          </Button>
        );
      })}
    </>
  );
};

export default BtnGroup;

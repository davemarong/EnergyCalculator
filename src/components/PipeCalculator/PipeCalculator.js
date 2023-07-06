// IMPORT

// REACT
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// COMPONENTS
import { Slider } from "../../components/Slider/Slider";
import { SliderContainer } from "../../components/Slider/SliderContainer";
import { Filters } from "../../components/Filters/Filters";
import { DisplayResult } from "../../components/DisplayResult/DisplayResult";
import BtnGroup from "../../components/ButtonGroup/Buttongroup";

// UTILS
import { findDefaultActiveButton } from "@/utils/utils";
// DATA

// OTHER
import Typography from "@mui/material/Typography";
import { Input } from "../Input/Input";
import { InputContainer } from "../Input/InputContainer";
import { allFormulaData } from "../../Data/formulaData/CombinedData";

// FUNCTIONAL COMPONENTS
export const PipeCalculator = ({ formulaData, category }) => {
  // STATE
  // User input values
  const [formulaValues, setFormulaValues] = useState(formulaData.formulaValue);

  // The formula functions that calculate the result values
  const [formulaFunctions, setFormulaFunctions] = useState(
    formulaData.formulaFunctions
  );

  // The data for the sliders/inputfields the user interacts with
  const [inputdata, setInputdata] = useState(formulaData.inputdata);

  // The buttonGroup labels
  const [buttonGroup, setButtonGroup] = useState(formulaData.buttonGroup);

  // The data for ToolTypes (PipeTypes = Stål, Kobber, Mepla...)
  const [toolTypes, setToolTypes] = useState(formulaData.toolTypes);

  // The toggleButton/nav that is active."Trykkfall/Hastighet/Diameter"
  const defaultSelectedIndex = findDefaultActiveButton(
    category,
    formulaData.buttonGroup
  );
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  // The last values the user has put in the input fields.
  const [lastInputValues, setLastInputValues] = useState({});

  const router = useRouter();
  const title = router.query.type;
  // PROPS OBJECT
  const ButtongroupProps = {
    setFormulaFunctions: setFormulaFunctions,
    setFormulaValues: setFormulaValues,
    setInputdata: setInputdata,
    inputdata: inputdata,
    setToolTypes: setToolTypes,
    selectedIndex: selectedIndex,
    setSelectedIndex: setSelectedIndex,
    buttonGroup: buttonGroup,
    setButtonGroup: setButtonGroup,
  };

  const SliderContainerProps = {
    inputdata: inputdata,
    setFormulaValues: setFormulaValues,
    selectedIndex: selectedIndex,
    lastInputValues: lastInputValues,
    setLastInputValues: setLastInputValues,
  };

  // RETURN
  return (
    <>
      <Typography>{title}</Typography>
      <DisplayResult
        formulaValues={formulaValues}
        formulaFunctions={formulaFunctions}
        toolTypes={toolTypes}
      />
      <BtnGroup {...ButtongroupProps} />
      <InputContainer {...SliderContainerProps} />
    </>
  );
};

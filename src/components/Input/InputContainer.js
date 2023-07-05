// IMPORT

// REACT

// REACT NATIVE

// REACT_NATIVE_ELEMENTS

// COMPONENTS
import { Input } from "./Input";

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const InputContainer = ({
  inputdata,
  setFormulaValues,
  selectedIndex,
  lastInputValues,
  setLastInputValues,
}) => {
  // STATE

  // FUNCTIONS

  // RETURN
  return (
    <>
      {inputdata.map((slider) => {
        return (
          <Input
            key={slider.label}
            inputdata={slider}
            setFormulaValues={setFormulaValues}
            selectedIndex={selectedIndex}
            lastInputValues={lastInputValues}
            setLastInputValues={setLastInputValues}
          />
        );
      })}
    </>
  );
};

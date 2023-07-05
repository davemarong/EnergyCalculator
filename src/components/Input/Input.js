// IMPORT

// REACT
import { useState, useEffect, useRef } from "react";

// COMPONENTS

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const Input = ({
  inputdata,
  setFormulaValues,
  selectedIndex,
  lastInputValues,
  setLastInputValues,
}) => {
  // PROPS
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    inputdata;

  // STATE
  const [value, setValue] = useState(defaultValue);

  // FUNCTIONS
  const handleUpdateFormulaValue = (value) => {
    const updatedValue = turnStringToNumber(value);
    setFormulaValues((prev) => {
      return {
        ...prev,
        [stateName]: { ...prev[stateName], value: updatedValue },
      };
    });
  };
  const turnStringToNumber = (value) => {
    if (value.toString().includes(",")) {
      return Number(value.toString().replaceAll(",", "."));
    }
    return value;
  };

  // Find if a lastInputValue exists. If it does, set the current inputvalue to that
  const findLastInputValue = () => {
    let updatedValue = value;
    Object.entries(lastInputValues).forEach((value) => {
      if (value[0] === stateName) {
        setValue(value[1]);
        updatedValue = value[1];
      }
    });
    return updatedValue;
  };
  // Update the lastInputValue list every time a new value is set
  const handleUpdateLastValue = (value, valueLabel) => {
    setLastInputValues((prev) => {
      return {
        ...prev,
        [valueLabel]: value,
      };
    });
  };

  // UseEffect
  useEffect(() => {
    const updatedValue = findLastInputValue();
    handleUpdateFormulaValue(updatedValue);
  }, [selectedIndex]);

  // RETURN
  return (
    <>
      <div>
        <div>
          <div>{label}</div>
          <div>
            <input
              value={value.toString()}
              onChange={(e) => {
                e.persist();
                handleUpdateFormulaValue(e.target.value);
                handleUpdateLastValue(e.target.value, stateName);
                setValue(e.target.value);
              }}
            />
            <div>{metric}</div>
          </div>
        </div>
      </div>
    </>
  );
};

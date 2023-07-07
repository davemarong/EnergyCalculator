// IMPORT

// REACT
import { useState, useEffect, useRef } from "react";

// COMPONENTS

// UTILS
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
  const {
    marks,
    step,
    min,
    max,
    label,
    metric,
    defaultValue,
    stateName,
    fullMetric,
  } = inputdata;
  const scale = {
    Watt: [
      { label: "W", multiplier: 1 },
      { label: "KW", multiplier: 1000 },
    ],
    Liter: [
      { label: "l/s", multiplier: 1 },
      { label: "l/m", multiplier: 60 },
      { label: "l/h", multiplier: 3600 },
      { label: "m3/h", multiplier: 3.6 },
      { label: "m3/s", multiplier: 0.001 },
    ],
    Pa: [
      { label: "kPa", multiplier: 0.001 },
      { label: "bar", multiplier: 0.00001 },
      { label: "Mvs", multiplier: 0.0101974 },
    ],
    Mm: [{ label: "mm", multiplier: 1 }],
  };
  // STATE
  const [value, setValue] = useState(defaultValue);
  const [transformedValue, setTransformedValue] = useState(
    scale[fullMetric][0]
  );

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

  const handleChange = (e) => {
    const scaleItem = scale[fullMetric].filter(
      (item) => item.multiplier === e.target.value
    )[0];
    setTransformedValue(scaleItem);
    console.log(scaleItem);
    console.log(transformedValue);
  };
  // RETURN
  return (
    <>
      <Typography>{label}</Typography>
      <TextField
        type="number"
        // value={(value * transformedValue.multiplier).toString()}
        value={value}
        onChange={(e) => {
          handleUpdateFormulaValue(e.target.value);
          handleUpdateLastValue(e.target.value, stateName);
          setValue(e.target.value);
        }}
      />
      <Typography>{metric}</Typography>
      {/* <Select
        value={transformedValue.label}
        label="Tool Type"
        onChange={handleChange}
      >
        {scale.Liter.map((item) => {
          return <MenuItem value={item.multiplier}>{item.label}</MenuItem>;
        })}
      </Select> */}
    </>
  );
};

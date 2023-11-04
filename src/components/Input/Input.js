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
  // const scale = {
  //   Watt: [
  //     { label: "W", multiplier: 1 },
  //     { label: "KW", multiplier: 1000 },
  //   ],
  //   Liter: [
  //     { label: "l/s", multiplier: 1 },
  //     { label: "l/m", multiplier: 60 },
  //     { label: "l/h", multiplier: 3600 },
  //     { label: "m3/h", multiplier: 3.6 },
  //     { label: "m3/s", multiplier: 0.001 },
  //   ],
  //   Pa: [
  //     { label: "kPa", multiplier: 0.001 },
  //     { label: "bar", multiplier: 0.00001 },
  //     { label: "Mvs", multiplier: 0.0101974 },
  //   ],
  //   Mm: [{ label: "mm", multiplier: 1 }],
  // };
  const scale = [
    { label: "W", multiplier: 1 },
    { label: "KW", multiplier: 1000 },
    { label: "l/s", multiplier: 1 },
    { label: "l/m", multiplier: 60 },
    { label: "l/h", multiplier: 3600 },
    { label: "m3/h", multiplier: 3.6 },
    { label: "m3/s", multiplier: 0.001 },
    { label: "kPa", multiplier: 0.001 },
    { label: "bar", multiplier: 0.00001 },
    { label: "Mvs", multiplier: 0.0101974 },
    { label: "mm", multiplier: 1 },
  ];
  // STATE
  const [value, setValue] = useState(defaultValue);
  // const [transformedValue, setTransformedValue] = useState(
  //   scale[fullMetric][0]
  // );
  // console.log(unit);
  const unit = scale.filter(({ label }) => label === metric)[0];
  const [selectedMetricLabel, setSelectedMetricLabel] = useState(unit.label);
  const [selectedMetric, setSelectedMetric] = useState(unit);
  console.log(selectedMetric);

  // FUNCTIONS
  const handleUpdateFormulaValue = (value) => {
    console.log({ value });
    const updatedValue = turnStringToNumber(value);
    const unit = scale.filter(({ label }) => label === selectedMetric.label)[0];
    setFormulaValues((prev) => {
      return {
        ...prev,
        [stateName]: {
          ...prev[stateName],
          value: updatedValue * unit?.multiplier,
        },
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
  }, [selectedIndex, selectedMetric]);

  const handleChange = (e) => {
    console.log(e.target.value);
    // setSelectedMetricLabel()
    setSelectedMetric(e.target.value);
  };
  // RETURN
  return (
    <>
      <Typography>{label}</Typography>
      <TextField
        type="number"
        value={value}
        onChange={(e) => {
          console.log(stateName);
          handleUpdateFormulaValue(e.target.value, selectedMetric);
          handleUpdateLastValue(e.target.value, stateName);
          setValue(e.target.value);
        }}
      />
      <Typography>{metric}</Typography>
      <Select
        value={selectedMetric}
        label="Tool Type"
        onChange={handleChange}
        name="dude"
      >
        {scale.map((item) => {
          return (
            <MenuItem key={item.label} value={item}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

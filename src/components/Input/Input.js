// IMPORT

// REACT
import { useState, useEffect, useRef } from "react";

// COMPONENTS

// UTILS
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";

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
  const fullScale = [
    { label: "W", multiplier: 1, fullMetric: "Watt" },
    { label: "KW", multiplier: 1000, fullMetric: "Watt" },
    { label: "l/s", multiplier: 1, fullMetric: "Liter" },
    { label: "l/m", multiplier: 60, fullMetric: "Liter" },
    { label: "l/h", multiplier: 3600, fullMetric: "Liter" },
    { label: "m3/h", multiplier: 3.6, fullMetric: "Meter??" },
    { label: "m3/s", multiplier: 0.001, fullMetric: "Meter??" },
    { label: "kPa", multiplier: 0.001, fullMetric: "Watt" },
    { label: "bar", multiplier: 0.00001, fullMetric: "Watt" },
    { label: "Mvs", multiplier: 0.0101974, fullMetric: "Watt" },
    { label: "mm", multiplier: 1, fullMetric: "Mm" },
  ];
  const scale = fullScale.filter((item) => item.fullMetric === fullMetric);
  // STATE
  const [value, setValue] = useState(defaultValue);
  const savedMetric = localStorage.getItem(fullMetric);
  const unit = scale.filter(({ label }) => label === metric)[0];
  const [selectedMetricLabel, setSelectedMetricLabel] = useState(unit?.label);
  const [selectedMetric, setSelectedMetric] = useState(unit);
  useEffect(() => {
    if (savedMetric?.length) {
      const unit = scale.filter(({ label }) => label === savedMetric)[0];
      setSelectedMetricLabel(unit?.label);
      setSelectedMetric(unit);
    }
  }, []);
  // FUNCTIONS
  const handleUpdateFormulaValue = (value) => {
    const updatedValue = turnStringToNumber(value);
    const unit = scale.filter(({ label }) => label === selectedMetric.label)[0];

    setFormulaValues((prev) => {
      return {
        ...prev,
        [stateName]: {
          ...prev[stateName],
          value: unit?.multiplier
            ? updatedValue * unit?.multiplier
            : updatedValue,
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
    setSelectedMetricLabel(e.target.value);
    const unit = scale.filter(({ label }) => label === e.target.value)[0];
    setSelectedMetric(unit);
  };
  // RETURN
  return (
    <>
      <Typography>{label}</Typography>
      <Stack direction="row">
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

        {unit?.multiplier ? (
          <Select
            value={selectedMetricLabel}
            label="Tool Type"
            onChange={handleChange}
            name="dude"
          >
            {scale.map((item) => {
              return (
                <MenuItem key={item.label} value={item.label}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        ) : (
          <p>{metric}</p>
        )}
      </Stack>
    </>
  );
};

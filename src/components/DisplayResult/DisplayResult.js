// IMPORT

// REACT
import { useState } from "react";

// COMPONENTS

// LIBRARIES
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

// UTILS

// DATA

// FUNCTIONAL COMPONENTS
export const DisplayResult = ({
  formulaValues,
  formulaFunctions,
  toolTypes,
}) => {
  // STATE
  // This is the selected toolType value that will be used in the formulas

  // FIX THISS!!!!!!This will work for now, but when we get more "tooltypes", we need to change this up
  const [selected, setSelected] = useState(toolTypes ? "Stålrør" : "");
  // FIX THISS!!!!

  // FUNCTIONS

  // console.log(formulaFunctions);
  // const result = formulaFunctions.map((item) => {
  //   return {
  //     label: item.label,
  //     value: item.func(formulaValues, selected),
  //     metric: item.metric,
  //   };
  // });
  let result = [];
  for (let i = 0; i < formulaFunctions.length; i++) {
    let resultObjects = formulaFunctions[i].func(formulaValues, selected);
    result = [...result, ...resultObjects];
  }
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  // RETURN
  return (
    <Grid container>
      {result.map((item) => {
        return (
          <Grid item xs={3} key={item.label}>
            {item.toolType ? (
              <>
                <Select
                  value={selected}
                  label="Tool Type"
                  onChange={handleChange}
                >
                  {toolTypes.map((item) => {
                    return <MenuItem value={item.value}>{item.value}</MenuItem>;
                  })}
                </Select>
              </>
            ) : (
              <Typography>{item.label}</Typography>
            )}

            <Typography>
              {item.result} {item.metric}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

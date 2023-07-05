// IMPORT

// REACT
import { useState } from "react";

// COMPONENTS

// LIBRARIES

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
  // RETURN
  return (
    <div
    // style={{
    //   backgroundColor: "white",
    //   padding: 20,
    //   borderRadius: 10,
    //   shadowColor: "#171717",
    //   shadowOffset: { width: -2, height: 4 },
    //   shadowOpacity: 0.2,
    //   shadowRadius: 3,
    // }}
    >
      {result.map((item) => {
        return (
          <div
            key={item.label}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: 200,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            {item.toolType ? null : (
              // <SelectList
              //   setSelected={setSelected}
              //   data={toolTypes}
              //   defaultOption={{ key: "Stålrør", value: "Stålrør" }}
              //   search={false}
              //   boxStyles={{ borderRadius: 5 }}
              // />
              <div>{item.label}</div>
            )}

            <div>
              {item.result} {item.metric}
            </div>
          </div>
        );
      })}
    </div>
  );
};

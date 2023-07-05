// IMPORT

// REACT
import React, { useState } from "react";

// DATA
import { buttongroup_items } from "./Buttongroup_items";
import { allFormulaData } from "../../Data/formulaData/CombinedData";

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
  // RETURN
  return (
    <div>
      <div>
        {buttonGroup.map((button) => {
          return (
            // Maybe change to "Pressable" in the future
            <button
              key={button.label}
              // style={[
              //   styles.btn,
              //   selectedIndex === button.id
              //     ? { backgroundColor: "#6B7280" }
              //     : null,
              // ]}
              onClick={() => {
                handleSwitchFilter(button.label, button.id);
              }}
            >
              <p
              // style={[
              //   styles.btnText,
              //   selectedIndex === button.id ? { color: "white" } : null,
              // ]}
              >
                {button.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   btnGroup: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 4,
//     overflow: "hidden",
//     borderColor: "#0000001f",
//     borderWidth: 1,
//     height: 48,
//   },
//   btn: {
//     flex: 1,
//     borderRightWidth: 0.5,
//     // borderRadius: 4,
//     overflow: "hidden",
//     borderLeftWidth: 0.5,
//     borderColor: "#0000001f",
//   },

//   btnText: {
//     textAlign: "center",
//     paddingVertical: 16,
//     fontSize: 14,
//   },
// });
export default BtnGroup;

// IMPORT

// React Native

// ReactNativeElements

// Components
import { Slider } from "./Slider";
// Utils

// Data

// Functional component
export const SliderContainer = ({
  inputdata,
  setFormulaValues,
  selectedIndex,
}) => {
  // State

  // Functions

  // Return
  return (
    <>
      {inputdata.map((slider) => {
        return (
          <Slider
            key={slider.label}
            inputdata={slider}
            setFormulaValues={setFormulaValues}
            selectedIndex={selectedIndex}
          />
        );
      })}
    </>
  );
};

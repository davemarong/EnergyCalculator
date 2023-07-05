// React
import { useState, useEffect, useRef } from "react";

// Components

// Utils

// Data

// Functional component
export const Slider = ({ inputdata, setFormulaValues, selectedIndex }) => {
  // Props
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    inputdata;

  // State
  const [value, setValue] = useState(defaultValue);

  // Functions
  const handleUpdateFormulaValue = (value) => {
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };

  const increaseValue = () => {
    setValue(value + step);
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };
  const decreaseValue = () => {
    setValue(value - step);
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: value } };
    });
  };
  // UseEffect
  useEffect(() => {
    handleUpdateFormulaValue(value);
  }, [selectedIndex]);

  const sliderAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  // Return
  return (
    <>
      <div style={styles.label}>
        <div>{label}</div>
        <div>
          {value.toFixed(2)} {metric}
        </div>
      </div>
      <div style={styles.slide_container}>
        <button style={styles.slide_image} onClick={decreaseValue}>
          {/* <Image
            style={styles.icon_left}
            source={require("../../assets/icons/left.png")}
          /> */}
        </button>
        {/* <SliderElement
          style={styles.slide}
          thumbStyle={{
            // backgroundColor: sliderAnim.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: ["red", "black"],
            // }),
            backgroundColor: "#f4511e",
          }}
          value={value}
          maximumValue={max}
          minimumValue={min}
          step={step}
          onValueChange={setValue}
          onSlidingComplete={(value) => {
            handleUpdateFormulaValue(value);
          }}
        /> */}
        <button style={styles.slide_image} onClick={increaseValue}>
          {/* <Image
            style={styles.icon_right}
            source={require("../../assets/icons/right.png")}
          /> */}
        </button>
      </div>
    </>
  );
};

// const styles = StyleSheet.create({
//   label: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   icon_left: {
//     width: 25,
//     height: 35,
//   },
//   icon_right: {
//     width: 25,
//     height: 35,
//     // marginLeft: 10,
//   },
//   slide_container: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   slide_image: {
//     flex: 1,
//   },
//   slide: { width: "85%" },
// });

// React Native
import {
  Animated,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

const sliderAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

<SliderElement
  thumbStyle={{
    backgroundColor: sliderAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["red", "black"],
    }),
  }}
  // thumbProps={<Animated.Text />}
  value={value}
  maximumValue={max}
  minimumValue={min}
  step={step}
  onValueChange={setValue}
  // onSlidingStart={() => {
  //   Animated.timing(sliderAnim, {
  //     toValue: 1,
  //     duration: 200,
  //     useNativeDriver: false,
  //   }).start();
  // }}
  onSlidingComplete={(value) => {
    handleUpdateFormulaValue(value);
    // Animated.timing(sliderAnim, {
    //   toValue: 0,
    //   duration: 200,
    //   useNativeDriver: false,
    // }).start();
  }}
/>;

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

export const AView = Animated.createAnimatedComponent(View);
export const AInput = Animated.createAnimatedComponent(TextInput);
export const AText = Animated.createAnimatedComponent(Text);
export const ATouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

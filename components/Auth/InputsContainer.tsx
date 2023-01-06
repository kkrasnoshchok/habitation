import React, { FC } from "react";
import { TextInputProps } from "react-native";
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import Input from "./Input";

export interface InputProps extends Animated.AnimateProps<TextInputProps> {
  value: string;
  handler: (text: string) => void;
  onBlur: (e: any) => void;
  errors: string | undefined;
  touched: boolean | undefined;
  icon?: {
    name: string;
    onClick: () => void;
  };
}

interface InputsContainerProps {
  email: InputProps;
  password: InputProps;
}

const InputsContainer: FC<InputsContainerProps> = ({ email, password }) => (
  <>
    <Input
      input={{
        ...email,
        entering: FadeInLeft.delay(300).duration(100),
        exiting: FadeOutLeft.duration(100),
      }}
      label={{
        text: "E-Mail",
        entering: FadeInLeft.delay(200).duration(100),
        exiting: FadeOutLeft.duration(100),
      }}
    />
    <Input
      input={{
        ...password,
        entering: FadeInLeft.delay(600).duration(100),
        exiting: FadeOutLeft.duration(100),
      }}
      label={{
        text: "Password",
        entering: FadeInLeft.delay(400).duration(100),
        exiting: FadeOutLeft.duration(100),
      }}
    />
  </>
);

export default InputsContainer;

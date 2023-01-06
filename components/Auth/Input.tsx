import React, { FC, useRef } from "react";
import { StyleSheet, TextInput, TextProps, View } from "react-native";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import { colors } from "../../design/colors";
import { Fonts, FontSizes, getFontStyle } from "../../design/fonts";
import { spacing } from "../../design/spacing";
import { screenWidth } from "../../utils/constants";
import { AInput, AText, ATouchableOpacity, AView } from "../Animated";
import { InputProps } from "./InputsContainer";
import { Entypo } from "@expo/vector-icons";

interface LabelProps extends Animated.AnimateProps<TextProps> {
  text: string;
}

interface InputComponentProps {
  label: LabelProps;
  input: InputProps;
}

type InputComponent = FC<InputComponentProps>;

const Input: InputComponent = ({
  input: { handler, errors, touched, icon, ...inputRest },
  label,
}) => {
  return (
    <View style={styles.container}>
      <AText style={styles.inputLabel} {...label}>
        {label.text}
      </AText>
      <AView
        style={[
          styles.inputContainer,
          errors && touched ? styles.inputContainerError : false,
        ]}
      >
        <AInput
          style={[styles.input, errors && touched ? styles.inputError : false]}
          onChangeText={handler}
          {...inputRest}
        />
        {icon && (
          <ATouchableOpacity
            activeOpacity={1}
            onPress={icon.onClick}
            style={{ marginLeft: spacing.small }}
          >
            <Entypo
              name={icon.name}
              color={errors && touched ? colors.error : colors.placeholder}
              size={24}
            />
          </ATouchableOpacity>
        )}
      </AView>
      {errors && touched && (
        <AText
          style={styles.error}
          entering={SlideInLeft}
          exiting={SlideOutLeft}
        >
          {errors}
        </AText>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: spacing.medium,
    width: screenWidth - 64,
  },
  inputLabel: {
    marginBottom: spacing.tiny,
    marginLeft: spacing.medium,
    ...getFontStyle(
      Fonts.Quicksand_Light,
      FontSizes.smallText,
      colors.text_secondary
    ),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.text,
    padding: spacing.medium,
    borderRadius: 24,
  },
  inputContainerError: {
    borderColor: colors.error,
  },
  input: {
    flex: 1,
    bottom: 1,
    ...getFontStyle(Fonts.Quicksand_Medium, FontSizes.text, colors.text),
  },
  inputError: {
    color: colors.error,
  },
  error: {
    marginTop: spacing.small,
    marginLeft: spacing.medium,
    ...getFontStyle(Fonts.Quicksand_Medium, FontSizes.smallText, colors.error),
  },
});

export default Input;

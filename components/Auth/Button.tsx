import React, { FC } from "react";
import { FadeInUp } from "react-native-reanimated";
import { PressableProps, StyleSheet } from "react-native";
import { AText, ATouchableOpacity } from "../Animated";
import { spacing } from "../../design/spacing";
import { colors } from "../../design/colors";
import { screenWidth } from "../../utils/constants";
import { Fonts, FontSizes, getFontStyle } from "../../design/fonts";

const Button: FC<PressableProps> = ({ disabled, ...props }) => (
  <ATouchableOpacity
    entering={FadeInUp.delay(800).duration(200)}
    style={[styles.button, disabled ? styles.buttonDisabled : false]}
    disabled={!!disabled}
    {...props}
  >
    <AText
      style={[styles.buttonText, disabled && styles.buttonDisabledText]}
      children="Proceed"
    />
  </ATouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.huge,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 32,
    width: screenWidth - 64,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.big,
    backgroundColor: colors.text,
  },
  buttonDisabled: {
    opacity: 0.3,
    backgroundColor: colors.bg,
    borderColor: colors.error,
  },
  buttonDisabledText: {
    color: colors.error,
  },
  buttonText: {
    ...getFontStyle(Fonts.Quicksand_SemiBold, FontSizes.text, colors.bg),
  },
});

export default Button;

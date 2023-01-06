import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { colors } from "../../design/colors";
import { Fonts, FontSizes, getFontStyle } from "../../design/fonts";
import { spacing } from "../../design/spacing";
import { AText } from "../Animated";

const Title: FC = () => (
  <AText
    entering={FadeInUp.duration(300)}
    exiting={FadeOutUp.duration(100)}
    style={styles.title}
    children={"Sign in/up"}
  />
);

const styles = StyleSheet.create({
  title: {
    ...getFontStyle(Fonts.Quicksand_Bold, FontSizes.title, colors.text),
    marginBottom: spacing.big,
  },
});

export default Title;

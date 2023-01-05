import { useNavigation } from "@react-navigation/native";
import React, { FC, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import Animated, { FadeInLeft, FadeInUp } from "react-native-reanimated";
import SafeContainer from "../components/SafeContainer";
import { colors } from "../design/colors";
import { Fonts, FontSizes, getFontStyle } from "../design/fonts";
import { spacing } from "../design/spacing";
import { $flex } from "../design/styling";
import { screenWidth } from "../utils/constants";

const Auth: FC = () => {
  const { navigate } = useNavigation();
  const [isLoginFlow, setLoginFlow] = useState(false);
  const AInput = Animated.createAnimatedComponent(TextInput);
  const AText = Animated.createAnimatedComponent(Text);

  return (
    <SafeContainer
      innerContainerStyle={styles.innerContainer}
      containerStyle={styles.container}
    >
      <AText
        entering={FadeInUp}
        style={{
          ...getFontStyle(Fonts.Quicksand_Bold, FontSizes.title, colors.text),
          marginBottom: spacing.medium,
        }}
        children={isLoginFlow ? "Log in" : "Sign up"}
      />
      <View style={{ width: screenWidth - 64 }}>
        <AText
          style={{
            marginBottom: spacing.tiny,
            marginLeft: spacing.medium,
            ...getFontStyle(
              Fonts.Quicksand_Light,
              FontSizes.smallText,
              colors.text_secondary
            ),
          }}
        >
          Input label
        </AText>
        <AInput
          style={{ borderWidth: 1, padding: spacing.big, borderRadius: 24 }}
        />
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    ...$flex,
    backgroundColor: colors.bg,
  },
  innerContainer: {
    ...$flex,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xlarge,
  },
});

export default Auth;

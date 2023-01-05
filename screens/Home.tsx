import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../design/colors";
import SafeContainer from "../components/SafeContainer";
import {
  Fonts,
  FontSizes,
  getFontStyle,
  QuicksandFonts,
} from "../design/fonts";
import { useFonts } from "@expo-google-fonts/quicksand";
import { spacing } from "../design/spacing";
import { $flex } from "../design/styling";
import * as SplashScreen from "expo-splash-screen";
import { firebaseAuth } from "../utils/firebase";
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <SafeContainer
      innerContainerStyle={styles.innerContainer}
      containerStyle={styles.container}
    >
      <Text
        style={{
          ...getFontStyle(Fonts.Quicksand_Bold, FontSizes.title, colors.text),
        }}
        onPress={() => navigate("Auth")}
        children="My habits"
      />
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
    paddingHorizontal: spacing.xlarge,
  },
});

export default Home;

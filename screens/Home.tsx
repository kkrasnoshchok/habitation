import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../design/colors";
import SafeContainer from "../components/SafeContainer";
import { Fonts, FontSizes, getFontStyle } from "../design/fonts";
import { spacing } from "../design/spacing";
import { $flex } from "../design/styling";
import { firebaseAuth } from "../utils/firebase";
import { StackActions, useNavigation } from "@react-navigation/native";
import { ATouchableOpacity } from "../components/Animated";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => navigation.dispatch(StackActions.replace("Auth")))
      .catch((e) => console.error(e.message));
  };

  return (
    <SafeContainer
      innerContainerStyle={styles.innerContainer}
      containerStyle={styles.container}
    >
      <Text
        style={{
          ...getFontStyle(Fonts.Quicksand_Bold, FontSizes.title, colors.text),
        }}
        children="My habits"
      />
      <Text
        style={{
          marginTop: spacing.large,
          ...getFontStyle(Fonts.Quicksand_Bold, FontSizes.text, colors.text),
        }}
      >
        Hello, {firebaseAuth.currentUser?.email}
      </Text>
      <ATouchableOpacity onPress={handleSignOut}>
        <Text
          style={{
            marginTop: spacing.large,
            ...getFontStyle(
              Fonts.Quicksand_Bold,
              FontSizes.title,
              colors.text_secondary
            ),
          }}
        >
          Sign out
        </Text>
      </ATouchableOpacity>
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

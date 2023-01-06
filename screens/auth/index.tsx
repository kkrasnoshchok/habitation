import { useNavigation } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet } from "react-native";
import SafeContainer from "../../components/SafeContainer";
import { colors } from "../../design/colors";
import { spacing } from "../../design/spacing";
import { $flex } from "../../design/styling";
import { onAuthStateChanged } from "firebase/auth";
import { useFormik } from "formik";
import Button from "../../components/Auth/Button";
import Title from "../../components/Auth/Title";
import InputsContainer from "../../components/Auth/InputsContainer";
import { firebaseAuth } from "../../utils/firebase";
import { initialValues, onSubmit, validationSchema } from "./utils";

const Auth: FC = () => {
  const { navigate } = useNavigation();
  const [validateOnChange, setValidateOnChange] = useState(false);
  const [isTextEntrySecure, setTextEntrySecure] = useState(true);

  const {
    values,
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange,
    onSubmit,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    setValidateOnChange(!!values.email && !!values.password);
  }, [values]);

  return (
    <KeyboardAvoidingView style={$flex} behavior="padding">
      <SafeContainer
        innerContainerStyle={styles.innerContainer}
        containerStyle={styles.container}
      >
        <Title />
        <InputsContainer
          email={{
            value: values.email,
            handler: handleChange("email"),
            onBlur: handleBlur("email"),
            errors: errors.email,
            touched: touched.email,
            icon: {
              name: "circle-with-cross",
              onClick: () => handleChange("email")(""),
            },
            keyboardType: "email-address",
            autoCapitalize: "none",
            autoFocus: true,
            autoCorrect: false,
          }}
          password={{
            value: values.password,
            handler: handleChange("password"),
            onBlur: handleBlur("password"),
            errors: errors.password,
            touched: touched.password,
            icon: {
              name: isTextEntrySecure ? "eye" : "eye-with-line",
              onClick: () => setTextEntrySecure(!isTextEntrySecure),
            },
            secureTextEntry: isTextEntrySecure,
            autoCorrect: false,
          }}
        />
        <Button
          disabled={
            !!(touched.password && errors.password) ||
            !!(touched.email && errors.email) ||
            isSubmitting
          }
          onPress={() => handleSubmit()}
        />
        {/* forgot password */}
      </SafeContainer>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...$flex,
    backgroundColor: colors.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xlarge,
  },
});

export default Auth;

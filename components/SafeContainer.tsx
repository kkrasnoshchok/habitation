import React, { FC, ReactNode } from "react";
import { ViewProps } from "react-native";
import { SafeAreaView, StyleProp, View, ViewStyle } from "react-native";
import { $flex } from "../design/styling";

interface SafeContainerProps extends ViewProps {
  containerStyle?: StyleProp<ViewStyle>;
  innerContainerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export type SafeContainerComponent = FC<SafeContainerProps>;

const SafeContainer: SafeContainerComponent = ({
  containerStyle,
  innerContainerStyle,
  children,
  ...props
}) => {
  return (
    <SafeAreaView style={[$flex, containerStyle]} {...props}>
      <View style={innerContainerStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeContainer;

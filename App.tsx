import React, { useCallback, useEffect, useState } from "react";
import { QuicksandFonts } from "./design/fonts";
import { useFonts } from "@expo-google-fonts/quicksand";
import { $flex } from "./design/styling";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Auth from "./screens/auth";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  // #region loading fonts + showing splash screen
  const [fontsLoaded] = useFonts({ ...QuicksandFonts });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // making all the API calls here
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }
  // #endregion loading fonts + showing splash screen

  return (
    <NavigationContainer>
      <View style={$flex} onLayout={onLayoutRootView}>
        <Stack.Navigator
          initialRouteName={"Auth"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;

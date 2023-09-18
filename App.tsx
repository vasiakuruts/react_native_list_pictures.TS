import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import AppMainNavigate from "./src/route/navigate";
import { Provider } from "react-redux";
import store from "./src/store";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AppMainNavigate />
      </View>
    </Provider>
  );
};
export default App;

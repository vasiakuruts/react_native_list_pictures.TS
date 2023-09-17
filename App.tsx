import {
  StyleSheet,
  ImageBackground,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Text,
} from "react-native";
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
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <View style={styles.item}>
            <AppMainNavigate />
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

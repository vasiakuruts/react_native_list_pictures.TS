import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#333",
    fontFamily: "mt-light",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  escButton: {
    position: "absolute",
    margin: 10,
    zIndex: 1,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row-reverse",
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
    flexDirection: "column-reverse",
    justifyContent: "center",
    top: 40,
    left: 30,
  },
});

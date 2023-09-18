import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff",
  },

  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 45,
  },
  titleItem: {
    fontFamily: "mt-bold",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#474747",
  },
  nameAuthor: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  author: {
    fontFamily: "mt-light",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 400,
  },

  pageText: {
    fontFamily: "mt-light",
    fontSize: 20,
  },

  pageConteiner: {
    position: "absolute",
    margin: 0,
    width: "100%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#333",
    fontFamily: "mt-light",
  },
  pageArrowConteiner: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
});

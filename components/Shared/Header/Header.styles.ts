import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: 375,
    height: 88,
  },
  wrapperContent: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "PoppinsBold",
    color: "black",
    fontSize: 24,
    fontWeight: 700,
    marginLeft: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#EBF0FF",
    width: "100%",
  },
});

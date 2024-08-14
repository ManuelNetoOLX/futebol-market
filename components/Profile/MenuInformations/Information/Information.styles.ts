import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  wrapperLabel: {
    display: "flex",
    flexDirection: "row",
    height: 56,
  },
  textLabel: {
    color: "black",
    fontSize: 18,
    fontWeight: 700,
    marginLeft: 8,
  },
  textValue: {
    color: "#E0E0E0",
    fontSize: 12,
    fontWeight: 400,
  },
});

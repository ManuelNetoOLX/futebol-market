import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#EBF0FF",
    borderWidth: 1,
    borderRadius: 5,
    padding: 24,
    gap: 16,
  },
  wrapperInformations: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 12,
    color: "#223263",
  },
  data: {
    fontSize: 12,
    color: "#0D0D0D",
  },
  code: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  divider: {
    height: 1,
    backgroundColor: "#EBF0FF",
    width: "100%",
  },
});

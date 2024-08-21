import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    padding: 16,
  },
  wrapperText: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginLeft: 16,
  },
  image: {
    width: 72,
    height: 72,
  },
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0D0D0D",
    fontFamily: "PoppinsBold",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2E7D32",
    fontFamily: "PoppinsBold",
  },
  wrapperAction: {
    gap: 152,
    display: "flex",
    flexDirection: "row",
  },
});

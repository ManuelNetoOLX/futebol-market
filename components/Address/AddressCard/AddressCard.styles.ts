import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#2E7D32",
    borderWidth: 1,
    borderRadius: 5,
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    color: "#E0E0E0",
  },
  wrapperActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2E7D32",
    borderRadius: 5,
    height: 57,
    width: 94,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    fontFamily: "PoppinsBold",
  },
});

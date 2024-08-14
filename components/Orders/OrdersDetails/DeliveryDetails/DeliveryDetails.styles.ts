import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { gap: 16 },
  wrapperCard: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    padding: 16,
  },
  sectionName: {
    fontSize: 14,
    color: "#0D0D0D",
    fontFamily: "PoppinsBold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    fontSize: 14,
    color: "#0D0D0D",
    fontFamily: "Poppins",
  },
});

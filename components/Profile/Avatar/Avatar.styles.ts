import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  wrapperLabel: {},
  name: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "PoppinsBold",
  },
  nickName: {
    fontWeight: 400,
    color: "#E0E0E0",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginHorizontal: 16,
  },
});

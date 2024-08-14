import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainerFocused: {
    borderColor: "#2E7D32",
  },
  inputContainerError: {
    borderColor: "#B60123",
  },
  inputContainer: {
    height: 48,
    borderWidth: 1,
    width: "100%",
    borderColor: "#EBF0FF",
    marginBottom: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    fontFamily: "Poppins",
  },
  icon: {
    marginHorizontal: 8,
  },
  iconFocused: {
    color: "#2E7D32",
  },
  textInput: {
    fontFamily: "Poppins",
    width: "100%",
  },
  error: {
    color: "#B60123",
  },
});

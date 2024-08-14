import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./Button.styles";

interface Props {
  text: string;
  callback: () => void;
}
export default function ButtonComponent({ text, callback }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => callback()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

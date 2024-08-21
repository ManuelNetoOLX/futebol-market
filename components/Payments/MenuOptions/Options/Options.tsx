import { View, Text } from "react-native";

import { styles } from "./Options.styles";
import { ValidPathname } from "@/constants/route";

import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: any;
  text: string;
  pathname: ValidPathname;
}

export default function Options({ text, icon, pathname }: Props) {
  const handlePress = () => {
    router.push({ pathname });
  };

  return (
    <View style={styles.wrapper} onTouchEnd={handlePress}>
      <Ionicons name={icon} color="#2E7D32" size={24} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

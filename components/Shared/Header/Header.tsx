import { router } from "expo-router";
import { styles } from "./Header.styles";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ValidPathname } from "@/constants/route";

interface Props {
  title: string;
  backButton?: boolean;
  pathname?: ValidPathname;
}

export default function Header({ title, backButton, pathname }: Props) {
  const handlePress = () => {
    if (pathname) router.push({ pathname });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperContent}>
        {backButton && (
          <Ionicons
            size={24}
            color="#E0E0E0"
            name={"arrow-back"}
            onTouchEnd={handlePress}
          />
        )}
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

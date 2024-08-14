import { View, Text } from "react-native";

import { styles } from "./Information.styles";

import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: any;
  textLabel: string;
  information: string;
}

export default function Information({ textLabel, icon, information }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperLabel}>
        <Ionicons name={icon} color="#2E7D32" size={24} />
        <Text style={styles.textLabel}>{textLabel}</Text>
      </View>
      <Text style={styles.textValue}> {information} </Text>
    </View>
  );
}

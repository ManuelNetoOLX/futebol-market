import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./AddressCard.styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  address: string;
  phone: string;
}
export default function AddressCard({ title, address, phone }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{address}</Text>
      <Text style={styles.subTitle}>{phone}</Text>
      <View style={styles.wrapperActions}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("")}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <Ionicons
          size={24}
          color="#223263"
          name={"trash-outline"}
          onTouchEnd={() => console.log("")}
        />
      </View>
    </View>
  );
}

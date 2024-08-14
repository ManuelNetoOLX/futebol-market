import { View, Text, Image } from "react-native";

import { styles } from "./Avatar.styles";

interface Props {
  name: string;
  image: string;
  nickName: string;
}

export default function Avatar({ name, image, nickName }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../../assets/images/logo-nebula-nectar.png")}
        style={styles.image}
      />
      <View style={styles.wrapperLabel}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.nickName}>{nickName}</Text>
      </View>
    </View>
  );
}

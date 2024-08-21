import { View, Text, Image } from "react-native";

import { styles } from "./ProductCard.styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  product: {
    name: string;
    price: number;
    image: string;
  };
  removeIcon?: boolean;
  onRemove?: () => void;
}

export default function ProductCard({ product, removeIcon, onRemove }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require("@/assets/images/logo-nebula-nectar.png")}
      />
      <View style={styles.wrapperText}>
        <View style={styles.wrapperAction}>
          <Text>{product.name}</Text>
          {removeIcon && (
            <Ionicons
              size={24}
              color="#2E7D32"
              name={"trash-outline"}
              onTouchEnd={onRemove}
            />
          )}
        </View>
        <Text style={styles.priceText}>R$ {product.price}</Text>
      </View>
    </View>
  );
}

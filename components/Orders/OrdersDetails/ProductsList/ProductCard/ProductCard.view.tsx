import { View, Text, Image } from "react-native";

import { styles } from "./ProductCard.styles";

interface Props {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require("../../../../../assets/images/logo-nebula-nectar.png")}
      />
      <View style={styles.wrapperText}>
        <Text>{product.name}</Text>
        <Text style={styles.priceText}>R$ {product.price}</Text>
      </View>
    </View>
  );
}

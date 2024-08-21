import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./ProductCard.styles";
import { useCountStore } from "@/state/hooks/cart";
import { Product } from "@/types/product.type";

type Props = {
  product: Product;
};
export default function ProductCard({ product }: Props) {
  const { increment, decrement, count } = useCountStore();

  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Super Promo</Text>
        <Text style={styles.subtitle}>Ver Mais</Text>
      </View>
      <View style={styles.wrapperProduct}>
        <View style={styles.border}>
          {product.imageUrl && (
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
          )}
          <Text style={styles.titleProduct}>{product.name}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.minus}
            onPress={() => decrement(1)}
            disabled={count === 0}
          >
            <Text style={styles.minusText}> - </Text>
          </TouchableOpacity>

          <View style={styles.quantity}>
            <Text style={styles.quantityText}> {count} </Text>
          </View>
          <TouchableOpacity style={styles.plus} onPress={() => increment(1)}>
            <Text style={styles.plusText}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

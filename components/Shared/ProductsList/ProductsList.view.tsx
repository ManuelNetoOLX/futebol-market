import { View, Text } from "react-native";

import { styles } from "./ProductsList.styles";
import ProductCard from "./ProductCard/ProductCard.view";

interface Props {
  listProducts: {
    name: string;
    price: number;
    image: string;
  }[];
  removeIcon?: boolean;
  onRemove?: () => void;
}

export default function ProductsListView({
  listProducts,
  removeIcon,
  onRemove,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionName}>Produtos</Text>
      <View style={styles.wrapperCards}>
        {listProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            removeIcon={removeIcon}
            onRemove={onRemove}
          />
        ))}
      </View>
    </View>
  );
}

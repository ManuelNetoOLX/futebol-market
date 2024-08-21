import { ProductCard } from "@/components/Home";
import { useProductService } from "@/services/product/product.hook";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function ProductsScreen() {
  const { getProducts, loading, error } = useProductService();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [getProducts]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Text>Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

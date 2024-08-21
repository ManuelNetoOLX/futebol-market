import { StyleSheet, View, SafeAreaView } from "react-native";

import { Input } from "@/components/Shared";
import { ProductCard, CarouselComponent } from "@/components/Home/";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ paddingHorizontal: 8 }}>
          <Input
            placeholder="Pesquisar"
            iconName="search-outline"
            onChangeText={(e) => console.log(e)}
          />
        </View>
        <View style={styles.lineSeparator} />
        <CarouselComponent />
        {/* <ProductCard /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    marginTop: 32,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: "#EBF0FF",
    marginVertical: 1,
  },
});

import { StyleSheet, SafeAreaView, View } from "react-native";

import {
  Header,
  ProductsList,
  PaymentDetails,
  ButtonComponent,
} from "@/components/Shared";
import { router } from "expo-router";

export default function CartScreen() {
  const goToStatus = () => {
    router.push({
      pathname: "/status",
      params: { status: "sucess", pathname: "/cart" },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Carrinho" backButton={false} />
      <View style={styles.wrapper}>
        <ProductsList removeIcon={true} onRemove={() => console.log("cart")} />
        <PaymentDetails />
      </View>
      <ButtonComponent
        text="Próximo"
        callback={() => goToStatus()}
      ></ButtonComponent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
  },
});

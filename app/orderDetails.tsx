import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import { Header } from "@/components/Shared";

import { OrdersDetails } from "@/components/Orders";

export default function OrderDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          title="Detalhes do pedidos"
          backButton={true}
          pathname="/orders"
        />
        <OrdersDetails />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

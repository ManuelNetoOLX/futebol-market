import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import { Header } from "@/components/Shared";
import { ListOrders } from "@/components/Orders";

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Pedidos" backButton={true} pathname="/account" />
        <ListOrders />
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

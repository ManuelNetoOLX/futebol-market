import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import { Header } from "@/components/Shared";
import { MenuOptions } from "@/components/Payments";

export default function PaymentsMethodsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Pagamentos" backButton={true} pathname="/account" />
        <MenuOptions />
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

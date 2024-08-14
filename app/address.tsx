import { StyleSheet, SafeAreaView, View } from "react-native";

import { ListCards } from "@/components/Address";
import { Header, ButtonComponent } from "@/components/Shared";

export default function AddressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Endereços" backButton={true} pathname="/account" />
        <ListCards />
      </View>

      <ButtonComponent text="Novo" callback={() => console.log("oi")} />
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

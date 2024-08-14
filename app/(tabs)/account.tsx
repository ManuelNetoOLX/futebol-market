import { StyleSheet, SafeAreaView } from "react-native";

import { Header } from "@/components/Shared";
import { MenuOptions } from "@/components/Account";

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Conta" backButton={false} />
      <MenuOptions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

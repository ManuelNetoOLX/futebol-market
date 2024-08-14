import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import { Header, ButtonComponent } from "@/components/Shared";
import { Avatar, MenuInformations } from "@/components/Profile";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Perfil" backButton={true} pathname="/account" />
        <Avatar name="Manuel Neto" nickName="@manuel.neto" image="" />
        <MenuInformations />
      </View>

      <ButtonComponent text="Editar" callback={() => console.log("")} />
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

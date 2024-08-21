import { StyleSheet, SafeAreaView, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

import { ButtonComponent } from "@/components/Shared";

export default function StatusScreen() {
  const { status, pathname } = useLocalSearchParams();
  const isSuccess = status === "sucess";
  const goTo = () => {
    console.log(pathname);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View
          style={isSuccess ? styles.iconWrapperSucess : styles.iconWrapperError}
        >
          <Ionicons
            size={32}
            color="white"
            name={isSuccess ? "checkmark" : "close"}
          />
        </View>
        <Text>
          {isSuccess
            ? "Operação concluída com sucesso!"
            : "Algo deu errado. Tente novamente."}
        </Text>
      </View>
      <ButtonComponent text="Voltar" callback={goTo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  wrapper: {
    gap: 16,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  iconWrapperSucess: {
    width: 72,
    height: 72,
    color: "#fff",
    display: "flex",
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E7D32",
  },
  iconWrapperError: {
    width: 72,
    height: 72,
    color: "#fff",
    display: "flex",
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

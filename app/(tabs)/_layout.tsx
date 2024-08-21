import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2E7D32",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: { fontFamily: "PoppinsBold", fontSize: 10 },
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color="#2E7D32"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabelStyle: { fontFamily: "PoppinsBold", fontSize: 10 },
          title: "Carrinho",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              color="#2E7D32"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabelStyle: { fontFamily: "PoppinsBold", fontSize: 10 },
          title: "Conta",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color="#2E7D32"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

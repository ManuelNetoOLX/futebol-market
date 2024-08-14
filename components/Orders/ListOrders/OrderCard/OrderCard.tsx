import { View, Text } from "react-native";

import { router } from "expo-router";

import { styles } from "./OrderCard.styles";

interface Props {
  order: {
    code: string;
    date: string;
    status: string;
    items: string;
    totalPrice: string;
  };
}
export default function OrderCard({ order }: Props) {
  const goToOrderDetails = () => {
    router.push({ pathname: "/orderDetails" });
  };

  return (
    <View style={styles.wrapper} onTouchEnd={goToOrderDetails}>
      <Text style={styles.code}>{order.code}</Text>
      <Text style={styles.label}>Data do pedido : {order.date}</Text>
      <View style={styles.divider} />
      <View style={styles.wrapperInformations}>
        <Text style={styles.label}>Status do pedido</Text>
        <Text style={styles.data}>{order.status}</Text>
      </View>
      <View style={styles.wrapperInformations}>
        <Text style={styles.label}>Items</Text>
        <Text style={styles.data}>{order.items}</Text>
      </View>
      <View style={styles.wrapperInformations}>
        <Text style={styles.label}>Valor</Text>
        <Text style={styles.price}>R${order.totalPrice}</Text>
      </View>
    </View>
  );
}

import { View } from "react-native";
import { styles } from "./ListOrders.styles";
import OrderCard from "./OrderCard/OrderCard";

export default function ListOrders() {
  const listOrders = [
    {
      code: "LQNSU346JK",
      date: "August 12, 2021",
      status: "Delivered",
      items: "2 items",
      totalPrice: "200",
    },
    {
      code: "SDG1345KJD",
      date: "August 1, 2017",
      status: "Delivered",
      items: "2 items",
      totalPrice: "200",
    },
  ];

  return (
    <View style={styles.wrapper}>
      {listOrders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </View>
  );
}

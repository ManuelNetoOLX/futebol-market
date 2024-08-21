import { View } from "react-native";

import { styles } from "./OrdersDetails.styles";
import DeliveryDetails from "./DeliveryDetails/DeliveryDetails.container";

import { PaymentDetails, ProductsList } from "@/components/Shared";

export default function OrdersDetailsComponent() {
  return (
    <View style={styles.wrapper}>
      <ProductsList />
      <DeliveryDetails />
      <PaymentDetails />
    </View>
  );
}
